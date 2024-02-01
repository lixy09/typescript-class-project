import CanvasItem from './CanvasItem.js';
export default class GameItem extends CanvasItem {
    speed;
    score;
    getScore() {
        return this.score;
    }
    update(elapsed) {
        this.posY += this.speed * elapsed;
    }
}
//# sourceMappingURL=GameItem.js.map