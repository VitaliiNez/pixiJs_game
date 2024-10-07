import { Circle } from "./circle.js";
import { Text } from "../pixi/pixi.js";
import { SIZES } from "../utils/var.js";

export class Game {
  constructor(app) {
    this.app = app;
    this.counter = 0;

    this.pointsText = new Text(`Points: ${this.counter}`, {
      fontSize: SIZES.fontSize,
      fill: 0xffffff,
    });
    this.pointsText.x = (this.app.renderer.width - this.pointsText.width) / 2;
    this.pointsText.y = 10;
    this.app.stage.addChild(this.pointsText);

    this.circle = new Circle(this.app, this.onCircleClick.bind(this));
  }

  start() {
    this.app.stage.addChild(this.circle.graphics);
    this.circle.randomPlacement();
  }

  onCircleClick() {
    this.counter++;
    this.pointsText.text = `Points: ${this.counter}`;
    this.circle.randomPlacement();
  }
}
