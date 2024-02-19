const nodeGameOptions = (option) => {
    return `<div class="game__option">
          <img src="${option.src}" alt="${option.alt}" >
           ${option.inputName && nodeGameAnswer(option.inputName)}
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
    return '';
};
const typeQuestion = {
    singleQuestion: (options) => {
        return `<form class="game__content game__content--wide"">
                ${options.map((el) => nodeGameOptions(el)).join('')}
                </form>`;
    },
    doubleQuestion: (options) => {
        return `<form class="game__content">
                ${options.map((el) => nodeGameOptions(el)).join('')}
                </form>`;
    },
    tripleQuestion: (options) => {
        return `<form class="game__content game__content--triple">
                ${options.map((el) => nodeGameOptions(el)).join('')}
                </form>`;
    },
};
export default typeQuestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3R5cGVRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWUsRUFBRSxFQUFFO0lBQzFDLE9BQU87c0JBQ2EsTUFBTSxDQUFDLEdBQUcsVUFBVSxNQUFNLENBQUMsR0FBRzthQUN2QyxNQUFNLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUNoRCxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBeUIsRUFBRSxFQUFFO0lBQ25ELElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxPQUFPOzZCQUNrQixTQUFTOzs7OzZCQUlULFNBQVM7O3FCQUVqQixDQUFBO0lBQ25CLENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQTtBQUNYLENBQUMsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFHO0lBQ25CLGNBQWMsRUFBRSxDQUFDLE9BQWtCLEVBQUUsRUFBRTtRQUNyQyxPQUFPO2tCQUNPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFXLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3BELENBQUE7SUFDdEIsQ0FBQztJQUVELGNBQWMsRUFBRSxDQUFDLE9BQWtCLEVBQUUsRUFBRTtRQUNyQyxPQUFPO2tCQUNPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFXLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3BELENBQUE7SUFDdEIsQ0FBQztJQUVELGNBQWMsRUFBRSxDQUFDLE9BQWtCLEVBQUUsRUFBRTtRQUNyQyxPQUFPO2tCQUNPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFXLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3BELENBQUE7SUFDdEIsQ0FBQztDQUNGLENBQUE7QUFFRCxlQUFlLFlBQVksQ0FBQyIsImZpbGUiOiJ1dGlscy90eXBlUXVlc3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJT3B0aW9uLCBJVHlwZUlucHV0TmFtZSB9IGZyb20gXCIuLi90eXBlcy90eXBlcy5qc1wiXG5cblxuY29uc3Qgbm9kZUdhbWVPcHRpb25zID0gKG9wdGlvbjogSU9wdGlvbikgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYW1lX19vcHRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7b3B0aW9uLnNyY31cIiBhbHQ9XCIke29wdGlvbi5hbHR9XCIgPlxuICAgICAgICAgICAke29wdGlvbi5pbnB1dE5hbWUgJiYgbm9kZUdhbWVBbnN3ZXIob3B0aW9uLmlucHV0TmFtZSl9XG4gICAgICAgICAgPC9kaXY+YFxufVxuXG5jb25zdCBub2RlR2FtZUFuc3dlciA9IChpbnB1dE5hbWU6IElUeXBlSW5wdXROYW1lKSA9PiB7XG4gIGlmIChpbnB1dE5hbWUpIHtcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImdhbWVfX2Fuc3dlciBnYW1lX19hbnN3ZXItLXBob3RvXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiJHtpbnB1dE5hbWV9XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgICA8c3Bhbj7QpNC+0YLQvjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJnYW1lX19hbnN3ZXIgZ2FtZV9fYW5zd2VyLS1wYWludFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIiR7aW5wdXROYW1lfVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicGFpbnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4+0KDQuNGB0YPQvdC+0Lo8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPmBcbiAgfVxuICByZXR1cm4gJydcbn1cblxuY29uc3QgdHlwZVF1ZXN0aW9uID0ge1xuICBzaW5nbGVRdWVzdGlvbjogKG9wdGlvbnM6IElPcHRpb25bXSkgPT4ge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50IGdhbWVfX2NvbnRlbnQtLXdpZGVcIlwiPlxuICAgICAgICAgICAgICAgICR7b3B0aW9ucy5tYXAoKGVsOiBJT3B0aW9uKSA9PiBub2RlR2FtZU9wdGlvbnMoZWwpKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+YFxuICB9LFxuXG4gIGRvdWJsZVF1ZXN0aW9uOiAob3B0aW9uczogSU9wdGlvbltdKSA9PiB7XG4gICAgcmV0dXJuIGA8Zm9ybSBjbGFzcz1cImdhbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAke29wdGlvbnMubWFwKChlbDogSU9wdGlvbikgPT4gbm9kZUdhbWVPcHRpb25zKGVsKSkuam9pbignJyl9XG4gICAgICAgICAgICAgICAgPC9mb3JtPmBcbiAgfSxcblxuICB0cmlwbGVRdWVzdGlvbjogKG9wdGlvbnM6IElPcHRpb25bXSkgPT4ge1xuICAgIHJldHVybiBgPGZvcm0gY2xhc3M9XCJnYW1lX19jb250ZW50IGdhbWVfX2NvbnRlbnQtLXRyaXBsZVwiPlxuICAgICAgICAgICAgICAgICR7b3B0aW9ucy5tYXAoKGVsOiBJT3B0aW9uKSA9PiBub2RlR2FtZU9wdGlvbnMoZWwpKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+YFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCB0eXBlUXVlc3Rpb247XG4iXX0=