import Game from './Game.js';
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Orb from './Orb.js';
import Monster from './Monster.js';
import Cloak from './Cloak.js';
export default class TheFalling extends Game {
    canvas;
    keyListener;
    player;
    timeToNextItem = 0;
    lightForce = 10 * 1000;
    monstersCaught = 0;
    lightItems = [];
    isProtected = false;
    cloakTime = 0;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(this.canvas.width, this.canvas.height);
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            this.player.movingLeft();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.player.movingRight();
        }
    }
    update(elapsed) {
        this.lightForce -= elapsed;
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            if (Math.random() < 0.7) {
                this.lightItems.push(new Orb(this.canvas.width, this.canvas.height));
            }
            else {
                this.lightItems.push(new Monster(this.canvas.width, this.canvas.height));
            }
            if (Math.random() < 0.05) {
                this.lightItems.push(new Cloak(this.canvas.width, this.canvas.height));
            }
            this.timeToNextItem = Math.random() * 300 + 300;
        }
        this.player.update(elapsed);
        this.lightItems.forEach((item) => item.update(elapsed));
        for (let i = 0; i < this.lightItems.length; i++) {
            if (this.player.collidesWithItem(this.lightItems[i])) {
                if (this.lightItems[i] instanceof Cloak) {
                    this.isProtected = true;
                    this.cloakTime += 15 * 1000;
                }
                if (this.isProtected) {
                    for (let j = 0; j < this.lightItems.length; j++) {
                        if (this.lightItems[j] instanceof Monster) {
                            this.lightItems[j].setLightForce(0);
                        }
                    }
                }
                else {
                    if (this.lightItems[i] instanceof Monster) {
                        this.monstersCaught += 1;
                    }
                }
                this.lightForce += this.lightItems[i].getLightForce();
                this.lightItems.splice(i, 1);
            }
        }
        if (this.isProtected) {
            this.cloakTime -= elapsed;
            if (this.cloakTime <= 0) {
                this.isProtected = false;
            }
        }
        return !this.gameOver();
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.player.render(this.canvas);
        this.lightItems.forEach((item) => item.render(this.canvas));
        CanvasRenderer.writeText(this.canvas, `Light Force: ${Math.round(this.lightForce / 1000)}`, 30, 50, 'left', 'arial', 30, 'white');
        CanvasRenderer.writeText(this.canvas, `Monsters: ${this.monstersCaught}`, 30, 100, 'left', 'arial', 30, 'white');
        if (this.isProtected) {
            CanvasRenderer.writeText(this.canvas, `Cloak Time: ${Math.round(this.cloakTime / 1000)}`, 30, 150, 'left', 'arial', 30, 'white');
        }
        if (this.gameOver()) {
            CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'arial', 60, 'white');
        }
    }
    gameOver() {
        return (this.lightForce < 0 || this.monstersCaught > 10);
    }
}
//# sourceMappingURL=TheFalling.js.map