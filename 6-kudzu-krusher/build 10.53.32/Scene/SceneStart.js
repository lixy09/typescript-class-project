import CanvasRenderer from '../CanvasRenderer.js';
import MouseListener from '../MouseListener.js';
import Scene from '../Scene.js';
import Level from './Level.js';
export default class SceneStart extends Scene {
    starting;
    logo;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.logo = CanvasRenderer.loadNewImage('./assets/logo.png');
        this.starting = false;
    }
    processInput(mouseListener) {
        if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
            this.starting = true;
        }
    }
    update(elapsed) {
    }
    getNextScene() {
        if (this.starting) {
            return new Level(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.logo, 0, 0, this.maxX + 20, this.maxY);
        CanvasRenderer.writeText(canvas, 'Click to start!', this.maxX / 2, this.maxY - 50, 'center', 'sans-serif', 50, 'black');
    }
}
//# sourceMappingURL=SceneStart.js.map