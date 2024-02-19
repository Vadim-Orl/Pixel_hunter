import AbstractView from './Abstract-view.js';

export default class SplashScreen extends AbstractView {
  timeout: NodeJS.Timeout | undefined;

  constructor(private cursor = 0, private symbolsSeg = `/-\\|`) {
    super();
  }

  get template() {
    return `<div></div>`;
  }

  start() {
    this.cursor = ++this.cursor >= this.symbolsSeg.length ? 0 :this.cursor;
    this.element.textContent = this.symbolsSeg[this.cursor];
    this.timeout = setTimeout(() => this.start(), 50);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}
