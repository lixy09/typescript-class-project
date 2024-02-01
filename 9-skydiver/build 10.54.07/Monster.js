import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';
export default class Monster extends LightItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (Math.random() < 0.33) {
            this.image = CanvasRenderer.loadNewImage('assets/monster1.png');
            this.lightForce = -10 * 1000;
        }
        else if (Math.random() < 0.66) {
            this.image = CanvasRenderer.loadNewImage('assets/monster2.png');
            this.lightForce = -20 * 1000;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('assets/monster3.png');
            this.lightForce = -30 * 1000;
        }
        this.posX = Math.random() * maxX;
        this.posY = maxY;
        this.speed = Math.random() * 0.2 + 0.2;
    }
    update(elapsed) {
        this.posY -= elapsed * this.speed;
        if (this.posY < 300 && Math.random() < 0.02) {
            this.posX = Math.random() * this.maxX;
            this.posY = Math.random() * this.maxY;
        }
    }
}
//# sourceMappingURL=Monster.js.map