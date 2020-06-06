import "./lib/canvas.js";
import { pxToCell } from "./lib/canvas";
import { colors } from "./lib/graphics";
import ecs, { cache, player, gameState } from "./state/ecs";
import { input, processUserInput } from "./lib/process-user-input";
import { cellToId } from "./lib/grid";
import { log } from "./lib/adventure-log";
import { dijkstra } from "./lib/dijkstra";

import initDungeonLevel from "./initializers/dungeon-level.init";

import { ai } from "./systems/ai";
import { animation } from "./systems/animation";
import { fov } from "./systems/fov";
import { movement } from "./systems/movement";
import { render } from "./systems/render";

import { animatingEntities } from "./queries";

document.addEventListener("keydown", (ev) => input(ev.key));
document.querySelector("#loading").classList.add("hide");

function initGame() {
  const dungeon = initDungeonLevel();
  player.position.x = dungeon.start.x;
  player.position.y = dungeon.start.y;

  cache.addSet("entitiesAtLocation", cellToId(dungeon.start), player.id);

  const playerDijkstraMap = dijkstra([
    { x: player.position.x, y: player.position.y },
  ]);
  cache.addObj("dijkstraMaps", "player", playerDijkstraMap);

  log({ text: "COVERED IN BLOOD!", fg: "red" });
  log({ text: "A game where you get COVERED IN BLOOD!" });
  log({ text: "Watch out for skellies and jellies!" });
}

initGame();

function gameTick() {
  if (!gameState.playerTurn) {
    ai();
  }
  movement();
  if (gameState.playerTurn) {
    fov();
  }
  render();
}

gameTick();

function update() {
  // if (animatingEntities.get().size) {
  //   animation();
  // }

  if (gameState.userInput && gameState.playerTurn && !player.isDead) {
    processUserInput();
    gameTick();
    gameState.userInput = null;
    gameState.turn = gameState.turn += 1;
    gameState.playerTurn = false;
  }

  if (!gameState.playerTurn) {
    gameTick();
    gameState.playerTurn = true;
  }
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// it's a PITA to mock canvas in jest so we just hack it's running
if (process.env.NODE_ENV !== "test") {
  const canvas = document.querySelector("#canvas");

  canvas.onclick = (e) => {
    const [x, y] = pxToCell(e);
    const locId = cellToId({ x, y });

    cache
      .readSet("entitiesAtLocation", locId)
      .forEach((eId) => console.log(ecs.getEntity(eId).serialize()));
  };
}
