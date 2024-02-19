import AbstractView from "./Abstract-view.js";
import Application from "../controller/router.js";
export default class GreetingView extends AbstractView {
    constructor() {
        super('div', ['greeting', 'central--blur']);
    }
    get template() {
        return `
              <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
              <h1 class="greeting__asterisk">*</h1>
              <div class="greeting__challenge">
                <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
                <p>Правила игры просты.<br>
                  Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
                  Задача кажется тривиальной, но не думай, что все так просто.<br>
                  Фотореализм обманчив и коварен.<br>
                  Помни, главное — смотреть очень внимательно.</p>
              </div>
              <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
              `;
    }
    onAnswer() {
        Application.showRules();
    }
    bind() {
        this._element?.querySelector('.greeting__continue')?.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.onAnswer();
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvR3JlZXRpbmctdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxNQUFNLENBQUMsT0FBTyxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBQ3BEO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPOzs7Ozs7Ozs7Ozs7ZUFZSSxDQUFBO0lBQ2IsQ0FBQztJQUVELFFBQVE7UUFDTixXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JGLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0YiLCJmaWxlIjoidmlldy9HcmVldGluZy12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tIFwiLi9BYnN0cmFjdC12aWV3LmpzXCI7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4uL2NvbnRyb2xsZXIvcm91dGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWV0aW5nVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdkaXYnLCBbJ2dyZWV0aW5nJywgJ2NlbnRyYWwtLWJsdXInXSlcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2xvZ29cIj48aW1nIHNyYz1cImltZy9sb2dvX2JpZy5wbmdcIiB3aWR0aD1cIjIwMVwiIGhlaWdodD1cIjg5XCIgYWx0PVwiUGl4ZWwgSHVudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImdyZWV0aW5nX19hc3Rlcmlza1wiPio8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NoYWxsZW5nZVwiPlxuICAgICAgICAgICAgICAgIDxoMz7Qm9GD0YfRiNC40LUg0YXRg9C00L7QttC90LjQutC4LdGE0L7RgtC+0YDQtdCw0LvQuNGB0YLRiyDQsdGA0L7RgdCw0Y7RgiZuYnNwO9GC0LXQsdC1Jm5ic3A70LLRi9C30L7QsiE8L2gzPlxuICAgICAgICAgICAgICAgIDxwPtCf0YDQsNCy0LjQu9CwINC40LPRgNGLINC/0YDQvtGB0YLRiy48YnI+XG4gICAgICAgICAgICAgICAgICDQndGD0LbQvdC+INC+0YLQu9C40YfQuNGC0Ywg0YDQuNGB0YPQvdC+0LombmJzcDvQvtGCINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INGB0LTQtdC70LDRgtGMINCy0YvQsdC+0YAuPGJyPlxuICAgICAgICAgICAgICAgICAg0JfQsNC00LDRh9CwINC60LDQttC10YLRgdGPINGC0YDQuNCy0LjQsNC70YzQvdC+0LksINC90L4g0L3QtSDQtNGD0LzQsNC5LCDRh9GC0L4g0LLRgdC1INGC0LDQuiDQv9GA0L7RgdGC0L4uPGJyPlxuICAgICAgICAgICAgICAgICAg0KTQvtGC0L7RgNC10LDQu9C40LfQvCDQvtCx0LzQsNC90YfQuNCyINC4INC60L7QstCw0YDQtdC9Ljxicj5cbiAgICAgICAgICAgICAgICAgINCf0L7QvNC90LgsIFx1MDAwM9Cz0LvQsNCy0L3QvtC1IOKAlCDRgdC80L7RgtGA0LXRgtGMINC+0YfQtdC90Ywg0LLQvdC40LzQsNGC0LXQu9GM0L3Qvi48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdfX2NvbnRpbnVlXCI+PHNwYW4+PGltZyBzcmM9XCJpbWcvYXJyb3dfcmlnaHQuc3ZnXCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgYWx0PVwiTmV4dFwiPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICB9XG5cbiAgb25BbnN3ZXIoKSB7XG4gICAgQXBwbGljYXRpb24uc2hvd1J1bGVzKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgICAgdGhpcy5fZWxlbWVudD8ucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nX19jb250aW51ZScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25BbnN3ZXIoKVxuICAgICAgfSlcbiAgfVxufVxuIl19