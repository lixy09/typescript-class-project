import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './helper/CanvasRenderer.js';
export default class Player extends CanvasItem {
    imageClosed;
    imageOpen;
    chestOpen;
    constructor(startX, maxY) {
        super();
        this.posX = startX;
        this.posY = maxY - 100;
        this.imageClosed = CanvasRenderer.loadNewImage('./assets/chestClosed.png');
        this.imageOpen = CanvasRenderer.loadNewImage('./assets/chestOpen.png');
        this.image = this.imageOpen;
        this.chestOpen = true;
    }
    toggleOpen() {
        if (this.chestOpen) {
            this.chestOpen = false;
            this.image = this.imageClosed;
        }
        else {
            this.chestOpen = true;
            this.image = this.imageOpen;
        }
    }
    getChestOpen() {
        return this.chestOpen;
    }
    move(newX) {
        this.posX = newX;
    }
    isCollidingWithItem(item) {
        return (this.getPosX() < item.getPosX() + item.getWidth()
            && this.getPosX() + this.getWidth() > item.getPosX()
            && this.getPosY() + this.getHeight() > item.getPosY()
            && this.getPosY() < item.getPosY() + item.getHeight());
    }
}
//# sourceMappingURL=Player.js.map