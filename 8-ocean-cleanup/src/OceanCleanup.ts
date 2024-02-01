import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Fish from './Fish.js';
import Waste from './Waste.js';
import ScoreItem from './ScoreItem.js';
import Capsule from './Capsule.js';

export default class OceanCleanup extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private player: Player;

  private items: ScoreItem[] = [];

  private timeToNextItem: number = 0;

  private fishCaught: number = 0;

  private score: number = 0;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.player = new Player(canvas.width, canvas.height);
  }

  /**
   * Process user input
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.movingUp();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.movingDown();
    }
  }

  /**
   * Update called from the game loop
   * @param elapsed ms since last update
   * @returns whether the game should continue
   */
  public update(elapsed: number): boolean {
    this.timeToNextItem -= elapsed;
    if (this.timeToNextItem < 0) {
      if (Math.random() < 0.7) {
        this.items.push(new Fish(this.canvas.width, this.canvas.height));
      } else {
        this.items.push(new Waste(this.canvas.width, this.canvas.height));
      }
      if (Math.random() < 0.05) {
        this.items.push(new Capsule(this.canvas.width, this.canvas.height));
      }
      this.timeToNextItem = Math.random() * 300 + 300;
    }

    this.player.update(elapsed);
    this.items.forEach((item: ScoreItem) => item.update(elapsed));

    let itemToRemove: ScoreItem[] = [];
    this.items = this.items.filter((item: ScoreItem) => {
      if (this.player.isCollidingWithItem(item)) {
        this.score += item.getScore();
        if (item instanceof Fish) {
          this.fishCaught += 1;
        }
        if (item instanceof Capsule) {
          // filter out all waste and capsules
          itemToRemove = this.items.filter((item2: ScoreItem) => {
            if (item2 instanceof Waste || item2 instanceof Capsule) {
              this.score += item2.getScore();
              return true;
            }
            return false;
          });
        }
        return false;
      }
      return (item.getPosX() < this.canvas.width);
    });
    // remove all waste and capsules from items
    this.items = this.items.filter((item: ScoreItem) => !itemToRemove.includes(item));

    // game over condition
    return !(this.score < 0 || this.fishCaught >= 10);
  }

  /**
   * Render called from the game loop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.player.render(this.canvas);

    this.items.forEach((item: ScoreItem) => item.render(this.canvas));

    CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 40, 50, 'left', 'arial', 30, 'white');
    CanvasRenderer.writeText(this.canvas, `Fish Caught: ${this.fishCaught}`, 40, 100, 'left', 'arial', 30, 'white');

    if (this.score < 0 || this.fishCaught >= 10) {
      CanvasRenderer.writeText(this.canvas, 'Game over', this.canvas.width * 0.5, this.canvas.height * 0.5, 'center', 'arial', 50, 'white');
    }
  }
}
