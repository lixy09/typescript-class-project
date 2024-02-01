import CanvasRenderer from './CanvasRenderer.js';
export default class ScoreItem {
    posX;
    posY;
    image;
    score;
    constructor(maxX) {
        this.posX = (Math.random() * maxX);
        this.posY = -32;
    }
    getPosY() {
        return this.posY;
    }
    getPosX() {
        return this.posX;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    getScore() {
        return this.score;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=ScoreItem.js.map