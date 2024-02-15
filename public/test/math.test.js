'use strict';

var chai = require('chai');

const CONSTANTS = {
  OPTION_GAME: {
    MAX_QUESTIONS: 10,
    MAX_LIVES: 3,
    TIME_FOR_QUESTION: 3000,
    START_LEVEL: 0,
    MAX_CHAR_NAME_AMOUNT: 6,
  },
  LIBRARY_ANSWER_POINT: {
    correct: 100,
    fast: 50,
    slow: -50,
    balanceLivePoint: 50,
    wrong: 0,
    unknown: 0,
  },
  LIBRARY_TYPE_ANSWERS: {
    wrong: 'wrong',
    slow: 'slow',
    fast: 'fast',
    correct: 'correct',
    unknown: 'unknown',
  },
};

const INITIAL_GAME = Object.freeze({
  results: Object.freeze(new Array(CONSTANTS.OPTION_GAME.MAX_QUESTIONS).fill(CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)),
  level: CONSTANTS.OPTION_GAME.START_LEVEL,
  lives: CONSTANTS.OPTION_GAME.MAX_LIVES,
  time: CONSTANTS.OPTION_GAME.TIME_FOR_QUESTION,
  questions: CONSTANTS.OPTION_GAME.MAX_QUESTIONS
});


const changeLevel = (game, level) => {
  if (level < 0) {
    return game.level;
  }

  if (level >= game.questions) {
    return 0;
  }

  const newLevel = level;

  const newGame = { ...game, level: newLevel };
  return newGame;
};

const decLives = (game) => {
  if (game.lives < 1) {
    return 0;
  }
  console.log(game);
  const newLives = game.lives - 1;
  console.log('hello ' + newLives);

  const newGame = { ...game, lives: newLives };
  return newGame;
};

// import mockGameAnswers from '../utils/bisnesFunction.js';

// describe('Проверка результата', () => {
//   it('Если игрок ответил меньше, чем на 10 вопросов', () => {
//     expect(resultGame(mockGameAnswers[0].results)).to.equal(-1);
//   })
//   it('Если игрок ответил на все вопросы и не быстро, и не медленно, и у него остались все жизни', () => {
//     expect(resultGame(mockGameAnswers[2].results, 3)).to.equal(1150);
//   })
//   it('Если игрок ответил на все вопросы. 4 fast, 1 slow, 2 wrong, 2 unknow', () => {
//     expect(resultGame(mockGameAnswers[1].results, 2)).to.equal(950);
//   })
// })


describe('Check update level of the game', () => {
  it('should update level of the game', () => {
    chai.expect(changeLevel(INITIAL_GAME, 1).level).to.equal(1);
    chai.expect(changeLevel(INITIAL_GAME, 12)).to.equal(0);
    chai.expect(changeLevel(INITIAL_GAME, 2).level).to.equal(2);
  });
  it('should not allow set negative values', () => {
    chai.expect(changeLevel(INITIAL_GAME, -1)).to.equal(0);
  });
});

describe('Check update lives of the game', () => {
  it('should update live of the game', () => {
    let newGame = {...INITIAL_GAME, lives: 12};
    chai.expect(decLives(newGame).lives).to.equal(11);

    newGame = {...INITIAL_GAME, lives: 2};
    chai.expect(decLives(newGame).lives).to.equal(1);
  });
  it ('should not allow set negative values', () => {
    let newGame = {...INITIAL_GAME, lives: 1};
    chai.expect(decLives(newGame).lives).to.equal(0);
  });
  it ('should not allow set null values', () => {
    let newGame = {...INITIAL_GAME, lives: 0};
    chai.expect(decLives(newGame)).to.equal(0);
  });
});
