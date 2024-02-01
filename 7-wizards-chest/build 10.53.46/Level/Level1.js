import Level from '../Level.js';
import ScoreItem from '../ScoreItem.js';
export default class Level1 extends Level {
    constructor(maxX, maxY) {
        super(maxX, maxY, 0);
        this.lanes = [160, 285, 410];
    }
    spawnNewItem() {
        const randomLane = 1;
        this.gameItems.push(new ScoreItem(randomLane));
    }
    nextLevel() {
        return null;
    }
}
//# sourceMappingURL=Level1.js.map