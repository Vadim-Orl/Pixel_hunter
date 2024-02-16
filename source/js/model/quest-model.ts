import {
  INITIAL_GAME, changeLevel, tick, resultGame, answer, decLives,
} from '../utils/bisnesFunction.js';

export default class QuestModel {
  private _state: any;

  constructor(public data: Date, public playerName: string) {
    this.restart();
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
