import SpaceEscape from './SpaceEscape.js';
import { GameLoop } from './GameLoop.js';
const game = new SpaceEscape(document.getElementById('game'));
const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
    gameLoop.start();
});
//# sourceMappingURL=app.js.map