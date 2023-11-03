const mainNode = document.querySelector('.central');

const screenContainer = document.createElement('div');
screenContainer.classList.add('central__content');

export default {
  showScreen: (element) => {
    clearMainElement();
    mainNode.append(element);
  },

  newCentralContainer(...listEl) {
    screenContainer.innerHTML = '';
    listEl.forEach((el) => {
      screenContainer.appendChild(el.element);
    })
    return screenContainer;
  },
}

// helperes
const clearMainElement = () => {
  mainNode.innerHTML = '';
};

//# sourceMappingURL=utils.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYWluTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZW50cmFsJyk7XG5cbmNvbnN0IHNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2NyZWVuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbnRyYWxfX2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93U2NyZWVuOiAoZWxlbWVudCkgPT4ge1xuICAgIGNsZWFyTWFpbkVsZW1lbnQoKTtcbiAgICBtYWluTm9kZS5hcHBlbmQoZWxlbWVudCk7XG4gIH0sXG5cbiAgbmV3Q2VudHJhbENvbnRhaW5lciguLi5saXN0RWwpIHtcbiAgICBzY3JlZW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgbGlzdEVsLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBzY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWwuZWxlbWVudCk7XG4gICAgfSlcbiAgICByZXR1cm4gc2NyZWVuQ29udGFpbmVyO1xuICB9LFxufVxuXG4vLyBoZWxwZXJlc1xuY29uc3QgY2xlYXJNYWluRWxlbWVudCA9ICgpID0+IHtcbiAgbWFpbk5vZGUuaW5uZXJIVE1MID0gJyc7XG59O1xuIl0sImZpbGUiOiJ1dGlscy5qcyJ9
