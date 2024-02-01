import GameItem from '../GameItem.js';
import CanvasRenderer from '../helper/CanvasRenderer.js';
export default class Dynamite extends GameItem {
    constructor(posX) {
        super();
        this.posX = posX;
        this.posY = 0;
        this.speed = 0.1;
        this.image = CanvasRenderer.loadNewImage('./assets/dynamite.png');
    }
    update(elapsed) {
        this.speed *= 1.005;
        this.posY += this.speed * elapsed;
    }
}
//# sourceMappingURL=Dynamite.js.map