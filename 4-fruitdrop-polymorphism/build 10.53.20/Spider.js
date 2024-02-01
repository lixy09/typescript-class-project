import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Spider extends ScoreItem {
    constructor(maxX) {
        super(maxX);
        const random = Math.random();
        if (random > 0.9) {
            this.image = CanvasRenderer.loadNewImage('./assets/spider01.png');
            this.score = -5;
        }
        else if (random > 0.8) {
            this.image = CanvasRenderer.loadNewImage('./assets/spider02.png');
            this.score = -3;
        }
        else if (random > 0.5) {
            this.image = CanvasRenderer.loadNewImage('./assets/spider03.png');
            this.score = -2;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('./assets/spider04.png');
            this.score = -1;
        }
    }
    update(elapsed) {
        this.posY += elapsed * 0.1;
    }
}
//# sourceMappingURL=Spider.js.map