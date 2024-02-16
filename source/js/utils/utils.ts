const mainNode = document.querySelector('.central');

const screenContainer = document.createElement('div');
screenContainer.classList.add('central__content');

export default {
  showScreen: (element: Element) => {
    clearMainElement();
    mainNode?.append(element);
  },

  newCentralContainer(...listEl: any[]) {
    screenContainer.innerHTML = '';
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
