import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Capsule extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasRenderer.loadNewImage('./assets/capsule.png');
    this.score = 0;
    this.posX = -50;
    this.posY = Math.random() * maxY;
    this.speed = 0.3;
  }

  /**
   *
   * @param elapsed time elapsed
   */
  public override update(elapsed: number): void {
    this.posX += elapsed * this.speed;
    this.posY -= elapsed * 0.03;
  }
}
