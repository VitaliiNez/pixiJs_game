import { Application } from "../pixi/pixi.js";
import { Game } from "./game.js";

const app = new Application();

await app.init({
  background: "#523687",
  width: window.innerWidth,
  height: window.innerHeight,
});

document.body.appendChild(app.view);

const game = new Game(app);
game.start();
