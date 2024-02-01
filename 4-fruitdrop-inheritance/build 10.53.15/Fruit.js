import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Fruit extends ScoreItem {
    fruits = ['assets/fruit-banana.png', 'assets/fruit-cherries.png', 'assets/fruit-grapes.png', 'assets/fruit-orange.png', 'assets/fruit-strawberry.png'];
    speed = 1;
    constructor(maxX) {
        super();
        if (this.randomNum <= 10) {
            this.index = 1;
            this.score = 10;
        }
        else if (this.randomNum <= 30) {
            this.index = 4;
            this.score = 7;
        }
        else if (this.randomNum <= 60) {
            this.index = 3;
            this.score = 5;
        }
        else if (this.randomNum <= 80) {
            this.index = 2;
            this.score = 3;
        }
        else {
            this.index = 0;
            this.score = 1;
        }
        this.image = CanvasRenderer.loadNewImage(this.fruits[this.index]);
        this.posX = Math.random() * maxX;
        this.posY = 0;
    }
    update(elapsed) {
        this.speed += 0.01;
        this.posY += 0.15 * elapsed * this.speed;
    }
}
//# sourceMappingURL=Fruit.js.map