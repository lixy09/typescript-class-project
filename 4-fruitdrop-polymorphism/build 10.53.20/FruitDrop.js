import { Game } from './GameLoop.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Fruit from './Fruit.js';
import Player from './Player.js';
import Spider from './Spider.js';
export default class FruitDrop extends Game {
    canvas;
    items = [];
    player;
    keyListener;
    score;
    nextItem;
    timeLeft;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.score = 0;
        this.timeLeft = 60 * 1000;
        this.nextItem = Math.random() * 500;
        for (let i = 0; i < 10; i++) {
            this.makeItem();
        }
        this.player = new Player(this.canvas.width, this.canvas.height);
    }
    makeItem() {
        if (Math.random() > 0.1) {
            this.items.push(new Fruit(this.canvas.width));
        }
        else {
            this.items.push(new Spider(this.canvas.width));
        }
    }
    processInput() {
        if (this.keyListener.keyPressed(KeyListener.KEY_LEFT)) {
            this.player.moveLeft();
        }
        if (this.keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
            this.player.moveRight();
        }
    }
    update(elapsed) {
        this.timeLeft -= elapsed;
        this.items.forEach((item) => item.update(elapsed));
        this.player.update(elapsed);
        this.items = this.items.filter((item) => {
            if (this.player.isCollidingItem(item)) {
                this.score += item.getScore();
                return false;
            }
            return (item.getPosY() < this.canvas.height);
        });
        this.nextItem -= elapsed;
        if (this.nextItem < 0) {
            this.makeItem();
            this.nextItem = Math.random() * 200;
        }
        return !this.isGameOver();
    }
    isGameOver() {
        return (this.timeLeft < 0);
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.items.forEach((item) => item.render(this.canvas));
        this.player.render(this.canvas);
        CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 10, 45, 'left', 'Arial', 32, 'white');
        CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.timeLeft / 1000).toString()}`, 10, 85, 'left', 'Arial', 32, 'white');
        if (this.isGameOver()) {
            CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'cyan');
        }
    }
}
//# sourceMappingURL=FruitDrop.js.map