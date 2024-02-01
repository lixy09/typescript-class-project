import Catagotchi from './Catagotchi.js';

const myCatagotchi = new Catagotchi();

const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;

function gameTick(): void {
  // Call the updateCat method in Catagotchi.
  myCatagotchi.updateCat();
  // Get the content for the screen and put it in the catScreen div.
  catScreen.innerHTML = myCatagotchi.getScreen();
  // Set a timer that calls this function every 1.5 seconds.
  // A better way to do a gameTick will be introduced later in the course.
  setTimeout(() => gameTick(), 1500);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => alert('Feed Catagotchi'));
document.querySelector('#btn-play').addEventListener('click', () => alert('Play with Catagotchi'));
document.querySelector('#btn-pet').addEventListener('click', () => alert('Pet Catagotchi'));
