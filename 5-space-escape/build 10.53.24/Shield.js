import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
export default class Shield extends ScoreItem {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        if (this.random > 0.5) {
            this.image = CanvasRenderer.loadNewImage('./assets/shield_battery.png');
            this.shieldModifier = 3 * 1000;
        }
        else {
            this.image = CanvasRenderer.loadNewImage('./assets/shield_bolt.png');
            this.shieldModifier = 3 * 1000;
        }
    }
    update(elapsed) {
        this.posX -= elapsed * 0.2;
    }
}
//# sourceMappingURL=Shield.js.map