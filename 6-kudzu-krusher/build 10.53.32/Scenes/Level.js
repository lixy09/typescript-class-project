import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener from '../MouseListener.js';
import Scene from '../Scene.js';
import Player from '../Player.js';
import Kudzu from '../ScoreItems/Kudzu.js';
import Flower from '../ScoreItems/Flower.js';
import SceneLose from './SceneLose.js';
import SceneWin from './SceneWin.js';
export default class Level extends Scene {
    player;
    currentScore;
    flowerLost;
    mouseClicked = false;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new Player(50, 50);
        this.timeToNextItem = 500;
        this.currentScore = 0;
        this.flowerLost = 0;
        for (let i = 0; i < 100; i++) {
            this.scoreItems.push(new Flower(this.maxX, this.maxY));
        }
    }
    makeItem() {
        if (Math.random() > 0.1) {
            this.scoreItems.push(new Kudzu(this.maxX, this.maxY));
        }
        else {
            this.scoreItems.push(new Flower(this.maxX, this.maxY));
        }
    }
    processInput(mouseListener) {
        const mouseX = mouseListener.getMousePosition().x;
        const mouseY = mouseListener.getMousePosition().y;
        this.player.move(mouseX, mouseY);
        this.mouseClicked = mouseListener.buttonPressed(MouseListener.BUTTON_LEFT);
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            this.makeItem();
            this.timeToNextItem = 20000;
        }
        this.scoreItems.forEach((item) => item.update(elapsed));
        for (let i = 0; i < this.scoreItems.length; i++) {
            if (this.mouseClicked) {
                if (this.player.isCollidingWithItem(this.scoreItems[i])) {
                    this.currentScore += this.scoreItems[i].getScore();
                    this.scoreItems.splice(i, 1);
                }
            }
            for (let j = 0; j < this.scoreItems.length; j++) {
                if (this.scoreItems[i] instanceof Kudzu && this.scoreItems[j] instanceof Flower) {
                    if (this.scoreItems[i].isCollidingWithItem(this.scoreItems[j])) {
                        this.flowerLost += 1;
                        this.scoreItems.splice(j, 1);
                    }
                }
            }
        }
    }
    getNextScene() {
        if (this.currentScore < -10) {
            return new SceneLose(this.maxX, this.maxY);
        }
        if (this.currentScore >= 10) {
            return new SceneWin(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        this.scoreItems.forEach((item) => item.render(canvas));
        CanvasRenderer.writeText(canvas, `Score: ${this.currentScore}`, 50, 50, 'left', 'Arial', 40, 'white');
        CanvasRenderer.writeText(canvas, `Flowers lost: ${this.flowerLost}`, 50, 100, 'left', 'Arial', 30, 'white');
        this.player.render(canvas);
    }
}
//# sourceMappingURL=Level.js.map