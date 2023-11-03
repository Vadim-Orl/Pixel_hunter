import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';

const statsBonusHtml = {
  bonusSpeed: (countFast) => {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${countFast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.fast}</td>
              <td class="result__total">${countFast * CONSTANTS.LIBRARY_ANSWER_POINT.fast}</td>
            </tr>`
  },
  bonusLives: (coutLives) => {
    return `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${coutLives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
              <td class="result__total">${coutLives * CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
            </tr>`
  },
  fineSlow: (countSlow) => {
    return ` <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${countSlow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
                <td class="result__total">${countSlow * CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
              </tr>`
  },
}

export default class FinelyStatisticView extends AbstractView {
  constructor(game, isFail) {
    super('div', { classes: ['result'] })

    this.isFail = isFail;
    this.game = game;
    this.setStats = game.state.results;
  }

  get template() {
    if (this.isFail) {
      return `
      <h1>${this.game.playerName}, Вы проиграли!</h1>
      <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td>
          <ul class="stats">
          ${this.game.state.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <div class = "scoreBoard"><p> Загрузка результатов... </p></div>
      `
    }

    const countFast = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.fast)).length
    console.log(countFast)

    const countSlow = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.slow)).length
    console.log(countSlow)

    const countCorrect = (this.setStats.filter((el) => el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.wrong && el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)).length
    console.dir(countCorrect)

    return `

    <h1>${this.game.playerName}, Вы победили!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${this.setStats.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.correct}</td>
        <td class="result__total">${countCorrect * CONSTANTS.LIBRARY_ANSWER_POINT.correct}</td>
      </tr>
         ${countFast ? statsBonusHtml.bonusSpeed(countFast) : ''}
         ${countSlow ? statsBonusHtml.fineSlow(countSlow) : ''}
         ${this.game.getLives() ? statsBonusHtml.bonusLives(this.game.getLives()) : ''}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.game.resultPoints}</td>
      </tr>
    </table>
    <div class = "scoreBoard"><p> Загрузка результатов... </p></div>
    `
  }

  bind() {
    this._scoreBoardContainer = this.element.querySelector('div.scoreBoard')
  }

  showScores(scores) {
    this._scoreBoardContainer.innerHTML = `
    <table class="result__table">
      ${scores.reverse().map((it, i) => `
      <tr>
        <td class="result__number">${i + 2}.</td>
        <td>
          <ul class="stats">
          ${it.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}
          </ul>
        </td>
        <td class="result__total">${it.resultPoints}</td>
        <td class="result__total  result__total--final">${!it.isFail ? 'WIN' : 'FAIL'}</td>
        </tr>
        `).join('')}

    </table>`
  }
}

//# sourceMappingURL=FinelyStatistic-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0ZpbmVseVN0YXRpc3RpYy12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IHN0YXRzQm9udXNIdG1sID0ge1xuICBib251c1NwZWVkOiAoY291bnRGYXN0KSA9PiB7XG4gICAgcmV0dXJuIGA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0JHQvtC90YPRgSDQt9CwINGB0LrQvtGA0L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPiR7Y291bnRGYXN0fSZuYnNwOzxzcGFuIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS1mYXN0XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDske0NPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5mYXN0fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2NvdW50RmFzdCAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5mYXN0fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPmBcbiAgfSxcbiAgYm9udXNMaXZlczogKGNvdXRMaXZlcykgPT4ge1xuICAgIHJldHVybiBgPHRyPlxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19leHRyYVwiPtCR0L7QvdGD0YEg0LfQsCDQttC40LfQvdC4OjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj4ke2NvdXRMaXZlc30mbmJzcDs8c3BhbiBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0taGVhcnRcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOyR7Q09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmJhbGFuY2VMaXZlUG9pbnR9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPiR7Y291dExpdmVzICogQ09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmJhbGFuY2VMaXZlUG9pbnR9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+YFxuICB9LFxuICBmaW5lU2xvdzogKGNvdW50U2xvdykgPT4ge1xuICAgIHJldHVybiBgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0KjRgtGA0LDRhCDQt9CwINC80LXQtNC70LjRgtC10LvRjNC90L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+JHtjb3VudFNsb3d9Jm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7JHtDT05TVEFOVFMuTElCUkFSWV9BTlNXRVJfUE9JTlQuc2xvd308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2NvdW50U2xvdyAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5zbG93fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+YFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5lbHlTdGF0aXN0aWNWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgaXNGYWlsKSB7XG4gICAgc3VwZXIoJ2RpdicsIHsgY2xhc3NlczogWydyZXN1bHQnXSB9KVxuXG4gICAgdGhpcy5pc0ZhaWwgPSBpc0ZhaWw7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnNldFN0YXRzID0gZ2FtZS5zdGF0ZS5yZXN1bHRzO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGlmICh0aGlzLmlzRmFpbCkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgIDxoMT4ke3RoaXMuZ2FtZS5wbGF5ZXJOYW1lfSwg0JLRiyDQv9GA0L7QuNCz0YDQsNC70LghPC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICR7dGhpcy5nYW1lLnN0YXRlLnJlc3VsdHMubWFwKChlbCkgPT4ge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS0ke2VsfVwiPjwvbGk+YFxuICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj5mYWlsPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8ZGl2IGNsYXNzID0gXCJzY29yZUJvYXJkXCI+PHA+INCX0LDQs9GA0YPQt9C60LAg0YDQtdC30YPQu9GM0YLQsNGC0L7Qsi4uLiA8L3A+PC9kaXY+XG4gICAgICBgXG4gICAgfVxuXG4gICAgY29uc3QgY291bnRGYXN0ID0gKHRoaXMuc2V0U3RhdHMuZmlsdGVyKChlbCkgPT4gZWwgPT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5mYXN0KSkubGVuZ3RoXG4gICAgY29uc29sZS5sb2coY291bnRGYXN0KVxuXG4gICAgY29uc3QgY291bnRTbG93ID0gKHRoaXMuc2V0U3RhdHMuZmlsdGVyKChlbCkgPT4gZWwgPT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5zbG93KSkubGVuZ3RoXG4gICAgY29uc29sZS5sb2coY291bnRTbG93KVxuXG4gICAgY29uc3QgY291bnRDb3JyZWN0ID0gKHRoaXMuc2V0U3RhdHMuZmlsdGVyKChlbCkgPT4gZWwgIT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy53cm9uZyAmJiBlbCAhPT0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLnVua25vd24pKS5sZW5ndGhcbiAgICBjb25zb2xlLmRpcihjb3VudENvcnJlY3QpXG5cbiAgICByZXR1cm4gYFxuXG4gICAgPGgxPiR7dGhpcy5nYW1lLnBsYXllck5hbWV9LCDQktGLINC/0L7QsdC10LTQuNC70LghPC9oMT5cbiAgICA8dGFibGUgY2xhc3M9XCJyZXN1bHRfX3RhYmxlXCI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fbnVtYmVyXCI+MS48L3RkPlxuICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICR7dGhpcy5zZXRTdGF0cy5tYXAoKGVsKSA9PiB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLSR7ZWx9XCI+PC9saT5gXG4gIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDske0NPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5jb3JyZWN0fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2NvdW50Q29ycmVjdCAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5jb3JyZWN0fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgICAgJHtjb3VudEZhc3QgPyBzdGF0c0JvbnVzSHRtbC5ib251c1NwZWVkKGNvdW50RmFzdCkgOiAnJ31cbiAgICAgICAgICR7Y291bnRTbG93ID8gc3RhdHNCb251c0h0bWwuZmluZVNsb3coY291bnRTbG93KSA6ICcnfVxuICAgICAgICAgJHt0aGlzLmdhbWUuZ2V0TGl2ZXMoKSA/IHN0YXRzQm9udXNIdG1sLmJvbnVzTGl2ZXModGhpcy5nYW1lLmdldExpdmVzKCkpIDogJyd9XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj4ke3RoaXMuZ2FtZS5yZXN1bHRQb2ludHN9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8ZGl2IGNsYXNzID0gXCJzY29yZUJvYXJkXCI+PHA+INCX0LDQs9GA0YPQt9C60LAg0YDQtdC30YPQu9GM0YLQsNGC0L7Qsi4uLiA8L3A+PC9kaXY+XG4gICAgYFxuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLl9zY29yZUJvYXJkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zY29yZUJvYXJkJylcbiAgfVxuXG4gIHNob3dTY29yZXMoc2NvcmVzKSB7XG4gICAgdGhpcy5fc2NvcmVCb2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgJHtzY29yZXMucmV2ZXJzZSgpLm1hcCgoaXQsIGkpID0+IGBcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4ke2kgKyAyfS48L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHVsIGNsYXNzPVwic3RhdHNcIj5cbiAgICAgICAgICAke2l0LnJlc3VsdHMubWFwKChlbCkgPT4ge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS0ke2VsfVwiPjwvbGk+YFxuICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsXCI+JHtpdC5yZXN1bHRQb2ludHN9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbCAgcmVzdWx0X190b3RhbC0tZmluYWxcIj4keyFpdC5pc0ZhaWwgPyAnV0lOJyA6ICdGQUlMJ308L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICBgKS5qb2luKCcnKX1cblxuICAgIDwvdGFibGU+YFxuICB9XG59XG4iXSwiZmlsZSI6IkZpbmVseVN0YXRpc3RpYy12aWV3LmpzIn0=
