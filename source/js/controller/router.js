import utils from '../utils/utils.js';
import IntroView from '../view/intro-view.js';
import GreetingView from '../view/Greeting-view.js';
import RulesView from '../view/Rules-view.js';
import QuestModel from '../model/quest-model.js';
import FinelyStatisticView from '../view/FinelyStatistic-view.js';
import GameScreen from '../model/game-screen.js';
import HeaderView from '../view/Header-view.js';
import SplashScreen from '../view/Splash-view.js';
import ErrorView from '../view/Error-view.js';
import Loader from '../utils/loader.js';

let questData;
let questResult;

export default class Router {
  static start() {
    Router.load().catch(Router.showError);
  }

  static async load() {
    const splash = new SplashScreen();
    utils.showScreen(utils.newCentralContainer(splash));
    splash.start();
    try {
      questData = await Loader.loadData();
      Router.showWellcom();
    } catch (e) {
      Router.showError(e);
    } finally {
      splash.stop()
    }
  }

  static showWellcom() {
    const introScreen = new IntroView()
    utils.showScreen(utils.newCentralContainer(introScreen))
  }

  static showGreeting() {
    const header = new HeaderView();
    const greetingScreen = new GreetingView();

    utils.showScreen(utils.newCentralContainer(header, greetingScreen));
  }

  static showRules() {
    const header = new HeaderView();
    const rulesScreen = new RulesView();

    utils.showScreen(utils.newCentralContainer(header, rulesScreen));
  }

  static showGame(namePlayel) {
    const gameModel = new QuestModel(questData, namePlayel);
    const gameScreen = new GameScreen(gameModel);

    utils.showScreen(utils.newCentralContainer(gameScreen));
    gameScreen.startGame();
  }

  static async showResult(game, isFail) {
    const header = new HeaderView();
    const finelStatistic = new FinelyStatisticView(game, isFail);

    utils.showScreen(utils.newCentralContainer(header, finelStatistic));
    try {
      questResult = await Loader.loadResult();
      finelStatistic.showScores(questResult);
    } catch (e) {
      Router.showError(e);
    }

    Loader.saveResults(game);
  }

  static showError(error) {
    const errorScreen = new ErrorView(error);
    utils.showScreen(utils.newCentralContainer(errorScreen));
  }
}
