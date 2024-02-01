import CanvasRenderer from './CanvasRenderer.js';
export default class ScoreItem {
    image;
    score;
    posX;
    posY;
    randomNum = Math.random() * 100;
    index;
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
    getScore() {
        return this.score;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=ScoreItem.js.map