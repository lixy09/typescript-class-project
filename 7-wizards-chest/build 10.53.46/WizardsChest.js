import Game from './helper/Game.js';
import CanvasRenderer from './helper/CanvasRenderer.js';
import KeyListener from './helper/KeyListener.js';
import Level1 from './levels/Level1.js';
export default class WizardsChest extends Game {
    canvas;
    keyListener;
    currentLevel;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = 600;
        this.keyListener = new KeyListener();
        this.currentLevel = new Level1(this.canvas.width, this.canvas.height, 0);
        this.currentLevel.startLevel();
    }
    processInput() {
        this.currentLevel.processInput(this.keyListener);
    }
    update(elapsed) {
        this.currentLevel.update(elapsed);
        const newLevel = this.currentLevel.nextLevel();
        if (newLevel !== null) {
            this.currentLevel = newLevel;
            this.currentLevel.startLevel();
        }
        return true;
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.currentLevel.render(this.canvas);
    }
}
//# sourceMappingURL=WizardsChest.js.map