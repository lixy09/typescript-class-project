import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Flower extends ScoreItem {
    timeToNextChange;
    constructor(maxX, maxY) {
        super();
        this.timeToNextChange = 0;
        this.image = CanvasRenderer.loadNewImage('./assets/flower_0.png');
        this.posX = Math.random() * maxX;
        this.posY = Math.random() * maxY;
        this.score = -1;
    }
    update(elapsed) {
        this.timeToNextChange += elapsed;
        if (this.timeToNextChange > 10000) {
            this.image = CanvasRenderer.loadNewImage('./assets/flower_1.png');
            this.score = -3;
        }
        if (this.timeToNextChange > 22500) {
            this.image = CanvasRenderer.loadNewImage('./assets/flower_2.png');
            this.score = -5;
        }
        if (this.timeToNextChange > 35000) {
            this.image = CanvasRenderer.loadNewImage('./assets/flower_3.png');
            this.score = -7;
        }
    }
}
//# sourceMappingURL=Flower.js.map