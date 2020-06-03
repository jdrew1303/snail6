import { random, sample, times } from "lodash";
import { dijkstra, dijkstraReverse } from "../lib/dijkstra";
import ecs, { cache, player, gameState } from "../state/ecs";
import { chars, colors } from "../lib/graphics";
import { grid } from "../lib/canvas";
import { toLocId, getNeighborIds } from "../lib/grid";
import { movableEntities, soiledEntities } from "../queries";

import { aStar } from "../lib/pathfinding";

const updateBloodDijkstra = () => {
  // currently we only have blood for soilage so we can do this:
  const bloodDijkstraMap = dijkstra(
    [...soiledEntities.get()].map((x) => x.position)
  );
  cache.addObj("dijkstraMaps", "blood", bloodDijkstraMap);
};

const kill = (entity) => {
  entity.add("IsDead");
  entity.remove("Layer400");
  entity.add("Layer300");
  entity.remove("IsBlocking");
  entity.remove("Brain");
  if (!entity.has("isBoneless")) {
    entity.appearance.char = chars.corpse;
  }

  if (entity.has("isBoneless")) {
    entity.appearance.background = "transparent";
    entity.appearance.currentBackground = "transparent";
    // once more spatter blood!
    splatterBlood(entity, self);
  }
};

const hit = (targetEntity) => {
  targetEntity.fireEvent("take-damage", { amount: 5 });

  if (targetEntity.has("Blood")) {
    splatterBlood(targetEntity);
  }

  if (!targetEntity.has("Animate")) {
    targetEntity.add("Animate", {
      animation: {
        type: "color",
        stops: [
          colors.damage,
          targetEntity.appearance.currentColor || targetEntity.appearance.color,
        ],
      },
    });
  }
};

const splatterBlood = (entity, splatterSelf = false) => {
  const neighborIds = getNeighborIds(entity.position, "ALL");
  const locIds = [];

  if (splatterSelf) {
    locIds.push(toLocId(entity.position));
  }

  times(random(0, 8), () => locIds.push(sample(neighborIds)));

  locIds.forEach((locId) => {
    cache.readSet("entitiesAtLocation", locId).forEach((x) => {
      ecs.getEntity(x).add("Soilage", {
        color: entity.blood.color,
        name: "blood",
        sourceEntityId: entity.id,
        sourceName: entity.name.nomen,
      });
    });
  });

  updateBloodDijkstra();
};

const bumpAttack = (targetEntity, entity) => {
  // if (entity.canAbsorb) {
  //   absorb();
  // }
  if (targetEntity.health) {
    hit(targetEntity);

    if (targetEntity.health.current <= 0) {
      kill(targetEntity);
    }
  }
};

const washInFountain = (targetEntity, fountain) => {
  if (targetEntity.has("Soilage")) {
    if (fountain.has("Soilage")) {
      console.log("You can't clean yourself in this foul fountain");
    } else {
      targetEntity
        .get("Soilage")
        .forEach((x) => fountain.add("Soilage", { ...x.serialize() }));
      targetEntity.fireEvent("clean");
    }
  }

  updateBloodDijkstra();
};

const absorbTarget = (target, entity) => {
  // get soilage from all non absorbing entities at target
  const entitiesAtLoc = cache.readSet(
    "entitiesAtLocation",
    toLocId(target.position)
  );
  // absorb them
  entitiesAtLoc.forEach((eId) => {
    const tEntity = ecs.getEntity(eId);
    if (!tEntity.canAbsorb && tEntity.soilage) {
      tEntity
        .get("Soilage")
        .forEach((x) => entity.add("Soilage", { ...x.serialize() }));
      tEntity.fireEvent("clean");
    }
  });
};

const absorb = (entity) => {
  // get all entities at loc excluding self
  const entitiesAtLoc = cache.readSet(
    "entitiesAtLocation",
    toLocId(entity.position)
  );

  entitiesAtLoc.forEach((eId) => {
    if (eId !== entity.id) {
      const targetEntity = ecs.getEntity(eId);
      if (targetEntity.has("Soilage")) {
        // clone all soilage and add to self
        targetEntity
          .get("Soilage")
          .forEach((x) => entity.add("Soilage", { ...x.serialize() }));
        targetEntity.fireEvent("clean");
      }

      // todo: should actually put the entity into it's inventory (will need to include items eventually)
      if (targetEntity.has("isDead")) {
        cache.delete(
          "entitiesAtLocation",
          toLocId(targetEntity.position),
          targetEntity.id
        );
        targetEntity.destroy();
      }
    }
  });

  updateBloodDijkstra();
};

export const movement = () => {
  movableEntities.get().forEach((entity) => {
    aStar(entity.position, player.position);

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

    const locId = toLocId({ x: mx, y: my });
    const entitiesAtLoc = cache.readSet("entitiesAtLocation", locId);

    if (entitiesAtLoc) {
      entitiesAtLoc.forEach((eid) => {
        const potentialBlocker = ecs.getEntity(eid);
        if (potentialBlocker.isBlocking) {
          blockers.push(potentialBlocker);
        }
      });
    }

    if (blockers.length) {
      blockers.forEach((blocker) => {
        // if has brain and not the same species - bump attack
        if (entity.canAbsorb) {
          absorbTarget(entity, blocker);
        }

        if (
          (blocker.brain || blocker.name.nomen === "player") &&
          entity.name.nomen !== blocker.name.nomen
        ) {
          bumpAttack(blocker);
        }

        if (blocker.name.nomen === "fountain") {
          washInFountain(entity, blocker);
        }
      });
      return entity.remove("MoveTo");
    }

    if (entity.has("canAbsorb")) {
      absorb(entity);
    }

    // update cache
    cache.delete("entitiesAtLocation", toLocId(entity.position), entity.id);
    cache.addSet("entitiesAtLocation", toLocId({ x: mx, y: my }), entity.id);

    if (entity.id === player.id && gameState.playerTurn) {
      const playerDijkstraMap = dijkstra([{ x: mx, y: my }]);
      const playerReverse = dijkstraReverse(playerDijkstraMap);

      cache.addObj("dijkstraMaps", "player", playerDijkstraMap);
      cache.addObj("dijkstraMaps", "playerReverse", playerReverse);
    }

    entity.position.px = entity.position.x;
    entity.position.py = entity.position.y;
    entity.position.x = mx;
    entity.position.y = my;

    entity.remove("MoveTo");
  });
};
