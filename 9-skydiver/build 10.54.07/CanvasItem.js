import CanvasRenderer from './CanvasRenderer.js';
export default class CanvasItem {
    image;
    posX;
    posY;
    maxX;
    maxY;
    constructor(maxX, maxY) {
        this.maxX = maxX;
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
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=CanvasItem.js.map