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
};
export { CONSTANTS, STATIC_HTML };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFFdEIsTUFBTSxTQUFTLEdBQUc7SUFDaEIsV0FBVyxFQUFFO1FBQ1gsYUFBYSxFQUFFLEVBQUU7UUFDakIsU0FBUyxFQUFFLENBQUM7UUFDWixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDO1FBQ2Qsb0JBQW9CLEVBQUUsQ0FBQztLQUN4QjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE9BQU8sRUFBRSxHQUFHO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxvQkFBb0IsRUFBRTtRQUNwQixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBUztRQUNsQixPQUFPLEVBQUUsU0FBUztLQUNWO0NBQ0YsQ0FBQTtBQUdWLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE1BQU0sRUFBRTs7Ozs7Ozs7O3FCQVNXO0NBQ3BCLENBQUE7QUFFRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6InV0aWxzL2NvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHR5cGVzY3JpcHQgZGV2IGRpdmVcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBPUFRJT05fR0FNRToge1xuICAgIE1BWF9RVUVTVElPTlM6IDEwLFxuICAgIE1BWF9MSVZFUzogMyxcbiAgICBUSU1FX0ZPUl9RVUVTVElPTjogMzAwMCxcbiAgICBTVEFSVF9MRVZFTDogMCxcbiAgICBNQVhfQ0hBUl9OQU1FX0FNT1VOVDogNixcbiAgfSxcbiAgTElCUkFSWV9BTlNXRVJfUE9JTlQ6IHtcbiAgICBjb3JyZWN0OiAxMDAsXG4gICAgZmFzdDogNTAsXG4gICAgc2xvdzogLTUwLFxuICAgIGJhbGFuY2VMaXZlUG9pbnQ6IDUwLFxuICAgIHdyb25nOiAwLFxuICAgIHVua25vd246IDAsXG4gIH0sXG4gIExJQlJBUllfVFlQRV9BTlNXRVJTOiB7XG4gICAgd3Jvbmc6ICd3cm9uZycsXG4gICAgc2xvdzogJ3Nsb3cnLFxuICAgIGZhc3Q6ICdmYXN0JyxcbiAgICBjb3JyZWN0OiAnY29ycmVjdCcsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxuICB9IGFzIGNvbnN0LFxufSBhcyBjb25zdFxuXG5cbmNvbnN0IFNUQVRJQ19IVE1MID0ge1xuICBGT09URVI6IGA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2h0bWxhY2FkZW15LnJ1XCIgY2xhc3M9XCJzb2NpYWwtbGluayBzb2NpYWwtbGluay0tYWNhZGVteVwiPkhUTUwgQWNhZGVteTwvYT5cbiAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX21hZGUtaW5cIj7QodC00LXQu9Cw0L3QviDQsiA8YSBocmVmPVwiaHR0cHM6Ly9odG1sYWNhZGVteS5ydVwiIGNsYXNzPVwiZm9vdGVyX19saW5rXCI+SFRNTCBBY2FkZW15PC9hPiAmY29weTsgMjAxNjwvc3Bhbj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaHRtbGFjYWRlbXlfcnVcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdHdcIj7QotCy0LjRgtGC0LXRgDwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9odG1sYWNhZGVteS9cIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0taW5zXCI+0JjQvdGB0YLQsNCz0YDQsNC8PC9hPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tZmJcIj7QpNGN0LnRgdCx0YPQujwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20vaHRtbGFjYWRlbXlcIiBjbGFzcz1cInNvY2lhbC1saW5rICBzb2NpYWwtbGluay0tdmtcIj7QktC60L7QvdGC0LDQutGC0LU8L2E+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Zvb3Rlcj5gLFxufVxuXG5leHBvcnQgeyBDT05TVEFOVFMsIFNUQVRJQ19IVE1MIH07XG4iXX0=