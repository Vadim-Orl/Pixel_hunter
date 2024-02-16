import { isGameModel } from '../../types/type-guards.js';
import { IGameData } from '../../types/types.js';
import {
  INITIAL_GAME, changeLevel, tick, resultGame, answer, decLives, IStateGame,
} from '../utils/bisnesFunction.js';

export interface IQuestModel {
  resultPoints: number;
  isFail: boolean | null;
  data: IGameData[],
  readonly state: IStateGame,
  playerName: string

  hasNextLevel(): boolean,
  nextLevel():  IStateGame | undefined,
  decLives(): IStateGame | undefined,
  getLives(): number,
  getCurrentLevel(): number,
  gameOver(): IStateGame,
  restart(): void,
  isGameOver(): boolean,
  tick(): void,
  answer(isCorrectAnsw: boolean, timeAnswer: number): void,
  resultGame(): number
}


export default class QuestModel implements IQuestModel {
  private  _state: IStateGame;
  resultPoints: number;
  isFail: boolean;

  constructor(public data: IGameData[], public playerName: string) {
    this.restart();
    this.resultPoints = 0;
    this.isFail = false;
    this._state = INITIAL_GAME;
  }


  get state() {
    return Object.freeze(this._state);
  }

  hasNextLevel() {
    return changeLevel(this._state, this._state.level + 1) !== 0;
  }

  nextLevel() {
    const newState = changeLevel(this._state, this._state.level + 1)
    if (isGameModel(newState)) {
      return this._state =newState;
    }
  }

  decLives() {
    const newState = decLives(this._state)
    if (isGameModel(newState)) {
      return this._state = newState;
    }
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

  answer(isCorrectAnsw: boolean, timeAnswer: number) {
    this._state = answer(this._state, isCorrectAnsw, timeAnswer);
  }

  resultGame() {
    return resultGame(this._state)
  }
}
