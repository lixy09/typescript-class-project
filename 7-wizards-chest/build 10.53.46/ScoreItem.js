import CanvasRenderer from './CanvasRenderer.js';
import GameItem from './GameItem.js';
export default class ScoreItem extends GameItem {
    constructor(posX) {
        super();
        this.posX = posX;
        this.posY = 0;
        this.image = CanvasRenderer.loadNewImage('./assets/gemBlue.png');
        this.score = 10;
        this.speed = 0.1;
    }
}
//# sourceMappingURL=ScoreItem.js.map