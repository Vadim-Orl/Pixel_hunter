import AbstractView from './Abstract-view.js';

export default class ErrorView extends AbstractView {
  constructor(private error: Error) {
    super('div', ['end']);
  }

  get template() {
    return `<p>Произошла ошибка: ${this.error.message}</p>`
  }
}
