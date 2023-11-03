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

//# sourceMappingURL=constants.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09OU1RBTlRTID0ge1xuICBPUFRJT05fR0FNRToge1xuICAgIE1BWF9RVUVTVElPTlM6IDEwLFxuICAgIE1BWF9MSVZFUzogMyxcbiAgICBUSU1FX0ZPUl9RVUVTVElPTjogMzAwMCxcbiAgICBTVEFSVF9MRVZFTDogMCxcbiAgICBNQVhfQ0hBUl9OQU1FX0FNT1VOVDogNixcbiAgfSxcbiAgTElCUkFSWV9BTlNXRVJfUE9JTlQ6IHtcbiAgICBjb3JyZWN0OiAxMDAsXG4gICAgZmFzdDogNTAsXG4gICAgc2xvdzogLTUwLFxuICAgIGJhbGFuY2VMaXZlUG9pbnQ6IDUwLFxuICAgIHdyb25nOiAwLFxuICAgIHVua25vd246IDAsXG4gIH0sXG4gIExJQlJBUllfVFlQRV9BTlNXRVJTOiB7XG4gICAgd3Jvbmc6ICd3cm9uZycsXG4gICAgc2xvdzogJ3Nsb3cnLFxuICAgIGZhc3Q6ICdmYXN0JyxcbiAgICBjb3JyZWN0OiAnY29ycmVjdCcsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxuICB9LFxufTtcblxuY29uc3QgU1RBVElDX0hUTUwgPSB7XG4gIEZPT1RFUjogYDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaHRtbGFjYWRlbXkucnVcIiBjbGFzcz1cInNvY2lhbC1saW5rIHNvY2lhbC1saW5rLS1hY2FkZW15XCI+SFRNTCBBY2FkZW15PC9hPlxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlcl9fbWFkZS1pblwiPtCh0LTQtdC70LDQvdC+INCyIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj5IVE1MIEFjYWRlbXk8L2E+ICZjb3B5OyAyMDE2PC9zcGFuPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9odG1sYWNhZGVteV9ydVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS10d1wiPtCi0LLQuNGC0YLQtdGAPC9hPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h0bWxhY2FkZW15L1wiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1pbnNcIj7QmNC90YHRgtCw0LPRgNCw0Lw8L2E+XG4gICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS1mYlwiPtCk0Y3QudGB0LHRg9C6PC9hPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS9odG1sYWNhZGVteVwiIGNsYXNzPVwic29jaWFsLWxpbmsgIHNvY2lhbC1saW5rLS12a1wiPtCS0LrQvtC90YLQsNC60YLQtTwvYT5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZm9vdGVyPmAsXG59XG5cbmV4cG9ydCB7IENPTlNUQU5UUywgU1RBVElDX0hUTUwgfTtcbiJdLCJmaWxlIjoiY29uc3RhbnRzLmpzIn0=
