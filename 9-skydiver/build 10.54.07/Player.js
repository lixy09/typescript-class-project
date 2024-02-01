import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
export default class Player extends CanvasItem {
    moveLeft = false;
    moveRight = false;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.image = CanvasRenderer.loadNewImage('assets/player.png');
        this.posX = maxX / 2;
        this.posY = 50;
    }
    movingLeft() {
        this.moveLeft = true;
    }
    movingRight() {
        this.moveRight = true;
    }
    update(elapsed) {
        if (this.moveLeft) {
            this.posX -= elapsed;
            if (this.posX < 0) {
                this.posX = 0;
            }
            this.moveLeft = false;
        }
        if (this.moveRight) {
            this.posX += elapsed;
            if (this.posX + this.image.width >= this.maxX) {
                this.posX = this.maxX - this.image.width;
            }
            this.moveRight = false;
        }
    }
    collidesWithItem(item) {
        return (item.getPosX() + item.getWidth() >= this.posX
            && item.getPosX() <= this.posX + this.image.width
            && item.getPosY() + item.getHeight() >= this.posY
            && item.getPosY() <= this.posY + this.image.height);
    }
}
//# sourceMappingURL=Player.js.map