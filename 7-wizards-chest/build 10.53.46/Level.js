import Dynamite from './gameItems/Dynamite.js';
import Key from './gameItems/Key.js';
import ScoreItem from './gameItems/ScoreItem.js';
import CanvasRenderer from './helper/CanvasRenderer.js';
import KeyListener from './helper/KeyListener.js';
import Player from './Player.js';
export default class Level {
    player;
    gameItems = [];
    lanes;
    currentLane;
    timeToNextItem;
    score;
    maxX;
    maxY;
    currentLevel;
    constructor(maxX, maxY, startScore) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.score = startScore;
        this.timeToNextItem = 500;
    }
    startLevel() {
        this.player = new Player(this.lanes[1], this.maxY);
        this.currentLane = 1;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_LEFT)) {
            if (this.currentLane > 0) {
                this.currentLane -= 1;
                this.player.move(this.lanes[this.currentLane]);
            }
        }
        if (keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
            if (this.currentLane < this.lanes.length - 1) {
                this.currentLane += 1;
                this.player.move(this.lanes[this.currentLane]);
            }
        }
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            this.spawnNewItem();
            this.timeToNextItem = 600;
        }
        this.gameItems.forEach((item) => item.update(elapsed));
        const newGameItems = [];
        for (let i = 0; i < this.gameItems.length; i++) {
            const currentItem = this.gameItems[i];
            if (currentItem.getPosY() > this.maxY) {
                continue;
            }
            if (this.player.isCollidingWithItem(currentItem)) {
                if (currentItem instanceof Dynamite) {
                    this.score = 0;
                    continue;
                }
                if (currentItem instanceof Key) {
                    this.player.toggleOpen();
                    continue;
                }
                if (currentItem instanceof ScoreItem && this.player.getChestOpen()) {
                    this.score += currentItem.getScore();
                    continue;
                }
            }
            newGameItems.push(currentItem);
        }
        this.gameItems = newGameItems;
    }
    render(canvas) {
        this.player.render(canvas);
        this.gameItems.forEach((item) => item.render(canvas));
        CanvasRenderer.writeText(canvas, `Score: ${this.score}`, 10, 50, 'left', 'Arial', 30, 'white');
        CanvasRenderer.writeText(canvas, `Level: ${this.currentLevel}`, this.maxX * 0.8, 50, 'left', 'Arial', 30, 'white');
    }
}
//# sourceMappingURL=Level.js.map