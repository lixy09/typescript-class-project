import Catagotchi from './Catagotchi.js';
const myCatagotchi = new Catagotchi();
const catScreen = document.querySelector('#screen');
function gameTick() {
    myCatagotchi.updateCat();
    catScreen.innerHTML = myCatagotchi.getScreen();
    setTimeout(() => gameTick(), 1500);
}
window.addEventListener('load', () => gameTick());
document.querySelector('#btn-feed').addEventListener('click', () => alert('Feed Catagotchi'));
document.querySelector('#btn-play').addEventListener('click', () => alert('Play with Catagotchi'));
document.querySelector('#btn-pet').addEventListener('click', () => alert('Pet Catagotchi'));
//# sourceMappingURL=app.js.map