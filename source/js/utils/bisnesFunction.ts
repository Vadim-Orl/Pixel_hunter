import { CONSTANTS } from "./constants.js";

export interface IInitialGame {
   results?,
   level: number,
   lives: number,
   time: number,
   questions: number
}


const INITIAL_GAME: IInitialGame = Object.freeze({
  results: Object.freeze(new Array(CONSTANTS.OPTION_GAME.MAX_QUESTIONS).fill(CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)),
  level: CONSTANTS.OPTION_GAME.START_LEVEL,
  lives: CONSTANTS.OPTION_GAME.MAX_LIVES,
  time: CONSTANTS.OPTION_GAME.TIME_FOR_QUESTION,
  questions: CONSTANTS.OPTION_GAME.MAX_QUESTIONS
});

const resultGame = (game: IInitialGame) => {
  if (game.results.length < CONSTANTS.OPTION_GAME.MAX_QUESTIONS) {
    return -1
  }

  let summ = 0;
  game.results.forEach(element => {
    summ += CONSTANTS.LIBRARY_ANSWER_POINT[element];
    element === CONSTANTS.LIBRARY_TYPE_ANSWERS.fast|| element === CONSTANTS.LIBRARY_TYPE_ANSWERS.slow ? summ += 100 : summ;
  });

  summ += game.lives * CONSTANTS.LIBRARY_ANSWER_POINT.balanceLivePoint;

  return summ;
}


const changeLevel = (game: IInitialGame, level: number) => {
  if (level < 0) {
    return game.level;
  }

  if (level >= game.questions) {
    return 0;
  }

  const newLevel = level;

  const newGame = { ...game, level: newLevel };
  return newGame;
}

const decLives = (game: IInitialGame) => {
  if (game.lives < 1) {
    return 0;
  }
  console.log(game)
  const newLives = game.lives - 1;
  console.log('hello ' + newLives)

  const newGame = { ...game, lives: newLives };
  return newGame;
}

const tick = (game: IInitialGame) => {
  const newGame = { ...game };
  newGame.time -= 1;
  return newGame;
}

const answer = (game: IInitialGame, isCorrectAnsw: boolean, timeAnswer: number) => {
  let newGame = JSON.parse(JSON.stringify(game))

  if (!isCorrectAnsw) {
    newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.wrong;
    newGame = decLives(newGame)
  } else {
    switch (true) {
      case (timeAnswer <= 3): {
        newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.fast;
        break;
      }
      case (timeAnswer > 5): {
        newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.slow;
        break;
      }
      default: {
        newGame.results[newGame.level] = CONSTANTS.LIBRARY_TYPE_ANSWERS.correct;
      }
    }
  }

  return newGame;
}

export  {INITIAL_GAME, changeLevel, decLives, tick, resultGame, answer}

