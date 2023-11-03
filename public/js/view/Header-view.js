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

//# sourceMappingURL=Header-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0hlYWRlci12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBoYXNQbGF5ZXJDb25zb2xlID0gZmFsc2UpIHtcbiAgICBzdXBlcignaGVhZGVyJywgeyBjbGFzc2VzOiBbJ2hlYWRlciddIH0pXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuaGFzUGxheWVyQ29uc29sZSA9IGhhc1BsYXllckNvbnNvbGU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgaWYgKHRoaXMuaGFzUGxheWVyQ29uc29sZSkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXJyb3dfbGVmdC5zdmdcIiB3aWR0aD1cIjQ1XCIgaGVpZ2h0PVwiNDVcIiBhbHQ9XCJCYWNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nb19zbWFsbC5wbmdcIiB3aWR0aD1cIjEwMVwiIGhlaWdodD1cIjQ0XCI+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZ2FtZV9fdGltZXJcIj4ke3RoaXMuc3RhdGUudGltZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gICAgICAgICAgICAgICAke25ldyBBcnJheShDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX0xJVkVTIC0gdGhpcy5zdGF0ZS5saXZlcylcbiAgICAuZmlsbCgnPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+JylcbiAgICAuam9pbignJyl9XG4gICAgICAgICAgICAgICAke25ldyBBcnJheSh0aGlzLnN0YXRlLmxpdmVzKVxuICAgIC5maWxsKCc8aW1nIHNyYz1cImltZy9oZWFydF9fZnVsbC5zdmdcIiBjbGFzcz1cImdhbWVfX2hlYXJ0XCIgYWx0PVwiTGlmZVwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPicpXG4gICAgLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2JhY2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fycm93X2xlZnQuc3ZnXCIgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjQ1XCIgYWx0PVwiQmFja1wiPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ29fc21hbGwucG5nXCIgd2lkdGg9XCIxMDFcIiBoZWlnaHQ9XCI0NFwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIFJvdXRlci5zaG93V2VsbGNvbSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH0pO1xuICB9XG59XG4iXSwiZmlsZSI6IkhlYWRlci12aWV3LmpzIn0=
