import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Capsule extends ScoreItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasRenderer.loadNewImage('./assets/capsule.png');
        this.score = 0;
        this.posX = -50;
        this.posY = Math.random() * maxY;
        this.speed = 0.3;
    }
    update(elapsed) {
        this.posX += elapsed * this.speed;
        this.posY -= elapsed * 0.03;
    }
}
//# sourceMappingURL=Capsule.js.map