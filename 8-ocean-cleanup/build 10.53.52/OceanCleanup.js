import Game from './Game.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Fish from './Fish.js';
import Waste from './Waste.js';
import Capsule from './Capsule.js';
export default class OceanCleanup extends Game {
    canvas;
    keyListener;
    player;
    items = [];
    timeToNextItem = 0;
    fishCaught = 0;
    score = 0;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(canvas.width, canvas.height);
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
            this.player.movingUp();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
            this.player.movingDown();
        }
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            if (Math.random() < 0.7) {
                this.items.push(new Fish(this.canvas.width, this.canvas.height));
            }
            else {
                this.items.push(new Waste(this.canvas.width, this.canvas.height));
            }
            if (Math.random() < 0.05) {
                this.items.push(new Capsule(this.canvas.width, this.canvas.height));
            }
            this.timeToNextItem = Math.random() * 300 + 300;
        }
        this.player.update(elapsed);
        this.items.forEach((item) => item.update(elapsed));
        let itemToRemove = [];
        this.items = this.items.filter((item) => {
            if (this.player.isCollidingWithItem(item)) {
                this.score += item.getScore();
                if (item instanceof Fish) {
                    this.fishCaught += 1;
                }
                if (item instanceof Capsule) {
                    itemToRemove = this.items.filter((item2) => {
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
        this.items = this.items.filter((item) => !itemToRemove.includes(item));
        return !(this.score < 0 || this.fishCaught >= 10);
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.player.render(this.canvas);
        this.items.forEach((item) => item.render(this.canvas));
        CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 40, 50, 'left', 'arial', 30, 'white');
        CanvasRenderer.writeText(this.canvas, `Fish Caught: ${this.fishCaught}`, 40, 100, 'left', 'arial', 30, 'white');
        if (this.score < 0 || this.fishCaught >= 10) {
            CanvasRenderer.writeText(this.canvas, 'Game over', this.canvas.width * 0.5, this.canvas.height * 0.5, 'center', 'arial', 50, 'white');
        }
    }
}
//# sourceMappingURL=OceanCleanup.js.map