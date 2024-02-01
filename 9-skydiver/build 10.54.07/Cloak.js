import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';
export default class Cloak extends LightItem {
    speedX;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasRenderer.loadNewImage('assets/cloak.png');
        this.lightForce = 0;
        this.posX = Math.random() * maxX;
        this.posY = maxY;
        this.speed = Math.random() * 0.2 + 0.1;
        if (Math.random() > 0.5) {
            this.speedX = 0.2;
        }
        else {
            this.speedX = -0.2;
        }
    }
    update(elapsed) {
        this.posX += elapsed * this.speedX;
        this.posY -= elapsed * this.speed;
    }
}
//# sourceMappingURL=Cloak.js.map