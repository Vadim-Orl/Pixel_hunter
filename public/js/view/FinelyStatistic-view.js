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
            </tr>`;
    },
    bonusLives: (coutLives) => {
        return `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${coutLives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
              <td class="result__total">${coutLives * CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint}</td>
            </tr>`;
    },
    fineSlow: (countSlow) => {
        return ` <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${countSlow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;${CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
                <td class="result__total">${countSlow * CONSTANTS.LIBRARY_ANSWER_POINT.slow}</td>
              </tr>`;
    },
};
export default class FinelyStatisticView extends AbstractView {
    constructor(game, isFail) {
        super('div', ['result']);
        Object.defineProperty(this, "game", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: game
        });
        Object.defineProperty(this, "isFail", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: isFail
        });
        Object.defineProperty(this, "_scoreBoardContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setStats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.setStats = game.state.results;
        this._scoreBoardContainer = null;
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
                return `<li class="stats__result stats__result--${el}"></li>`;
            })}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <div class = "scoreBoard"><p> Загрузка результатов... </p></div>
      `;
        }
        const countFast = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.fast)).length;
        const countSlow = (this.setStats.filter((el) => el === CONSTANTS.LIBRARY_TYPE_ANSWERS.slow)).length;
        const countCorrect = (this.setStats.filter((el) => el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.wrong && el !== CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)).length;
        return `

    <h1>${this.game.playerName}, Вы победили!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${this.setStats.map((el) => {
            return `<li class="stats__result stats__result--${el}"></li>`;
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
    `;
    }
    bind() {
        this._scoreBoardContainer = this.element.querySelector('div.scoreBoard');
    }
    showScores(scores) {
        if (this._scoreBoardContainer) {
            this._scoreBoardContainer.innerHTML = `
      <table class="result__table">
        ${scores.reverse().map((it, i) => `
        <tr>
          <td class="result__number">${i + 2}.</td>
          <td>
            <ul class="stats">
            ${it.results.map((el) => {
                return `<li class="stats__result stats__result--${el}"></li>`;
            })}
            </ul>
          </td>
          <td class="result__total">${it.resultPoints}</td>
          <td class="result__total  result__total--final">${!it.isFail ? 'WIN' : 'FAIL'}</td>
          </tr>
          `).join('')}

      </table>`;
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvRmluZWx5U3RhdGlzdGljLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2xELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLFVBQVUsRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRTtRQUNoQyxPQUFPOzs7MENBRytCLFNBQVM7a0RBQ0QsU0FBUyxDQUFDLG9CQUFvQixDQUFDLElBQUk7MENBQzNDLFNBQVMsR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSTtrQkFDdkUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsVUFBVSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFO1FBQ2hDLE9BQU87OzswQ0FHK0IsU0FBUztrREFDRCxTQUFTLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCOzBDQUN2RCxTQUFTLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQjtrQkFDbkYsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsUUFBUSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFO1FBQzlCLE9BQU87Ozs0Q0FHaUMsU0FBUztvREFDRCxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSTs0Q0FDM0MsU0FBUyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJO29CQUN2RSxDQUFBO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8sT0FBTyxtQkFBb0IsU0FBUSxZQUFZO0lBSTNELFlBQW9CLElBQWlCLEVBQVUsTUFBZTtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQURkOzs7O21CQUFRLElBQUk7V0FBYTtRQUFFOzs7O21CQUFRLE1BQU07V0FBUztRQUh0RDs7Ozs7V0FBNEM7UUFDcEQ7Ozs7O1dBQW1CO1FBSWpCLElBQUksQ0FBQyxRQUFRLEdBQUcs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QUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07O1dBRTVFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztlQUVOLENBQUE7UUFDWCxDQUFDO0lBQ0QsQ0FBQztDQUVKIiwiZmlsZSI6InZpZXcvRmluZWx5U3RhdGlzdGljLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RWaWV3IGZyb20gJy4vQWJzdHJhY3Qtdmlldy5qcyc7XG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgSVF1ZXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbC9xdWVzdC1tb2RlbC5qcyc7XG5cbmNvbnN0IHN0YXRzQm9udXNIdG1sID0ge1xuICBib251c1NwZWVkOiAoY291bnRGYXN0OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYDx0cj5cbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0YHQutC+0YDQvtGB0YLRjDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+JHtjb3VudEZhc3R9Jm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWZhc3RcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOyR7Q09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmZhc3R9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPiR7Y291bnRGYXN0ICogQ09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmZhc3R9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+YFxuICB9LFxuICBib251c0xpdmVzOiAoY291dExpdmVzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYDx0cj5cbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fZXh0cmFcIj7QkdC+0L3Rg9GBINC30LAg0LbQuNC30L3QuDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+JHtjb3V0TGl2ZXN9Jm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLWhlYXJ0XCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fcG9pbnRzXCI+w5cmbmJzcDske0NPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5iYWxhbmNlTGl2ZVBvaW50fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2NvdXRMaXZlcyAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5iYWxhbmNlTGl2ZVBvaW50fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPmBcbiAgfSxcbiAgZmluZVNsb3c6IChjb3VudFNsb3c6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+0KjRgtGA0LDRhCDQt9CwINC80LXQtNC70LjRgtC10LvRjNC90L7RgdGC0Yw6PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX2V4dHJhXCI+JHtjb3VudFNsb3d9Jm5ic3A7PHNwYW4gY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLXNsb3dcIj48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3BvaW50c1wiPsOXJm5ic3A7JHtDT05TVEFOVFMuTElCUkFSWV9BTlNXRVJfUE9JTlQuc2xvd308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2NvdW50U2xvdyAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5zbG93fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+YFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5lbHlTdGF0aXN0aWNWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgcHJpdmF0ZSBfc2NvcmVCb2FyZENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuICBzZXRTdGF0czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBJUXVlc3RNb2RlbCwgcHJpdmF0ZSBpc0ZhaWw6IGJvb2xlYW4pIHtcbiAgICBzdXBlcignZGl2JywgWydyZXN1bHQnXSlcbiAgICB0aGlzLnNldFN0YXRzID0gZ2FtZS5zdGF0ZS5yZXN1bHRzO1xuICAgIHRoaXMuX3Njb3JlQm9hcmRDb250YWluZXIgPSBudWxsO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGlmICh0aGlzLmlzRmFpbCkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgIDxoMT4ke3RoaXMuZ2FtZS5wbGF5ZXJOYW1lfSwg0JLRiyDQv9GA0L7QuNCz0YDQsNC70LghPC9oMT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICR7dGhpcy5nYW1lLnN0YXRlLnJlc3VsdHMubWFwKChlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLSR7ZWx9XCI+PC9saT5gXG4gIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj48L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPmZhaWw8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3MgPSBcInNjb3JlQm9hcmRcIj48cD4g0JfQsNCz0YDRg9C30LrQsCDRgNC10LfRg9C70YzRgtCw0YLQvtCyLi4uIDwvcD48L2Rpdj5cbiAgICAgIGBcbiAgICB9XG5cbiAgICBjb25zdCBjb3VudEZhc3QgPSAodGhpcy5zZXRTdGF0cy5maWx0ZXIoKGVsKSA9PiBlbCA9PT0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLmZhc3QpKS5sZW5ndGhcblxuICAgIGNvbnN0IGNvdW50U2xvdyA9ICh0aGlzLnNldFN0YXRzLmZpbHRlcigoZWwpID0+IGVsID09PSBDT05TVEFOVFMuTElCUkFSWV9UWVBFX0FOU1dFUlMuc2xvdykpLmxlbmd0aFxuXG4gICAgY29uc3QgY291bnRDb3JyZWN0ID0gKHRoaXMuc2V0U3RhdHMuZmlsdGVyKChlbCkgPT4gZWwgIT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy53cm9uZyAmJiBlbCAhPT0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLnVua25vd24pKS5sZW5ndGhcblxuICAgIHJldHVybiBgXG5cbiAgICA8aDE+JHt0aGlzLmdhbWUucGxheWVyTmFtZX0sINCS0Ysg0L/QvtCx0LXQtNC40LvQuCE8L2gxPlxuICAgIDx0YWJsZSBjbGFzcz1cInJlc3VsdF9fdGFibGVcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4xLjwvdGQ+XG4gICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgJHt0aGlzLnNldFN0YXRzLm1hcCgoZWwpID0+IHtcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cInN0YXRzX19yZXN1bHQgc3RhdHNfX3Jlc3VsdC0tJHtlbH1cIj48L2xpPmBcbiAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19wb2ludHNcIj7DlyZuYnNwOyR7Q09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmNvcnJlY3R9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X190b3RhbFwiPiR7Y291bnRDb3JyZWN0ICogQ09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5ULmNvcnJlY3R9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICAgICAke2NvdW50RmFzdCA/IHN0YXRzQm9udXNIdG1sLmJvbnVzU3BlZWQoY291bnRGYXN0KSA6ICcnfVxuICAgICAgICAgJHtjb3VudFNsb3cgPyBzdGF0c0JvbnVzSHRtbC5maW5lU2xvdyhjb3VudFNsb3cpIDogJyd9XG4gICAgICAgICAke3RoaXMuZ2FtZS5nZXRMaXZlcygpID8gc3RhdHNCb251c0h0bWwuYm9udXNMaXZlcyh0aGlzLmdhbWUuZ2V0TGl2ZXMoKSkgOiAnJ31cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJyZXN1bHRfX3RvdGFsICByZXN1bHRfX3RvdGFsLS1maW5hbFwiPiR7dGhpcy5nYW1lLnJlc3VsdFBvaW50c308L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXYgY2xhc3MgPSBcInNjb3JlQm9hcmRcIj48cD4g0JfQsNCz0YDRg9C30LrQsCDRgNC10LfRg9C70YzRgtCw0YLQvtCyLi4uIDwvcD48L2Rpdj5cbiAgICBgXG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuX3Njb3JlQm9hcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNjb3JlQm9hcmQnKSFcbiAgfVxuXG4gIHNob3dTY29yZXMoc2NvcmVzOiBhbnkpIHtcbiAgICBpZiAoIHRoaXMuX3Njb3JlQm9hcmRDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX3Njb3JlQm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPHRhYmxlIGNsYXNzPVwicmVzdWx0X190YWJsZVwiPlxuICAgICAgICAke3Njb3Jlcy5yZXZlcnNlKCkubWFwKChpdDphbnksIGk6IG51bWJlcikgPT4gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwicmVzdWx0X19udW1iZXJcIj4ke2kgKyAyfS48L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0YXRzXCI+XG4gICAgICAgICAgICAke2l0LnJlc3VsdHMubWFwKChlbDphbnkpID0+IHtcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwic3RhdHNfX3Jlc3VsdCBzdGF0c19fcmVzdWx0LS0ke2VsfVwiPjwvbGk+YFxuICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWxcIj4ke2l0LnJlc3VsdFBvaW50c308L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cInJlc3VsdF9fdG90YWwgIHJlc3VsdF9fdG90YWwtLWZpbmFsXCI+JHshaXQuaXNGYWlsID8gJ1dJTicgOiAnRkFJTCd9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIGApLmpvaW4oJycpfVxuXG4gICAgICA8L3RhYmxlPmBcbiAgICB9XG4gICAgfVxuXG59XG4iXX0=