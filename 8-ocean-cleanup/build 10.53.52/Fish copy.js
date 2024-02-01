import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Fish extends ScoreItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasRenderer.loadNewImage('./assets/player.png');
        this.posX = 50;
        this.posY = 50;
    }
}
//# sourceMappingURL=Fish%20copy.js.map