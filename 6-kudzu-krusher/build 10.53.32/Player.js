import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
export default class Player extends CanvasItem {
    constructor(posX, posY) {
        super();
        this.image = CanvasRenderer.loadNewImage('./assets/hoe_wood.png');
        this.posX = posX;
        this.posY = posY;
    }
    move(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
}
//# sourceMappingURL=Player.js.map