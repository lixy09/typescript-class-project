import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Fish extends ScoreItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (Math.random() < 0.33) {
            this.image = CanvasRenderer.loadNewImage('./assets/fish1.png');
            this.score = -5;
        }
        else if (Math.random() < 0.66) {
            this.image = CanvasRenderer.loadNewImage('./assets/fish2.png');
            this.score = -10;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('./assets/fish3.png');
            this.score = -15;
        }
        this.posX = -50;
        this.posY = Math.random() * maxY;
        this.speed = 0.2;
    }
    update(elapsed) {
        this.posX += elapsed * this.speed;
    }
}
//# sourceMappingURL=Fish.js.map