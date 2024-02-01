import CanvasRenderer from './CanvasRenderer.js';
export default class Player {
    posX;
    posY;
    image;
    maxX;
    speed = 0.4;
    movingLeft = false;
    movingRight = false;
    constructor(canvasWidth, canvasHeight) {
        this.image = CanvasRenderer.loadNewImage('assets/basket.png');
        this.posX = canvasWidth / 2;
        this.posY = canvasHeight - 100;
        this.maxX = canvasWidth;
    }
    isCollidingItem(item) {
        return (item.getPosX() + item.getWidth() > this.posX
            && item.getPosX() < this.posX + this.image.width
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() < this.posY + this.image.height);
    }
    moveLeft() {
        this.movingLeft = true;
    }
    moveRight() {
        this.movingRight = true;
    }
    update(elapsed) {
        if (this.movingLeft) {
            this.posX -= this.speed * elapsed;
            if (this.posX < 0) {
                this.posX = 0;
            }
        }
        if (this.movingRight) {
            this.posX += this.speed * elapsed;
            if (this.posX + (this.image.width) > this.maxX) {
                this.posX = this.maxX - (this.image.width);
            }
        }
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Player.js.map