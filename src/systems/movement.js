import { dijkstra } from "../lib/dijkstra";
import ecs, { cache, player, gameState } from "../state/ecs";
import { chars, colors } from "../lib/graphics";
import { grid } from "../lib/canvas";
import { cellToId } from "../lib/grid";
import MoveTo from "../components/MoveTo";
import IsDead from "../components/IsDead";
import { movableEntities } from "../queries";

export const movement = () => {
  movableEntities.get().forEach((entity) => {
    let mPos = { x: entity.moveTo.x, y: entity.moveTo.y };
    if (entity.moveTo.relative) {
      mPos = {
        x: entity.position.x + entity.moveTo.x,
        y: entity.position.y + entity.moveTo.y,
      };
    }

    const { width, height, x, y } = grid.map;

    // observe map boundaries
    const mx = Math.min(width + x - 1, Math.max(x, mPos.x));
    const my = Math.min(height + y - 1, Math.max(y, mPos.y));

    let blockers = [];

    const locId = cellToId({ x: mx, y: my });
    const entitiesAtLoc = cache.readSet("entitiesAtLocation", locId);

    entitiesAtLoc.forEach((eid) => {
      const potentialBlocker = ecs.getEntity(eid);
      if (potentialBlocker.isBlocking) {
        blockers.push(potentialBlocker);
      }
    });

    if (blockers.length) {
      blockers.forEach((blocker) => {
        if (blocker.health) {
          blocker.fireEvent("take-damage", { amount: 5 });
          blocker.add("Animate", {
            animation: {
              type: "color",
              stops: [colors.damage, blocker.appearance.color],
            },
          });

          if (blocker.health.current <= 0) {
            if (!blocker.isDead) {
              blocker.add("IsDead");
              blocker.remove("Layer400");
              blocker.add("Layer300");
              blocker.remove("IsBlocking");
              blocker.appearance.char = chars.corpse;
              blocker.remove("Brain");
            }
          }
        }
      });
      return entity.remove(MoveTo);
    }

    // update cache
    cache.delete("entitiesAtLocation", cellToId(entity.position), entity.id);
    cache.addSet("entitiesAtLocation", cellToId({ x: mx, y: my }), entity.id);

    if (entity.id === player.id && gameState.playerTurn) {
      const playerDijkstraMap = dijkstra([{ x: mx, y: my }]);
      cache.addObj("dijkstraMaps", "player", playerDijkstraMap);
    }

    entity.position.x = mx;
    entity.position.y = my;

    entity.remove(MoveTo);
  });
};
