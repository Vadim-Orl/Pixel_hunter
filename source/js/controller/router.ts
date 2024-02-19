import utils from '../utils/utils.js';
import IntroView from '../view/intro-view.js';

import RulesView from '../view/Rules-view.js';
import QuestModel, { IQuestModel } from '../model/quest-model.js';
import FinelyStatisticView from '../view/FinelyStatistic-view.js';
import GameScreen from '../model/game-screen.js';
import HeaderView from '../view/Header-view.js';
// import SplashScreen from '../view/Splash-view.js';
import ErrorView from '../view/Error-view.js';
import Loader from '../utils/loader.js';
import GreetingView from '../view/Greeting-view.js';
import { IGameData } from '../types/types.js';
import SplashScreen from '../view/Splash-view.js';

let questData: IGameData[];
let questResult: any[];

export default class Router {
  public static start() {
    Router.load().catch(Router.showError);
  }

  //используются тестовые данные
  public static async load() {
    
    const splash = new SplashScreen();
    utils.showScreen(utils.newCentralContainer(splash));
    splash.start();

    try {
      questData = await Loader.testData();
      Router.showWellcom();
    } catch (e) {
      if (e instanceof Error) {
        Router.showError(e);
      }
    } finally {
      splash.stop()
    }
  }

  public static showWellcom() {
    const introScreen = new IntroView()
    utils.showScreen(utils.newCentralContainer(introScreen))
  }

  public static showGreeting() {
    const header = new HeaderView();
    const greetingScreen = new GreetingView();

    utils.showScreen(utils.newCentralContainer(header, greetingScreen));
  }

  public static showRules() {
    const header = new HeaderView();
    const rulesScreen = new RulesView();

    utils.showScreen(utils.newCentralContainer(header, rulesScreen));
  }

  public static showGame(namePlayel: string) {
    const gameModel = new QuestModel(questData, namePlayel);
    const gameScreen = new GameScreen(gameModel);

    utils.showScreen(utils.newCentralContainer(gameScreen));
    gameScreen.startGame();
  }

  public static async showResult(game: IQuestModel, isFail: boolean) {
    const header = new HeaderView();
    const finelStatistic = new FinelyStatisticView(game, isFail);

    utils.showScreen(utils.newCentralContainer(header, finelStatistic));
    try {
      questResult = await Loader.loadResult();
      finelStatistic.showScores(questResult);
    } catch (e) {
      if (e instanceof TypeError) {
        Router.showError(e);
      }
    }

    Loader.saveResults(game);
  }

  public static showError(error: Error) {
    const errorScreen = new ErrorView(error);
    utils.showScreen(utils.newCentralContainer(errorScreen));
  }
}
