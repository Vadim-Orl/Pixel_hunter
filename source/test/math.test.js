
import { expect } from 'chai';
import {
  INITIAL_GAME, changeLevel, decLives,
} from '../js/utils/bisnesFunction.js';
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
    expect(changeLevel(INITIAL_GAME, 1).level).to.equal(1);
    expect(changeLevel(INITIAL_GAME, 12)).to.equal(0);
    expect(changeLevel(INITIAL_GAME, 2).level).to.equal(2);
  });
  it('should not allow set negative values', () => {
    expect(changeLevel(INITIAL_GAME, -1)).to.equal(0);
  })
})

describe('Check update lives of the game', () => {
  it('should update live of the game', () => {
    let newGame = {...INITIAL_GAME, lives: 12}
    expect(decLives(newGame).lives).to.equal(11);

    newGame = {...INITIAL_GAME, lives: 2}
    expect(decLives(newGame).lives).to.equal(1);
  });
  it ('should not allow set negative values', () => {
    let newGame = {...INITIAL_GAME, lives: 1}
    expect(decLives(newGame).lives).to.equal(0);
  })
  it ('should not allow set null values', () => {
    let newGame = {...INITIAL_GAME, lives: 0}
    expect(decLives(newGame)).to.equal(0);
  })
})
