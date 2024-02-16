// typescript dev dive

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
  } as const,
};
 export type TLIBRARY_TYPE_ANSWERS = typeof CONSTANTS.LIBRARY_TYPE_ANSWERS


const STATIC_HTML = {
  FOOTER: `<footer class="footer">
           <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
           <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
           <div class="footer__social-links">
             <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
             <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
             <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
             <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
           </div>
           </footer>`,
}

export { CONSTANTS, STATIC_HTML };
