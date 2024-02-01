import Level from '../Level.js';
import Dynamite from '../gameItems/Dynamite.js';
import Key from '../gameItems/Key.js';
import ScoreItem from '../gameItems/ScoreItem.js';
export default class Level4 extends Level {
    constructor(maxX, maxY, startScore) {
        super(maxX, maxY, startScore);
        this.lanes = [35, 160, 285, 410, 535];
        this.currentLevel = 4;
    }
    spawnNewItem() {
        const randomLane = this.lanes[Math.round(Math.random() * 4)];
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
        return null;
    }
}
//# sourceMappingURL=Level4.js.map