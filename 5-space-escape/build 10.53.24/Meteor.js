import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Meteor extends ScoreItem {
    speed = 1;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (this.random < 0.05) {
            this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_big.png');
            this.shieldModifier = -5 * 1000;
            this.speed = 0.8;
        }
        else if (this.random < 0.1) {
            this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_big.png');
            this.shieldModifier = -5 * 1000;
            this.speed = 0.8;
        }
        else if (this.random < 0.55) {
            this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_small.png');
            this.shieldModifier = -1 * 1000;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_small.png');
            this.shieldModifier = -1 * 1000;
        }
    }
    update(elapsed) {
        this.speed += 0.02;
        this.posX -= 0.15 * elapsed * this.speed;
    }
}
//# sourceMappingURL=Meteor.js.map