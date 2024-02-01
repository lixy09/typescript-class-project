import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
export default class Player extends CanvasItem {
    moveUp;
    moveDown;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasRenderer.loadNewImage('./assets/player.png');
        this.posX = maxX * 0.9;
        this.posY = maxY * 0.5;
        this.moveUp = false;
        this.moveDown = false;
    }
    movingUp() {
        this.moveUp = true;
    }
    movingDown() {
        this.moveDown = true;
    }
    update(elapsed) {
        if (this.moveUp) {
            this.posY -= elapsed;
            if (this.posY <= 0) {
                this.posY = 0;
            }
            this.moveUp = false;
        }
        if (this.moveDown) {
            this.posY += elapsed;
            if (this.posY >= this.maxY) {
                this.posY = this.maxY - this.image.height / 2;
            }
            this.moveDown = false;
        }
    }
    isCollidingWithItem(item) {
        return (item.getPosX() < this.posX + this.image.width
            && item.getPosX() + item.getWidth() > this.posX
            && item.getPosY() < this.posY + this.image.height
            && item.getPosY() + item.getHeight() > this.posY);
    }
}
//# sourceMappingURL=Player.js.map