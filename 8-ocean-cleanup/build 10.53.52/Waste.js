import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Waste extends ScoreItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (Math.random() < 0.5) {
            this.image = CanvasRenderer.loadNewImage('./assets/waste1.png');
            this.score = 10;
        }
        else if (Math.random() < 0.8) {
            this.image = CanvasRenderer.loadNewImage('./assets/waste2.png');
            this.score = 20;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('./assets/waste3.png');
            this.score = 30;
        }
        this.posX = -20;
        this.posY = Math.random() * maxY;
        this.speed = 0.3;
    }
    update(elapsed) {
        this.posX += elapsed * this.speed;
        if (this.posX > 400 && this.posX < 450 && Math.random() < 0.1) {
            this.image = CanvasRenderer.loadNewImage('./assets/toxic.png');
            this.score = 100;
            this.speed = 0.35;
        }
    }
}
//# sourceMappingURL=Waste.js.map