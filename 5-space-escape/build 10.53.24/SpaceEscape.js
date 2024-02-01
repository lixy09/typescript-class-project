import { Game } from './GameLoop.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Meteor from './Meteor.js';
import Shield from './Shield.js';
export default class SpaceEscape extends Game {
    canvas;
    player;
    items = [];
    keyListener;
    shieldsLeft;
    timeElapsed;
    timeToNextItem;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.player = new Player(this.canvas.width, this.canvas.height);
        this.keyListener = new KeyListener();
        this.shieldsLeft = 20 * 1000;
        this.timeElapsed = 0;
        this.timeToNextItem = 500;
    }
    makeItem() {
        if (Math.random() > 0.2) {
            this.items.push(new Meteor(this.canvas.width, this.canvas.height));
        }
        else {
            this.items.push(new Shield(this.canvas.width, this.canvas.height));
        }
    }
    processInput() {
        if (this.keyListener.keyPressed(KeyListener.KEY_UP)) {
            this.player.moveUp();
        }
        if (this.keyListener.keyPressed(KeyListener.KEY_DOWN)) {
            this.player.moveDown();
        }
    }
    update(elapsed) {
        this.shieldsLeft -= elapsed * 0.5;
        this.timeElapsed += elapsed;
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            this.makeItem();
            this.timeToNextItem = 500;
        }
        this.player.update(elapsed);
        this.items.forEach((item) => item.update(elapsed));
        for (let i = 0; i < this.items.length; i++) {
            if (this.player.isCollidingItem(this.items[i])) {
                this.shieldsLeft += this.items[i].getShieldModifier();
                this.items.splice(i, 1);
            }
        }
        return !this.isGameOver();
    }
    isGameOver() {
        return (this.shieldsLeft <= 0);
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        if (this.isGameOver()) {
            CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'sans-serif', 100, 'white');
        }
        CanvasRenderer.writeText(this.canvas, `Shields: ${Math.round(this.shieldsLeft / 1000)}`, 30, 50, 'left', 'sans-serif', 35, 'white');
        CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.timeElapsed / 1000)}`, 30, 100, 'left', 'sans-serif', 35, 'white');
        this.player.render(this.canvas);
        this.items.forEach((item) => item.render(this.canvas));
    }
}
//# sourceMappingURL=SpaceEscape.js.map