import GameView from '../view/Game-view.js';
import Router from '../controller/router.js';
import HeaderView from '../view/Header-view.js';
import StatisticView from '../view/Statistic-view.js';

const ONE_SECOND = 1000;
const showPlayerHeader = true;

export default class GameScreen {
  constructor(model) {
    this.model = model;
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
    clearInterval(this._timer);
  }

  endGame(isFail) {
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

  onAnswer(...answer) {
    this.stopGame();

    const questionBd = this.model.data[this.model.getCurrentLevel()];
    let isCorrectAnsw = false;
    let findElement;

    switch (questionBd.type) {
      case 'singleQuestion':
      case 'doubleQuestion':
        isCorrectAnsw = answer.every((el, index) => {
          return (questionBd.options[index].answer === el)
        })
        break;

      case 'tripleQuestion':
        findElement = questionBd.options.find((el) => {
          return el.alt === answer[0].alt;
        })
        isCorrectAnsw = (findElement.answer === 'paint');

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
    this.root.replaceChild(header.element, this.header.element)
    header.onClick = () => {
      this.stopGame();
      Router.showWellcom();
    }
    this.header = header;
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateStatistic() {
    const statistic = new StatisticView(this.model.state);
    this.root.replaceChild(statistic.element, this.statistic.element);
    this.statistic = statistic;
  }
}

//# sourceMappingURL=game-screen.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RlbC9nYW1lLXNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi4vdmlldy9HYW1lLXZpZXcuanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9jb250cm9sbGVyL3JvdXRlci5qcyc7XG5pbXBvcnQgSGVhZGVyVmlldyBmcm9tICcuLi92aWV3L0hlYWRlci12aWV3LmpzJztcbmltcG9ydCBTdGF0aXN0aWNWaWV3IGZyb20gJy4uL3ZpZXcvU3RhdGlzdGljLXZpZXcuanMnO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IHNob3dQbGF5ZXJIZWFkZXIgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZUFuc3dlciA9IDA7XG5cbiAgICB0aGlzLnVwZGF0ZUhlYWRlciA9IHRoaXMudXBkYXRlSGVhZGVyLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLl90aWNrID0gdGhpcy5fdGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VMZXZlbCA9IHRoaXMuY2hhbmdlTGV2ZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIGNoYW5nZUxldmVsKCkge1xuICAgIHRoaXMuX3RpbWVBbnN3ZXIgPSAwO1xuICAgIHRoaXMudXBkYXRlSGVhZGVyKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0aXN0aWMoKTtcbiAgICBjb25zdCBsZXZlbERhdGEgPSB0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV07XG4gICAgY29uc3QgbGV2ZWwgPSBuZXcgR2FtZVZpZXcobGV2ZWxEYXRhLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuXG4gICAgdGhpcy5jaGFuZ2VDb250ZW50VmlldyhsZXZlbCk7XG4gICAgbGV2ZWwub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgbGV2ZWwucmVzaXplSW1hZ2VzKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyVmlldyh0aGlzLm1vZGVsLnN0YXRlLCBzaG93UGxheWVySGVhZGVyKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBuZXcgR2FtZVZpZXcodGhpcy5tb2RlbC5kYXRhW3RoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCldLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuICAgIHRoaXMuc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG5cbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIuZWxlbWVudCk7XG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMuY29udGVudC5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmNvbnRlbnQub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb250ZW50LnJlc2l6ZUltYWdlcygpO1xuICAgIHRoaXMuX3RpY2soKTtcbiAgfVxuXG4gIHN0b3BHYW1lKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgZW5kR2FtZShpc0ZhaWwpIHtcbiAgICB0aGlzLm1vZGVsLmlzRmFpbCA9IGlzRmFpbDtcbiAgICB0aGlzLm1vZGVsLnJlc3VsdFBvaW50cyA9IHRoaXMubW9kZWwucmVzdWx0R2FtZSgpXG4gICAgUm91dGVyLnNob3dSZXN1bHQodGhpcy5tb2RlbCwgaXNGYWlsKTtcbiAgfVxuXG4gIF90aWNrKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLnN0YXRlLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnRpY2soKVxuICAgICAgdGhpcy5fdGltZUFuc3dlcisrO1xuICAgICAgdGhpcy51cGRhdGVIZWFkZXIoKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl90aWNrKCksIE9ORV9TRUNPTkQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZEdhbWUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25BbnN3ZXIoLi4uYW5zd2VyKSB7XG4gICAgdGhpcy5zdG9wR2FtZSgpO1xuXG4gICAgY29uc3QgcXVlc3Rpb25CZCA9IHRoaXMubW9kZWwuZGF0YVt0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpXTtcbiAgICBsZXQgaXNDb3JyZWN0QW5zdyA9IGZhbHNlO1xuICAgIGxldCBmaW5kRWxlbWVudDtcblxuICAgIHN3aXRjaCAocXVlc3Rpb25CZC50eXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGVRdWVzdGlvbic6XG4gICAgICBjYXNlICdkb3VibGVRdWVzdGlvbic6XG4gICAgICAgIGlzQ29ycmVjdEFuc3cgPSBhbnN3ZXIuZXZlcnkoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAocXVlc3Rpb25CZC5vcHRpb25zW2luZGV4XS5hbnN3ZXIgPT09IGVsKVxuICAgICAgICB9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpcGxlUXVlc3Rpb24nOlxuICAgICAgICBmaW5kRWxlbWVudCA9IHF1ZXN0aW9uQmQub3B0aW9ucy5maW5kKChlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbC5hbHQgPT09IGFuc3dlclswXS5hbHQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlzQ29ycmVjdEFuc3cgPSAoZmluZEVsZW1lbnQuYW5zd2VyID09PSAncGFpbnQnKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHByb2Nlc3MgdXNlciByZXNwb25zZS4gQ2hlY2sgZGF0YWJhc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsLmFuc3dlcihpc0NvcnJlY3RBbnN3LCB0aGlzLl90aW1lQW5zd2VyKTtcblxuICAgIGlmICh0aGlzLm1vZGVsLmlzR2FtZU92ZXIoKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5oYXNOZXh0TGV2ZWwoKSkge1xuICAgICAgdGhpcy5tb2RlbC5uZXh0TGV2ZWwoKTtcbiAgICAgIHRoaXMuY2hhbmdlTGV2ZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRHYW1lKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlclZpZXcodGhpcy5tb2RlbC5zdGF0ZSwgc2hvd1BsYXllckhlYWRlcik7XG4gICAgdGhpcy5yb290LnJlcGxhY2VDaGlsZChoZWFkZXIuZWxlbWVudCwgdGhpcy5oZWFkZXIuZWxlbWVudClcbiAgICBoZWFkZXIub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIFJvdXRlci5zaG93V2VsbGNvbSgpO1xuICAgIH1cbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnRWaWV3KHZpZXcpIHtcbiAgICB0aGlzLnJvb3QucmVwbGFjZUNoaWxkKHZpZXcuZWxlbWVudCwgdGhpcy5jb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGVudCA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0aXN0aWMoKSB7XG4gICAgY29uc3Qgc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG4gICAgdGhpcy5yb290LnJlcGxhY2VDaGlsZChzdGF0aXN0aWMuZWxlbWVudCwgdGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG4gICAgdGhpcy5zdGF0aXN0aWMgPSBzdGF0aXN0aWM7XG4gIH1cbn1cbiJdLCJmaWxlIjoiZ2FtZS1zY3JlZW4uanMifQ==
