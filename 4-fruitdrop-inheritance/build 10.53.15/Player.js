import CanvasRenderer from './CanvasRenderer.js';
export default class Player {
    image;
    speed;
    posX;
    posY;
    movingLeft;
    movingRight;
    constructor(maxX, maxY) {
        this.image = CanvasRenderer.loadNewImage('./assets/basket.png');
        this.posX = maxX / 2;
        this.posY = maxY - 100;
        this.speed = 0.5;
    }
    moveLeft() {
        this.movingLeft = true;
    }
    moveRight() {
        this.movingRight = true;
    }
    isCollidingFruit(fruit) {
        return (fruit.getPosX() + fruit.getWidth() >= this.posX
            && fruit.getPosX() <= this.posX + this.getWidth()
            && fruit.getPosY() + fruit.getHeight() >= this.posY
            && fruit.getPosY() <= this.posY + this.getHeight());
    }
    isCollidingSpider(spider) {
        return (spider.getPosX() + spider.getWidth() >= this.posX
            && spider.getPosX() <= this.posX + this.getWidth()
            && spider.getPosY() + spider.getHeight() >= this.posY
            && spider.getPosY() <= this.posY + this.getHeight());
    }
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    update(elapsed) {
        if (this.movingLeft) {
            this.posX -= elapsed * this.speed;
        }
        if (this.movingRight) {
            this.posX += elapsed * this.speed;
        }
        this.movingRight = false;
        this.movingLeft = false;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Player.js.map