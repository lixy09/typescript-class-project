import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Spider extends ScoreItem {
    spiders = ['assets/spider01.png', 'assets/spider02.png', 'assets/spider03.png', 'assets/spider04.png'];
    constructor(maxX) {
        super();
        if (this.randomNum <= 10) {
            this.index = 0;
            this.score = 5;
        }
        else if (this.randomNum <= 30) {
            this.index = 1;
            this.score = 3;
        }
        else if (this.randomNum <= 60) {
            this.index = 2;
            this.score = 2;
        }
        else if (this.randomNum <= 100) {
            this.index = 3;
            this.score = 1;
        }
        this.image = CanvasRenderer.loadNewImage(this.spiders[this.index]);
        this.posX = Math.random() * maxX;
        this.posY = 0;
    }
    update(elapsed) {
        this.posY += 0.1 * elapsed;
    }
}
//# sourceMappingURL=Spider.js.map