import { IGameData, IResultGame } from '../types/types.js';
import { IQuestModel } from '../model/quest-model.js';
import GAME_DATA from '../tmp/game-data.js'

const SERVER_URL = 'http://localhost:3001';


const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
}

const adaptDataForServer = (resultGame: IQuestModel) => {
  return {
    isFail: resultGame.isFail,
    resultPoints: resultGame.resultPoints,
    results: resultGame.state.results,
  }
}

const toJSON = (res: any): IGameData[] | IResultGame[] => res.json();


export default class Loader {

  public static testData():IGameData[] {
    return GAME_DATA;
  }

  static async loadData(): Promise<IGameData[]> {
    const response = await window.fetch(`${SERVER_URL}/server`);
    const res = checkStatus(response);
    return toJSON(res) as IGameData[];
  }

  static async loadResult(): Promise<IResultGame[]> {
    const response = await window.fetch(`${SERVER_URL}/stat`);
    const res = checkStatus(response);
    return toJSON(res) as IResultGame[];
  }

  static async saveResults(data: IQuestModel): Promise<Response> {
    const statData = adaptDataForServer(data);
    const requestSettings = {
      body: JSON.stringify(statData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
    const response = await window.fetch(`${SERVER_URL}/stat`, requestSettings);
    return checkStatus(response);
  }
}
