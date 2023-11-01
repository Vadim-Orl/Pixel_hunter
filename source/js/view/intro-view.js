import AbstractView from './Abstract-view.js';
import Application from '../controller/router.js';

export default class IntroView extends AbstractView {
  constructor() {
    super('div', { classes: ['intro'] })
  }

  get template() {
    return ` <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    `
  }

  onAnswer() {
    Application.showGreeting();
  }

  bind() {
    this._element.querySelector('.intro__asterisk').addEventListener('click', (evt) => {
      evt.preventDefault();
      this.onAnswer()
    })
  }
}
