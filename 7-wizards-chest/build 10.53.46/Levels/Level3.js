import Level from '../Level.js';
import Dynamite from '../gameItems/Dynamite.js';
import Key from '../gameItems/Key.js';
import ScoreItem from '../gameItems/ScoreItem.js';
import Level4 from './Level4.js';
export default class Level3 extends Level {
    constructor(maxX, maxY, startScore) {
        super(maxX, maxY, startScore);
        this.lanes = [85, 210, 335, 460];
        this.currentLevel = 3;
    }
    spawnNewItem() {
        const randomLane = this.lanes[Math.round(Math.random() * 3)];
        if (Math.random() < 0.1) {
            this.gameItems.push(new Key(randomLane));
        }
        else if (Math.random() < 0.3) {
            this.gameItems.push(new Dynamite(randomLane));
        }
        else {
            this.gameItems.push(new ScoreItem(randomLane));
        }
    }
    nextLevel() {
        if (this.score >= 1500) {
            return new Level4(this.maxX, this.maxY, this.score);
        }
        return null;
    }
}
//# sourceMappingURL=Level3.js.map