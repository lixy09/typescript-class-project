import GameItem from '../GameItem.js';
import CanvasRenderer from '../helper/CanvasRenderer.js';
export default class Key extends GameItem {
    constructor(posX) {
        super();
        this.posX = posX;
        this.posY = 0;
        this.speed = 0.3;
        this.image = CanvasRenderer.loadNewImage('./assets/key.png');
    }
}
//# sourceMappingURL=Key.js.map