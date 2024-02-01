import { Game } from './GameLoop.js';
import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class FruitDrop extends Game {
    canvas;
    fruit = [];
    spider = [];
    timeToNextItem;
    timeLeft;
    score;
    player;
    keyListener;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(this.canvas.width, this.canvas.height);
        this.timeToNextItem = 0;
        this.timeLeft = 10 * 1000;
        this.score = 0;
    }
    makeItem() {
        if (this.timeToNextItem < 0) {
            if (Math.random() > 0.1)
                this.fruit.push(new Fruit(this.canvas.width));
            else
                this.spider.push(new Spider(this.canvas.width));
            this.timeToNextItem = Math.random() * 300;
        }
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            this.player.moveLeft();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.player.moveRight();
        }
    }
    update(elapsed) {
        this.makeItem();
        this.timeToNextItem -= elapsed;
        this.fruit.forEach((fruit) => fruit.update(elapsed));
        this.spider.forEach((spider) => spider.update(elapsed));
        this.player.update(elapsed);
        for (let i = 0; i < this.fruit.length; i++) {
            if (this.player.isCollidingFruit(this.fruit[i])) {
                this.score += this.fruit[i].getScore();
                this.fruit.splice(i, 1);
            }
        }
        for (let i = 0; i < this.spider.length; i++) {
            if (this.player.isCollidingSpider(this.spider[i])) {
                this.score -= this.spider[i].getScore();
                this.spider.splice(i, 1);
            }
        }
        this.timeLeft -= elapsed;
        if (this.isGameOver())
            return false;
        else
            return true;
    }
    isGameOver() {
        if (this.timeLeft < 0)
            return true;
        else
            return false;
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        if (this.isGameOver()) {
            CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2 - 20, 'center', 'sans-serif', 50, 'white');
            CanvasRenderer.writeText(this.canvas, `Your Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 40, 'center', 'sans-serif', 40, 'white');
        }
        CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 20, 50, 'left', 'sans-serif', 30, 'white');
        CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.timeLeft / 1000)}`, 20, 90, 'left', 'sans-serif', 30, 'white');
        this.fruit.forEach((fruit) => fruit.render(this.canvas));
        this.spider.forEach((spider) => spider.render(this.canvas));
        this.player.render(this.canvas);
    }
}
//# sourceMappingURL=FruitDrop.js.map