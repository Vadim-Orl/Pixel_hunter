import gameScreen from "../model/game-screen.js";
import AbstractView from "../view/Abstract-view.js";

const mainNode = document.querySelector('.central');

const screenContainer = document.createElement('div');
screenContainer.classList.add('central__content');

export default {
  showScreen: (element: Element) => {
    console.log('showScreen')
    clearMainElement();
    mainNode?.append(element);
  },

  newCentralContainer(...listEl: AbstractView[] | gameScreen[]) {
    console.log('showScreen2')

    screenContainer.innerHTML = '';
    console.log(listEl)
    listEl.forEach((el) => {
      screenContainer.appendChild(el.element);
    })
    return screenContainer;
  },
}

// helperes
const clearMainElement = () => {
  mainNode && (mainNode.innerHTML = '');
};
