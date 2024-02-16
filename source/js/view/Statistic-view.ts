import { IStateGame } from '../utils/bisnesFunction.js';
import AbstractView from './Abstract-view.js'

export default class StatisticView extends AbstractView {
  constructor(private state: IStateGame) {
    super('div', ['stats'])
  }

  get template() {
    return `
            <ul class="stats">
            ${this.state.results.map((el) => {
    return `<li class="stats__result stats__result--${el}"></li>`
  })}

    </ul>
  `
  }
}
