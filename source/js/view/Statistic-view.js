import AbstractView from './Abstract-view.js'

export default class StatisticView extends AbstractView {
  constructor(state) {
    super('div', { classes: ['stats'] })

    this.state = state;
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
