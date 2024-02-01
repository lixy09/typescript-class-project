import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Kudzu extends ScoreItem {
    maxX;
    maxY;
    speedX;
    speedY;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.image = CanvasRenderer.loadNewImage('./assets/kudzu.png');
        this.posX = Math.random() * maxX;
        this.posY = Math.random() * maxY;
        this.score = 5;
        if (Math.random() > 0.5) {
            this.speedX = 0.05;
            this.speedY = 0.05;
        }
        else {
            this.speedX = -0.05;
            this.speedY = -0.05;
        }
    }
    update(elapsed) {
        this.posX += elapsed * this.speedX;
        if (this.posX < 0) {
            this.posX = this.maxX;
        }
        if (this.posX > this.maxX) {
            this.posX = 0;
        }
        this.posY += elapsed * this.speedY;
        if (this.posY < 0) {
            this.posY = this.maxY;
        }
        if (this.posY > this.maxY) {
            this.posY = 0;
        }
    }
}
//# sourceMappingURL=Kudzu.js.map