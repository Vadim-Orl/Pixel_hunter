import {
  INITIAL_GAME, changeLevel, tick, resultGame, answer, decLives,
} from '../utils/bisnesFunction.js';

export default class QuestModel {
  constructor(data, playerName) {
    this.playerName = playerName;
    this.data = data;
    this.restart();
  }

  restart() {
    this._state = INITIAL_GAME;
  }

  get state() {
    return Object.freeze(this._state);
  }

  hasNextLevel() {
    return changeLevel(this._state, this._state.level + 1) !== 0;
  }

  nextLevel() {
    return this._state = changeLevel(this._state, this._state.level + 1);
  }

  decLives() {
    return this._state = decLives(this._state);
  }

  getLives() {
    return this._state.lives;
  }

  getCurrentLevel() {
    return this._state.level;
  }

  gameOver() {
    return (this._state);
  }

  restart() {
    this._state = INITIAL_GAME;
  }

  isGameOver() {
    return this._state.lives <= 0;
  }

  tick() {
    this._state = tick(this._state);
  }

  answer(isCorrectAnsw, timeAnswer) {
    this._state = answer(this._state, isCorrectAnsw, timeAnswer);
  }

  resultGame() {
    return resultGame(this._state)
  }
}

//# sourceMappingURL=quest-model.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RlbC9xdWVzdC1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJTklUSUFMX0dBTUUsIGNoYW5nZUxldmVsLCB0aWNrLCByZXN1bHRHYW1lLCBhbnN3ZXIsIGRlY0xpdmVzLFxufSBmcm9tICcuLi91dGlscy9iaXNuZXNGdW5jdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBwbGF5ZXJOYW1lKSB7XG4gICAgdGhpcy5wbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IElOSVRJQUxfR0FNRTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzLl9zdGF0ZSk7XG4gIH1cblxuICBoYXNOZXh0TGV2ZWwoKSB7XG4gICAgcmV0dXJuIGNoYW5nZUxldmVsKHRoaXMuX3N0YXRlLCB0aGlzLl9zdGF0ZS5sZXZlbCArIDEpICE9PSAwO1xuICB9XG5cbiAgbmV4dExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9IGNoYW5nZUxldmVsKHRoaXMuX3N0YXRlLCB0aGlzLl9zdGF0ZS5sZXZlbCArIDEpO1xuICB9XG5cbiAgZGVjTGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID0gZGVjTGl2ZXModGhpcy5fc3RhdGUpO1xuICB9XG5cbiAgZ2V0TGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmxpdmVzO1xuICB9XG5cbiAgZ2V0Q3VycmVudExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5sZXZlbDtcbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fc3RhdGUpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IElOSVRJQUxfR0FNRTtcbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmxpdmVzIDw9IDA7XG4gIH1cblxuICB0aWNrKCkge1xuICAgIHRoaXMuX3N0YXRlID0gdGljayh0aGlzLl9zdGF0ZSk7XG4gIH1cblxuICBhbnN3ZXIoaXNDb3JyZWN0QW5zdywgdGltZUFuc3dlcikge1xuICAgIHRoaXMuX3N0YXRlID0gYW5zd2VyKHRoaXMuX3N0YXRlLCBpc0NvcnJlY3RBbnN3LCB0aW1lQW5zd2VyKTtcbiAgfVxuXG4gIHJlc3VsdEdhbWUoKSB7XG4gICAgcmV0dXJuIHJlc3VsdEdhbWUodGhpcy5fc3RhdGUpXG4gIH1cbn1cbiJdLCJmaWxlIjoicXVlc3QtbW9kZWwuanMifQ==
