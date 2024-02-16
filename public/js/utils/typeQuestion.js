const nodeGameOptions = (option, typeQuestion) => {
    return `<div class="game__option">
          <img src="${option.src}" alt="${option.alt}" >
           ${nodeGameAnswer(option.inputName)}
          </div>`;
};
const nodeGameAnswer = (inputName) => {
    if (inputName) {
        return `<label class="game__answer game__answer--photo">
              <input name="${inputName}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="${inputName}" type="radio" value="paint">
              <span>Рисунок</span>
            </label>`;
    }
    // return ''
};
const typeQuestion = {
    singleQuestion: (options) => {
        return `<form class="game__content game__content--wide"">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`;
    },
    doubleQuestion: (options) => {
        return `<form class="game__content">
                ${options.map((el) => nodeGameOptions(el, 'singleQuestion')).join('')}
                </form>`;
    },
    tripleQuestion: (options) => {
        return `<form class="game__content game__content--triple">
                ${options.map((el) => nodeGameOptions(el, 'tripleQuestion')).join('')}
                </form>`;
    },
};
export default typeQuestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3R5cGVRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQVcsRUFBRSxZQUFpQixFQUFFLEVBQUU7SUFDekQsT0FBTztzQkFDYSxNQUFNLENBQUMsR0FBRyxVQUFVLE1BQU0sQ0FBQyxHQUFHO2FBQ3ZDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUM1QixDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBYyxFQUFFLEVBQUU7SUFDeEMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU87NkJBQ2tCLFNBQVM7Ozs7NkJBSVQsU0FBUzs7cUJBRWpCLENBQUE7SUFDbkIsQ0FBQztJQUNELFlBQVk7QUFDZCxDQUFDLENBQUE7QUFFRCxNQUFNLFlBQVksR0FBRztJQUNuQixjQUFjLEVBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRTtRQUMvQixPQUFPO2tCQUNPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ2xFLENBQUE7SUFDdEIsQ0FBQztJQUVELGNBQWMsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQy9CLE9BQU87a0JBQ08sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQU0sRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDakUsQ0FBQTtJQUN0QixDQUFDO0lBRUQsY0FBYyxFQUFFLENBQUMsT0FBWSxFQUFFLEVBQUU7UUFDL0IsT0FBTztrQkFDTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBTSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUNqRSxDQUFBO0lBQ3RCLENBQUM7Q0FDRixDQUFBO0FBRUQsZUFBZSxZQUFZLENBQUMiLCJmaWxlIjoidXRpbHMvdHlwZVF1ZXN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUdhbWVPcHRpb25zID0gKG9wdGlvbjogYW55LCB0eXBlUXVlc3Rpb246IGFueSkgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7b3B0aW9uLnNyY31cIiBhbHQ9XCIke29wdGlvbi5hbHR9XCIgPlxuICAgICAgICAgICAke25vZGVHYW1lQW5zd2VyKG9wdGlvbi5pbnB1dE5hbWUpfVxuICAgICAgICAgIDwvZGl2PmBcbn1cblxuY29uc3Qgbm9kZUdhbWVBbnN3ZXIgPSAoaW5wdXROYW1lOiBhbnkpID0+IHtcbiAgaWYgKGlucHV0TmFtZSkge1xuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiZ2FtZV9fYW5zd2VyIGdhbWVfX2Fuc3dlci0tcGhvdG9cIj5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCIke2lucHV0TmFtZX1cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBob3RvXCI+XG4gICAgICAgICAgICAgIDxzcGFuPtCk0L7RgtC+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBhaW50XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiJHtpbnB1dE5hbWV9XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwYWludFwiPlxuICAgICAgICAgICAgICA8c3Bhbj7QoNC40YHRg9C90L7Qujwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+YFxuICB9XG4gIC8vIHJldHVybiAnJ1xufVxuXG5jb25zdCB0eXBlUXVlc3Rpb24gPSB7XG4gIHNpbmdsZVF1ZXN0aW9uOiAob3B0aW9uczogYW55KSA9PiB7XG4gICAgcmV0dXJuIGA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgZ2FtZV9fY29udGVudC0td2lkZVwiXCI+XG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1hcCgoZWw6IGFueSkgPT4gbm9kZUdhbWVPcHRpb25zKGVsLCAnc2luZ2xlUXVlc3Rpb24nKSkuam9pbignJyl9XG4gICAgICAgICAgICAgICAgPC9mb3JtPmBcbiAgfSxcblxuICBkb3VibGVRdWVzdGlvbjogKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1hcCgoZWw6YW55KSA9PiBub2RlR2FtZU9wdGlvbnMoZWwsICdzaW5nbGVRdWVzdGlvbicpKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+YFxuICB9LFxuXG4gIHRyaXBsZVF1ZXN0aW9uOiAob3B0aW9uczogYW55KSA9PiB7XG4gICAgcmV0dXJuIGA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnQgZ2FtZV9fY29udGVudC0tdHJpcGxlXCI+XG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLm1hcCgoZWw6YW55KSA9PiBub2RlR2FtZU9wdGlvbnMoZWwsICd0cmlwbGVRdWVzdGlvbicpKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+YFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB0eXBlUXVlc3Rpb247XG4iXX0=