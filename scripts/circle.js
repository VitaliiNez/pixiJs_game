import { Graphics } from "../pixi/pixi.js";
import { SIZES } from "../utils/var.js";

export class Circle {
  constructor(app, onClick) {
    this.app = app;
    this.onClick = onClick;

    this.graphics = new Graphics();
    this.graphics.beginFill(0xffcc00);
    this.graphics.drawCircle(0, 0, SIZES.circle);
    this.graphics.endFill();

    this.graphics.interactive = true;
    this.graphics.buttonMode = true;
    this.graphics.on("pointerdown", this.onClick);
  }

  randomPlacement() {
    this.graphics.x =
      Math.random() * (this.app.renderer.width - SIZES.circle * 2) +
      SIZES.circle;
    this.graphics.y =
      Math.random() * (this.app.renderer.height - SIZES.circle * 2) +
      SIZES.circle;
  }
}
