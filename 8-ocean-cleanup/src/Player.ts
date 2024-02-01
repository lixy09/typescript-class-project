import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends CanvasItem {
  private moveUp: boolean;

  private moveDown: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasRenderer.loadNewImage('./assets/player.png');
    this.posX = maxX * 0.9;
    this.posY = maxY * 0.5;
    this.moveUp = false;
    this.moveDown = false;
  }

  /**
   *
   */
  public movingUp(): void {
    this.moveUp = true;
  }

  /**
   *
   */
  public movingDown(): void {
    this.moveDown = true;
  }

  /**
   *
   * @param elapsed time
   */
  public override update(elapsed: number): void {
    if (this.moveUp) {
      this.posY -= elapsed;
      if (this.posY <= 0) {
        this.posY = 0;
      }
      this.moveUp = false;
    }
    if (this.moveDown) {
      this.posY += elapsed;
      if (this.posY >= this.maxY) {
        this.posY = this.maxY - this.image.height / 2;
      }
      this.moveDown = false;
    }
  }

  /**
   *
   * @param item scoreitem
   * @returns true if colliding
   */
  public isCollidingWithItem(item: ScoreItem): boolean {
    return (item.getPosX() < this.posX + this.image.width
      && item.getPosX() + item.getWidth() > this.posX
      && item.getPosY() < this.posY + this.image.height
      && item.getPosY() + item.getHeight() > this.posY);
  }
}
