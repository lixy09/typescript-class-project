import Game from './Game.js';

import KeyListener from './KeyListener.js';

export default class WizardsHat extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
  }

  public processInput(): void {

  }

  public update(elapsed: number): boolean {
    return true;
  }

  public render(): void {

  }
}
