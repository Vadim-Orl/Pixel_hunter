import GameView from '../view/Game-view.js';
import Router from '../controller/router.js';
import HeaderView from '../view/Header-view.js';
import StatisticView from '../view/Statistic-view.js';
import { IQuestModel } from './quest-model.js';
import { TypeVarAnswer } from '../types/types.js';
import { isStringArr } from '../types/type-guards.js';

const ONE_SECOND = 1000;
const showPlayerHeader = true;

export default class GameScreen {
  root: HTMLDivElement;
  private _timer: null | NodeJS.Timeout;
  private _timeAnswer: number;
  header: HeaderView | undefined;
  content: GameView | undefined;
  statistic: StatisticView | undefined;

  constructor(private model: IQuestModel) {
    this.root = document.createElement('div');

    this._timer = null;
    this._timeAnswer = 0;

    this.updateHeader = this.updateHeader.bind(this)
    this.startGame = this.startGame.bind(this)
    this._tick = this._tick.bind(this)
    this.changeLevel = this.changeLevel.bind(this)
  }

  get element() {
    return this.root;
  }

  changeLevel() {
    this._timeAnswer = 0;
    this.updateHeader();
    this.updateStatistic();
    const levelData = this.model.data[this.model.getCurrentLevel()];
    const level = new GameView(levelData, this.model.getCurrentLevel())

    this.changeContentView(level);
    level.onAnswer = this.onAnswer.bind(this);
    level.resizeImages();
  }

  startGame() {
    this.header = new HeaderView(this.model.state, showPlayerHeader);
    this.content = new GameView(this.model.data[this.model.getCurrentLevel()], this.model.getCurrentLevel())
    this.statistic = new StatisticView(this.model.state);

    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.statistic.element);

    this.content.onAnswer = this.onAnswer.bind(this);
    this.content.resizeImages();
    this._tick();
  }

  stopGame() {
    this._timer && clearInterval(this._timer);
  }

  endGame(isFail: boolean) {
    this.model.isFail = isFail;
    this.model.resultPoints = this.model.resultGame()
    Router.showResult(this.model, isFail);
  }

  _tick() {
    if (this.model.state.time > 0) {
      this.model.tick()
      this._timeAnswer++;
      this.updateHeader();
      this._timer = setTimeout(() => this._tick(), ONE_SECOND);
    } else {
      this.endGame(true);
    }
  }

  onAnswer(...answer:  HTMLImageElement[] | string[]) {
    this.stopGame();

    const questionBd = this.model.data[this.model.getCurrentLevel()];
    let isCorrectAnsw = false;
    let findElement;

    switch (questionBd.type) {
      case 'singleQuestion':
      case 'doubleQuestion':
        if (isStringArr(answer)) {
          isCorrectAnsw = answer.every((el: string, index: number) => {
            return (questionBd.options[index].answer === el)
          })
        }
        break;

      case 'tripleQuestion':
         if (!isStringArr(answer)) {
          findElement = questionBd.options.find((el) => {
            return el.alt === answer[0].alt;
          })
        }

        isCorrectAnsw = (findElement?.answer === 'paint');

        break;
      default: throw new Error('Could not process user response. Check database');
    }

    this.model.answer(isCorrectAnsw, this._timeAnswer);

    if (this.model.isGameOver()) {
      this.endGame(true);
    } else if (this.model.hasNextLevel()) {
      this.model.nextLevel();
      this.changeLevel();
    } else {
      this.endGame(false);
    }
  }

  updateHeader() {
    const header = new HeaderView(this.model.state, showPlayerHeader);
    this.header && this.root.replaceChild(header.element, this.header.element)
    header.onClick = () => {
      this.stopGame();
      Router.showWellcom();
    }
    this.header = header;
  }

  changeContentView(view: any) {
    this.content && this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateStatistic() {
    const statistic = new StatisticView(this.model.state);
    this.statistic && this.root.replaceChild(statistic.element, this.statistic.element);
    this.statistic = statistic;
  }
}
