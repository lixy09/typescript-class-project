import CanvasRenderer from '../helper/CanvasRenderer.js';
import GameItem from '../GameItem.js';
export default class ScoreItem extends GameItem {
    gems = ['./assets/gemBlue.png', './assets/gemGreen.png', './assets/gemRed.png'];
    skulls = ['./assets/skullBlue.png', './assets/skullGreen.png', './assets/skullRed.png'];
    constructor(posX) {
        super();
        this.posX = posX;
        this.posY = 0;
        this.speed = 0.2;
        if (Math.random() < 0.8) {
            if (Math.random() < 0.2) {
                this.image = CanvasRenderer.loadNewImage(this.gems[2]);
                this.score = 100;
            }
            else if (Math.random() < 0.4) {
                this.image = CanvasRenderer.loadNewImage(this.gems[1]);
                this.score = 50;
            }
            else {
                this.image = CanvasRenderer.loadNewImage(this.gems[0]);
                this.score = 5;
            }
        }
        else {
            if (Math.random() < 0.2) {
                this.image = CanvasRenderer.loadNewImage(this.skulls[2]);
                this.score = -100;
            }
            else if (Math.random() < 0.4) {
                this.image = CanvasRenderer.loadNewImage(this.skulls[1]);
                this.score = -50;
            }
            else {
                this.image = CanvasRenderer.loadNewImage(this.skulls[0]);
                this.score = -5;
            }
        }
    }
}
//# sourceMappingURL=ScoreItem.js.map