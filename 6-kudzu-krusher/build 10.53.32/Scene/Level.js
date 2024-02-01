import CanvasRenderer from '../CanvasRenderer.js';
import Scene from '../Scene.js';
import Player from '../Player.js';
export default class Level extends Scene {
    player;
    scoreItems = [];
    timeToNextItem;
    currentScore;
    flowerLost;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new Player(50, 50);
    }
    processInput(mouseListener) {
        const mouseX = mouseListener.getMousePosition().x;
        const mouseY = mouseListener.getMousePosition().y;
        this.player.move(mouseX, mouseY);
    }
    update(elapsed) {
    }
    getNextScene() {
        return null;
    }
    render(canvas) {
        CanvasRenderer.writeText(canvas, 'Game start', this.maxX / 2, this.maxY / 2, 'center', 'Arial', 50, 'white');
        this.player.render(canvas);
    }
}
//# sourceMappingURL=Level.js.map