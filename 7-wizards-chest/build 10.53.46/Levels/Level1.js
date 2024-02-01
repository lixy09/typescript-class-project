import Level from '../Level.js';
import Level2 from './Level2.js';
import ScoreItem from '../gameItems/ScoreItem.js';
export default class Level1 extends Level {
    constructor(maxX, maxY, startScore) {
        super(maxX, maxY, startScore);
        this.lanes = [160, 285, 410];
        this.currentLevel = 1;
    }
    spawnNewItem() {
        const randomLane = this.lanes[Math.round(Math.random() * 2)];
        this.gameItems.push(new ScoreItem(randomLane));
    }
    nextLevel() {
        if (this.score >= 500) {
            return new Level2(this.maxX, this.maxY, this.score);
        }
        return null;
    }
}
//# sourceMappingURL=Level1.js.map