import Level from '../Level.js';
import Key from '../gameItems/Key.js';
import ScoreItem from '../gameItems/ScoreItem.js';
import Level3 from './Level3.js';
export default class Level2 extends Level {
    constructor(maxX, maxY, startScore) {
        super(maxX, maxY, startScore);
        this.lanes = [160, 285, 410];
        this.currentLevel = 2;
    }
    spawnNewItem() {
        const randomLane = this.lanes[Math.round(Math.random() * 2)];
        if (Math.random() < 0.1) {
            this.gameItems.push(new Key(randomLane));
        }
        else {
            this.gameItems.push(new ScoreItem(randomLane));
        }
    }
    nextLevel() {
        if (this.score >= 1000) {
            return new Level3(this.maxX, this.maxY, this.score);
        }
        return null;
    }
}
//# sourceMappingURL=Level2.js.map