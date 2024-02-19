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
            }
        };
        inputName?.addEventListener('input', onNameInputValid);
        if (rulesForm) {
            rulesForm.onsubmit = () => {
                return false;
            };
        }
        btnSubmitForm?.addEventListener('click', () => {
            this.onAnswer(inputName?.value);
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvUnVsZXMtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFDakQsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsWUFBWTtJQUNqRDtRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7ZUFlSSxDQUFBO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFjO1FBQ3JCLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLFNBQVMsR0FBc0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEcsTUFBTSxTQUFTLEdBQXdDLFNBQVMsRUFBRSxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDaEcsTUFBTSxhQUFhLEdBQUcsU0FBUyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RCxNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7WUFDdEMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVoQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDeEUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlDQUFpQyxTQUFTLENBQUMsV0FBVyxDQUFDLG9CQUFvQixXQUFXLENBQUMsQ0FBQztnQkFDdEgsQ0FBQztnQkFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNoQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDckMsSUFBSSxhQUFhO3dCQUFFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFJLGFBQWE7d0JBQUUsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDLENBQUE7UUFDRyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFFdEQsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLFNBQVMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUN4QixPQUFPLEtBQUssQ0FBQTtZQUNkLENBQUMsQ0FBQTtRQUNILENBQUM7UUFFRCxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRiIsImZpbGUiOiJ2aWV3L1J1bGVzLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RWaWV3IGZyb20gJy4vQWJzdHJhY3Qtdmlldy5qcyc7XG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vY29udHJvbGxlci9yb3V0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignZGl2JywgWydydWxlcyddKVxuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICAgPGgxIGNsYXNzPVwicnVsZXNfX3RpdGxlXCI+0J/RgNCw0LLQuNC70LA8L2gxPlxuICAgICAgICAgICAgIDxwIGNsYXNzPVwicnVsZXNfX2Rlc2NyaXB0aW9uXCI+0KPQs9Cw0LTQsNC5IDEwINGA0LDQtyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviA8aW1nXG4gICAgICAgICAgICAgICBzcmM9XCJpbWcvcGhvdG9faWNvbi5wbmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj4g0LjQu9C4INGA0LjRgdGD0L3QvtC6IDxpbWdcbiAgICAgICAgICAgICAgIHNyYz1cImltZy9wYWludF9pY29uLnBuZ1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGFsdD1cIlwiPi48YnI+XG4gICAgICAgICAgICAgICDQpNC+0YLQvtCz0YDQsNGE0LjRj9C80Lgg0LjQu9C4INGA0LjRgdGD0L3QutCw0LzQuCDQvNC+0LPRg9GCINCx0YvRgtGMINC+0LHQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPLjxicj5cbiAgICAgICAgICAgICAgINCd0LAg0LrQsNC20LTRg9GOINC/0L7Qv9GL0YLQutGDINC+0YLQstC+0LTQuNGC0YHRjyAzMCDRgdC10LrRg9C90LQuPGJyPlxuICAgICAgICAgICAgICAg0J7RiNC40LHQuNGC0YzRgdGPINC80L7QttC90L4g0L3QtSDQsdC+0LvQtdC1IDMg0YDQsNC3Ljxicj5cbiAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgINCT0L7RgtC+0LLRiz9cbiAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJydWxlc19fZm9ybVwiPlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicnVsZXNfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INCY0LzRj1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJ1bGVzX19idXR0b24gIGNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPkdvITwvYnV0dG9uPlxuICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgYFxuICB9XG5cbiAgb25BbnN3ZXIoaW5wdXROYW1lOiBhbnkpIHtcbiAgICBBcHBsaWNhdGlvbi5zaG93R2FtZShpbnB1dE5hbWUpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBydWxlc0Zvcm06IEhUTUxGb3JtRWxlbWVudHwgdW5kZWZpbmVkIHwgbnVsbCA9IHRoaXMuX2VsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJy5ydWxlc19fZm9ybScpO1xuICAgIGNvbnN0IGlucHV0TmFtZTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCB8IG51bGwgPSBydWxlc0Zvcm0/LnF1ZXJ5U2VsZWN0b3IoJy5ydWxlc19faW5wdXQnKVxuICAgIGNvbnN0IGJ0blN1Ym1pdEZvcm0gPSBydWxlc0Zvcm0/LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgY29uc3Qgb25OYW1lSW5wdXRWYWxpZCA9IChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoaW5wdXROYW1lKSB7XG4gICAgICAgIGlucHV0TmFtZS5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cbiAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPiBDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX0NIQVJfTkFNRV9BTU9VTlQpIHtcbiAgICAgICAgICBpbnB1dE5hbWUuc2V0Q3VzdG9tVmFsaWRpdHkoYNCY0LzRjyDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQsdC+0LvRjNGI0LUg0YfQtdC8ICR7Q09OU1RBTlRTLk9QVElPTl9HQU1FLk1BWF9DSEFSX05BTUVfQU1PVU5UfSDRgdC40LzQstC+0LvQvtCyYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgaW5wdXROYW1lLnNldEN1c3RvbVZhbGlkaXR5KCfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dE5hbWUudmFsaWRpdHkuY3VzdG9tRXJyb3IpIHtcbiAgICAgICAgICBpbnB1dE5hbWUuc3R5bGUub3V0bGluZUNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgaWYgKGJ0blN1Ym1pdEZvcm0pIGJ0blN1Ym1pdEZvcm0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0TmFtZS5zdHlsZS5vdXRsaW5lQ29sb3IgPSAnJztcbiAgICAgICAgICBpZiAoYnRuU3VibWl0Rm9ybSkgYnRuU3VibWl0Rm9ybS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXROYW1lLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgfVxuICAgICAgICBpbnB1dE5hbWU/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25OYW1lSW5wdXRWYWxpZClcblxuICAgICAgICBpZiAocnVsZXNGb3JtKSB7XG4gICAgICAgICAgcnVsZXNGb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnRuU3VibWl0Rm9ybT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkFuc3dlcihpbnB1dE5hbWU/LnZhbHVlKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4iXX0=