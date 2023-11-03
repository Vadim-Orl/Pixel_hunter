import AbstractView from "./Abstract-view.js";
import Application from "../controller/router.js";

export default class GreetingView extends AbstractView {
  constructor() {
    super('div', { classes: ['greeting', 'central--blur'] })
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
              `
  }

  onAnswer() {
    Application.showRules();
  }

  bind() {
    this._element.querySelector('.greeting__continue').addEventListener('click', (evt) => {
      evt.preventDefault();
      this.onAnswer()
    })
  }
}

//# sourceMappingURL=Greeting-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0dyZWV0aW5nLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tIFwiLi9BYnN0cmFjdC12aWV3LmpzXCI7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4uL2NvbnRyb2xsZXIvcm91dGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyZWV0aW5nVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdkaXYnLCB7IGNsYXNzZXM6IFsnZ3JlZXRpbmcnLCAnY2VudHJhbC0tYmx1ciddIH0pXG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19sb2dvXCI+PGltZyBzcmM9XCJpbWcvbG9nb19iaWcucG5nXCIgd2lkdGg9XCIyMDFcIiBoZWlnaHQ9XCI4OVwiIGFsdD1cIlBpeGVsIEh1bnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJncmVldGluZ19fYXN0ZXJpc2tcIj4qPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jaGFsbGVuZ2VcIj5cbiAgICAgICAgICAgICAgICA8aDM+0JvRg9GH0YjQuNC1INGF0YPQtNC+0LbQvdC40LrQuC3RhNC+0YLQvtGA0LXQsNC70LjRgdGC0Ysg0LHRgNC+0YHQsNGO0YImbmJzcDvRgtC10LHQtSZuYnNwO9Cy0YvQt9C+0LIhPC9oMz5cbiAgICAgICAgICAgICAgICA8cD7Qn9GA0LDQstC40LvQsCDQuNCz0YDRiyDQv9GA0L7RgdGC0YsuPGJyPlxuICAgICAgICAgICAgICAgICAg0J3Rg9C20L3QviDQvtGC0LvQuNGH0LjRgtGMINGA0LjRgdGD0L3QvtC6Jm5ic3A70L7RgiDRhNC+0YLQvtCz0YDQsNGE0LjQuCDQuCDRgdC00LXQu9Cw0YLRjCDQstGL0LHQvtGALjxicj5cbiAgICAgICAgICAgICAgICAgINCX0LDQtNCw0YfQsCDQutCw0LbQtdGC0YHRjyDRgtGA0LjQstC40LDQu9GM0L3QvtC5LCDQvdC+INC90LUg0LTRg9C80LDQuSwg0YfRgtC+INCy0YHQtSDRgtCw0Log0L/RgNC+0YHRgtC+Ljxicj5cbiAgICAgICAgICAgICAgICAgINCk0L7RgtC+0YDQtdCw0LvQuNC30Lwg0L7QsdC80LDQvdGH0LjQsiDQuCDQutC+0LLQsNGA0LXQvS48YnI+XG4gICAgICAgICAgICAgICAgICDQn9C+0LzQvdC4LCBcdTAwMDPQs9C70LDQstC90L7QtSDigJQg0YHQvNC+0YLRgNC10YLRjCDQvtGH0LXQvdGMINCy0L3QuNC80LDRgtC10LvRjNC90L4uPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nX19jb250aW51ZVwiPjxzcGFuPjxpbWcgc3JjPVwiaW1nL2Fycm93X3JpZ2h0LnN2Z1wiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIGFsdD1cIk5leHRcIj48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgfVxuXG4gIG9uQW5zd2VyKCkge1xuICAgIEFwcGxpY2F0aW9uLnNob3dSdWxlcygpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZ19fY29udGludWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5vbkFuc3dlcigpXG4gICAgfSlcbiAgfVxufVxuIl0sImZpbGUiOiJHcmVldGluZy12aWV3LmpzIn0=
