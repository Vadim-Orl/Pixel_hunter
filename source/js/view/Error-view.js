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
