import { CONSTANTS } from "./constants.js";

const INITIAL_GAME = Object.freeze({
  results: Object.freeze(new Array(CONSTANTS.OPTION_GAME.MAX_QUESTIONS).fill(CONSTANTS.LIBRARY_TYPE_ANSWERS.unknown)),
  level: CONSTANTS.OPTION_GAME.START_LEVEL,
  lives: CONSTANTS.OPTION_GAME.MAX_LIVES,
  time: CONSTANTS.OPTION_GAME.TIME_FOR_QUESTION,
  questions: CONSTANTS.OPTION_GAME.MAX_QUESTIONS
});

const resultGame = (game) => {
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
}

const decLives = (game) => {
  if (game.lives < 1) {
    return 0;
  }
  console.log(game)
  const newLives = game.lives - 1;
  console.log('hello ' + newLives)

  const newGame = { ...game, lives: newLives };
  return newGame;
}

const tick = (game) => {
  const newGame = { ...game };
  newGame.time -= 1;
  return newGame;
}

const answer = (game, isCorrectAnsw, timeAnswer) => {
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


//# sourceMappingURL=bisnesFunction.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy9iaXNuZXNGdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgSU5JVElBTF9HQU1FID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHJlc3VsdHM6IE9iamVjdC5mcmVlemUobmV3IEFycmF5KENPTlNUQU5UUy5PUFRJT05fR0FNRS5NQVhfUVVFU1RJT05TKS5maWxsKENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy51bmtub3duKSksXG4gIGxldmVsOiBDT05TVEFOVFMuT1BUSU9OX0dBTUUuU1RBUlRfTEVWRUwsXG4gIGxpdmVzOiBDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX0xJVkVTLFxuICB0aW1lOiBDT05TVEFOVFMuT1BUSU9OX0dBTUUuVElNRV9GT1JfUVVFU1RJT04sXG4gIHF1ZXN0aW9uczogQ09OU1RBTlRTLk9QVElPTl9HQU1FLk1BWF9RVUVTVElPTlNcbn0pO1xuXG5jb25zdCByZXN1bHRHYW1lID0gKGdhbWUpID0+IHtcbiAgaWYgKGdhbWUucmVzdWx0cy5sZW5ndGggPCBDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX1FVRVNUSU9OUykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIFxuICBsZXQgc3VtbSA9IDA7XG4gIGdhbWUucmVzdWx0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIHN1bW0gKz0gQ09OU1RBTlRTLkxJQlJBUllfQU5TV0VSX1BPSU5UW2VsZW1lbnRdO1xuICAgIGVsZW1lbnQgPT09IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5mYXN0fHwgZWxlbWVudCA9PT0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLnNsb3cgPyBzdW1tICs9IDEwMCA6IHN1bW07XG4gIH0pO1xuXG4gIHN1bW0gKz0gZ2FtZS5saXZlcyAqIENPTlNUQU5UUy5MSUJSQVJZX0FOU1dFUl9QT0lOVC5iYWxhbmNlTGl2ZVBvaW50O1xuXG4gIHJldHVybiBzdW1tO1xufVxuXG5cbmNvbnN0IGNoYW5nZUxldmVsID0gKGdhbWUsIGxldmVsKSA9PiB7XG4gIGlmIChsZXZlbCA8IDApIHtcbiAgICByZXR1cm4gZ2FtZS5sZXZlbDtcbiAgfVxuXG4gIGlmIChsZXZlbCA+PSBnYW1lLnF1ZXN0aW9ucykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgbmV3TGV2ZWwgPSBsZXZlbDtcblxuICBjb25zdCBuZXdHYW1lID0geyAuLi5nYW1lLCBsZXZlbDogbmV3TGV2ZWwgfTtcbiAgcmV0dXJuIG5ld0dhbWU7XG59XG5cbmNvbnN0IGRlY0xpdmVzID0gKGdhbWUpID0+IHtcbiAgaWYgKGdhbWUubGl2ZXMgPCAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc29sZS5sb2coZ2FtZSlcbiAgY29uc3QgbmV3TGl2ZXMgPSBnYW1lLmxpdmVzIC0gMTtcbiAgY29uc29sZS5sb2coJ2hlbGxvICcgKyBuZXdMaXZlcylcblxuICBjb25zdCBuZXdHYW1lID0geyAuLi5nYW1lLCBsaXZlczogbmV3TGl2ZXMgfTtcbiAgcmV0dXJuIG5ld0dhbWU7XG59XG5cbmNvbnN0IHRpY2sgPSAoZ2FtZSkgPT4ge1xuICBjb25zdCBuZXdHYW1lID0geyAuLi5nYW1lIH07XG4gIG5ld0dhbWUudGltZSAtPSAxO1xuICByZXR1cm4gbmV3R2FtZTtcbn1cblxuY29uc3QgYW5zd2VyID0gKGdhbWUsIGlzQ29ycmVjdEFuc3csIHRpbWVBbnN3ZXIpID0+IHtcbiAgbGV0IG5ld0dhbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWUpKVxuXG4gIGlmICghaXNDb3JyZWN0QW5zdykge1xuICAgIG5ld0dhbWUucmVzdWx0c1tuZXdHYW1lLmxldmVsXSA9IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy53cm9uZztcbiAgICBuZXdHYW1lID0gZGVjTGl2ZXMobmV3R2FtZSlcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgKHRpbWVBbnN3ZXIgPD0gMyk6IHtcbiAgICAgICAgbmV3R2FtZS5yZXN1bHRzW25ld0dhbWUubGV2ZWxdID0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLmZhc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAodGltZUFuc3dlciA+IDUpOiB7XG4gICAgICAgIG5ld0dhbWUucmVzdWx0c1tuZXdHYW1lLmxldmVsXSA9IENPTlNUQU5UUy5MSUJSQVJZX1RZUEVfQU5TV0VSUy5zbG93O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbmV3R2FtZS5yZXN1bHRzW25ld0dhbWUubGV2ZWxdID0gQ09OU1RBTlRTLkxJQlJBUllfVFlQRV9BTlNXRVJTLmNvcnJlY3Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0dhbWU7XG59XG5cbmV4cG9ydCAge0lOSVRJQUxfR0FNRSwgY2hhbmdlTGV2ZWwsIGRlY0xpdmVzLCB0aWNrLCByZXN1bHRHYW1lLCBhbnN3ZXJ9XG5cbiJdLCJmaWxlIjoiYmlzbmVzRnVuY3Rpb24uanMifQ==
