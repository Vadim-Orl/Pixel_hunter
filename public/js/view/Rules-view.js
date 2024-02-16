import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';
import Application from '../controller/router.js';
export default class RulesView extends AbstractView {
    constructor() {
        super('div', ['rules']);
    }
    get template() {
        return `
             <h1 class="rules__title">Правила</h1>
             <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
               src="img/photo_icon.png" width="16" height="16"> или рисунок <img
               src="img/paint_icon.png" width="16" height="16" alt="">.<br>
               Фотографиями или рисунками могут быть оба изображения.<br>
               На каждую попытку отводится 30 секунд.<br>
               Ошибиться можно не более 3 раз.<br>
               <br>
               Готовы?
             </p>
             <form class="rules__form">
               <input class="rules__input" type="text" placeholder="Ваше Имя" required>
               <button class="rules__button  continue" type="submit" disabled>Go!</button>
             </form>
              `;
    }
    onAnswer(inputName) {
        Application.showGame(inputName);
    }
    bind() {
        const rulesForm = this._element?.querySelector('.rules__form');
        const inputName = rulesForm?.querySelector('.rules__input');
        const btnSubmitForm = rulesForm?.querySelector('button');
        const onNameInputValid = (evt) => {
            evt.stopPropagation();
            if (inputName) {
                inputName.setCustomValidity('');
                if (inputName.value.length > CONSTANTS.OPTION_GAME.MAX_CHAR_NAME_AMOUNT) {
                    inputName.setCustomValidity(`Имя не должно быть больше чем ${CONSTANTS.OPTION_GAME.MAX_CHAR_NAME_AMOUNT} символов`);
                }
                if (inputName.value.length <= 0) {
                    inputName.setCustomValidity('Заполните поле');
                }
                if (inputName.validity.customError) {
                    inputName.style.outlineColor = 'red';
                    if (btnSubmitForm)
                        btnSubmitForm.disabled = true;
                }
                else {
                    inputName.style.outlineColor = '';
                    if (btnSubmitForm)
                        btnSubmitForm.disabled = false;
                }
                inputName.reportValidity();
                inputName.addEventListener('input', onNameInputValid);
                if (rulesForm) {
                    rulesForm.onsubmit = () => {
                        return false;
                    };
                }
                btnSubmitForm?.addEventListener('click', () => {
                    this.onAnswer(inputName.value);
                });
            }
        };
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvUnVsZXMtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFDakQsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsWUFBWTtJQUNqRDtRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7ZUFlSSxDQUFBO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFjO1FBQ3JCLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLFNBQVMsR0FBc0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEcsTUFBTSxTQUFTLEdBQXdDLFNBQVMsRUFBRSxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDaEcsTUFBTSxhQUFhLEdBQUcsU0FBUyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RCxNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7WUFDdEMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVoQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDeEUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlDQUFpQyxTQUFTLENBQUMsV0FBVyxDQUFDLG9CQUFvQixXQUFXLENBQUMsQ0FBQztnQkFDdEgsQ0FBQztnQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNoQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDckMsSUFBSSxhQUFhO3dCQUFFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFJLGFBQWE7d0JBQUUsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUUzQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUE7Z0JBRXJELElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ2QsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7d0JBQ3hCLE9BQU8sS0FBSyxDQUFBO29CQUNkLENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUVELGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1FBQ0gsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNGIiwiZmlsZSI6InZpZXcvUnVsZXMtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcydcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuLi9jb250cm9sbGVyL3JvdXRlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVzVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdkaXYnLCBbJ3J1bGVzJ10pXG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgICA8aDEgY2xhc3M9XCJydWxlc19fdGl0bGVcIj7Qn9GA0LDQstC40LvQsDwvaDE+XG4gICAgICAgICAgICAgPHAgY2xhc3M9XCJydWxlc19fZGVzY3JpcHRpb25cIj7Qo9Cz0LDQtNCw0LkgMTAg0YDQsNC3INC00LvRjyDQutCw0LbQtNC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINGE0L7RgtC+IDxpbWdcbiAgICAgICAgICAgICAgIHNyYz1cImltZy9waG90b19pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPiDQuNC70Lgg0YDQuNGB0YPQvdC+0LogPGltZ1xuICAgICAgICAgICAgICAgc3JjPVwiaW1nL3BhaW50X2ljb24ucG5nXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgYWx0PVwiXCI+Ljxicj5cbiAgICAgICAgICAgICAgINCk0L7RgtC+0LPRgNCw0YTQuNGP0LzQuCDQuNC70Lgg0YDQuNGB0YPQvdC60LDQvNC4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7QsdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y8uPGJyPlxuICAgICAgICAgICAgICAg0J3QsCDQutCw0LbQtNGD0Y4g0L/QvtC/0YvRgtC60YMg0L7RgtCy0L7QtNC40YLRgdGPIDMwINGB0LXQutGD0L3QtC48YnI+XG4gICAgICAgICAgICAgICDQntGI0LjQsdC40YLRjNGB0Y8g0LzQvtC20L3QviDQvdC1INCx0L7Qu9C10LUgMyDRgNCw0LcuPGJyPlxuICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAg0JPQvtGC0L7QstGLP1xuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInJ1bGVzX19mb3JtXCI+XG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJydWxlc19faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0JjQvNGPXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicnVsZXNfX2J1dHRvbiAgY29udGludWVcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ+R28hPC9idXR0b24+XG4gICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICBgXG4gIH1cblxuICBvbkFuc3dlcihpbnB1dE5hbWU6IGFueSkge1xuICAgIEFwcGxpY2F0aW9uLnNob3dHYW1lKGlucHV0TmFtZSk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGNvbnN0IHJ1bGVzRm9ybTogSFRNTEZvcm1FbGVtZW50fCB1bmRlZmluZWQgfCBudWxsID0gdGhpcy5fZWxlbWVudD8ucXVlcnlTZWxlY3RvcignLnJ1bGVzX19mb3JtJyk7XG4gICAgY29uc3QgaW5wdXROYW1lOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbCA9IHJ1bGVzRm9ybT8ucXVlcnlTZWxlY3RvcignLnJ1bGVzX19pbnB1dCcpXG4gICAgY29uc3QgYnRuU3VibWl0Rm9ybSA9IHJ1bGVzRm9ybT8ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbiAgICBjb25zdCBvbk5hbWVJbnB1dFZhbGlkID0gKGV2dDogRXZlbnQpID0+IHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChpbnB1dE5hbWUpIHtcbiAgICAgICAgaW5wdXROYW1lLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblxuICAgICAgICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA+IENPTlNUQU5UUy5PUFRJT05fR0FNRS5NQVhfQ0hBUl9OQU1FX0FNT1VOVCkge1xuICAgICAgICAgIGlucHV0TmFtZS5zZXRDdXN0b21WYWxpZGl0eShg0JjQvNGPINC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINCx0L7Qu9GM0YjQtSDRh9C10LwgJHtDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX0NIQVJfTkFNRV9BTU9VTlR9INGB0LjQvNCy0L7Qu9C+0LJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBpbnB1dE5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0TmFtZS52YWxpZGl0eS5jdXN0b21FcnJvcikge1xuICAgICAgICAgIGlucHV0TmFtZS5zdHlsZS5vdXRsaW5lQ29sb3IgPSAncmVkJztcbiAgICAgICAgICBpZiAoYnRuU3VibWl0Rm9ybSkgYnRuU3VibWl0Rm9ybS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXROYW1lLnN0eWxlLm91dGxpbmVDb2xvciA9ICcnO1xuICAgICAgICAgIGlmIChidG5TdWJtaXRGb3JtKSBidG5TdWJtaXRGb3JtLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dE5hbWUucmVwb3J0VmFsaWRpdHkoKTtcblxuICAgICAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvbk5hbWVJbnB1dFZhbGlkKVxuXG4gICAgICAgIGlmIChydWxlc0Zvcm0pIHtcbiAgICAgICAgICBydWxlc0Zvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBidG5TdWJtaXRGb3JtPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQW5zd2VyKGlucHV0TmFtZS52YWx1ZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==