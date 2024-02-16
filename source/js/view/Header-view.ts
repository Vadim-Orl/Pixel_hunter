import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';
import Router from '../controller/router.js';
import { IStateGame } from '../utils/bisnesFunction.js';

export default class HeaderView extends AbstractView {
  constructor(private state?: IStateGame, private hasPlayerConsole = false) {
    super('header', ['header'])
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
            <h1 class="game__timer">${this.state?.time}</h1>
            <div class="game__lives">
               ${this.state?.lives && new Array(CONSTANTS.OPTION_GAME.MAX_LIVES - this.state.lives)
    .fill('<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">')
    .join('')}
               ${new Array(this.state?.lives)
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
    this.element.querySelector('.back')?.addEventListener('click', () => {
      this.onClick();
    });
  }
}
