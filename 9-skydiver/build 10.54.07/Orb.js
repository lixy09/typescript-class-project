import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';
export default class Orb extends LightItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (Math.random() < 0.33) {
            this.image = CanvasRenderer.loadNewImage('assets/orb1.png');
            this.lightForce = 1 * 1000;
        }
        else if (Math.random() < 0.66) {
            this.image = CanvasRenderer.loadNewImage('assets/orb2.png');
            this.lightForce = 3 * 1000;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('assets/orb3.png');
            this.lightForce = 5 * 1000;
        }
        this.posX = Math.random() * maxX;
        this.posY = maxY;
        this.speed = 0.2;
    }
}
//# sourceMappingURL=Orb.js.map