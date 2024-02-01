import CanvasRenderer from './CanvasRenderer.js';
export default class CanvasItem {
    image;
    posX;
    posY;
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
    isCollidingWithItem(item) {
        return (this.getPosX() < item.getPosX() + item.getWidth()
            && this.getPosX() + this.getWidth() > item.getPosX()
            && this.getPosY() + this.getHeight() > item.getPosY()
            && this.getPosY() < item.getPosY() + item.getHeight());
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=CanvasItem.js.map