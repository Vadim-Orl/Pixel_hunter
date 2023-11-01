import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';
import Router from '../controller/router.js';

export default class HeaderView extends AbstractView {
  constructor(state, hasPlayerConsole = false) {
    super('header', { classes: ['header'] })
    this.state = state;
    this.hasPlayerConsole = hasPlayerConsole;
  }

  get template() {
    if (this.hasPlayerConsole) {
      return `
            <div class="header__back">
              <span class="back">
                <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                <img src="img/logo_small.png" width="101" height="44">
              </span>
            </div>
            <h1 class="game__timer">${this.state.time}</h1>
            <div class="game__lives">
               ${new Array(CONSTANTS.OPTION_GAME.MAX_LIVES - this.state.lives)
    .fill('<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">')
    .join('')}
               ${new Array(this.state.lives)
    .fill('<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">')
    .join('')}
                </div>
            `
    }

    return `
              <div class="header__back">
                <span class="back">
                  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                   <img src="img/logo_small.png" width="101" height="44">
                </span>
              </div>
            `
  }

  onClick() {
    Router.showWellcom();
  }

  bind() {
    this.element.querySelector('.back').addEventListener('click', () => {
      this.onClick();
    });
  }
}
