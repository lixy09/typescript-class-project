import CanvasRenderer from './CanvasRenderer.js';
export default class ScoreItem {
    image;
    posX;
    posY;
    shieldModifier;
    random = Math.random();
    constructor(maxX, maxY) {
        this.posX = maxX;
        this.posY = Math.random() * maxY;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
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
    getShieldModifier() {
        return this.shieldModifier;
    }
}
//# sourceMappingURL=ScoreItem.js.map