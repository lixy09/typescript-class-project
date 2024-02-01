import CanvasRenderer from './CanvasRenderer.js';
export default class Player {
    image;
    speed;
    acceleration;
    posX;
    posY;
    maxY;
    accelerateUp;
    accelerateDown;
    constructor(maxX, maxY) {
        this.image = CanvasRenderer.loadNewImage('./assets/ship.png');
        this.posX = maxX * 0.05;
        this.posY = maxY / 2;
        this.speed = 0;
        this.acceleration = 0.1;
        this.maxY = maxY;
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
    moveUp() {
        this.accelerateUp = true;
    }
    moveDown() {
        this.accelerateDown = true;
    }
    isCollidingItem(item) {
        return (item.getPosX() + item.getWidth() > this.posX
            && item.getPosX() < this.posX + this.image.width
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() < this.posY + this.image.height);
    }
    update(elapsed) {
        if (this.accelerateUp) {
            this.speed -= this.acceleration;
            this.accelerateUp = false;
        }
        if (this.accelerateDown) {
            this.speed += this.acceleration;
            this.accelerateDown = false;
        }
        this.posY += elapsed * this.speed;
        if (this.posY < 0) {
            this.posY = this.maxY;
        }
        if (this.posY > this.maxY) {
            this.posY = 0;
        }
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Player.js.map