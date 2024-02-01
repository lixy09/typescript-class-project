import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener from '../MouseListener.js';
import Scene from '../Scene.js';
import Kudzu from '../ScoreItems/Kudzu.js';
import SceneStart from './SceneStart.js';
export default class SceneLose extends Scene {
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.continue = false;
    }
    processInput(mouseListener) {
        if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
            this.continue = true;
        }
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.timeToNextItem < 0) {
            this.scoreItems.push(new Kudzu(this.maxX, this.maxY));
            this.timeToNextItem = 300;
        }
    }
    getNextScene() {
        if (this.continue) {
            return new SceneStart(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasRenderer.writeText(canvas, 'You lost!', this.maxX / 2, this.maxY / 2 - 50, 'center', 'sans-serif', 80, 'black');
        CanvasRenderer.writeText(canvas, 'Click to continue', this.maxX / 2, this.maxY / 2, 'center', 'sans-serif', 50, 'black');
    }
}
//# sourceMappingURL=SceneLose.js.map