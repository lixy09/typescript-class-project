import Game from './Game.js';
import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import SceneStart from './Scenes/SceneStart.js';
export default class KudzuKrusher extends Game {
    canvas;
    mouseListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.mouseListener = new MouseListener(this.canvas);
        this.canvas.style.cursor = 'none';
        this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.mouseListener);
    }
    update(elapsed) {
        this.currentScene.update(elapsed);
        const newScence = this.currentScene.getNextScene();
        if (newScence !== null) {
            this.currentScene = newScence;
        }
        return true;
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=KudzuKrusher.js.map