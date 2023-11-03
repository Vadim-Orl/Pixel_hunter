import AbstractView from './Abstract-view.js';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super('div', { classes: ['end'] });
    this.error = error;
  }

  get template() {
    return `<p>Произошла ошибка: ${this.error.message}</p>`
  }
}

//# sourceMappingURL=Error-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0Vycm9yLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tICcuL0Fic3RyYWN0LXZpZXcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xuICBjb25zdHJ1Y3RvcihlcnJvcikge1xuICAgIHN1cGVyKCdkaXYnLCB7IGNsYXNzZXM6IFsnZW5kJ10gfSk7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgPHA+0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsDogJHt0aGlzLmVycm9yLm1lc3NhZ2V9PC9wPmBcbiAgfVxufVxuIl0sImZpbGUiOiJFcnJvci12aWV3LmpzIn0=
