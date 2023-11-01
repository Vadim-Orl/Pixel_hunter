import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js'
import Application from '../controller/router.js';

export default class RulesView extends AbstractView {
  constructor() {
    super('div', { classes: ['rules'] })
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
              `
  }

  onAnswer(inputName) {
    Application.showGame(inputName);
  }

  bind() {
    const rulesForm = this._element.querySelector('.rules__form');
    const inputName = rulesForm.querySelector('.rules__input')
    const btnSubmitForm = rulesForm.querySelector('button');

    const onNameInputValid = (evt) => {
      evt.stopPropagation();
      inputName.setCustomValidity('');

      if (inputName.value.length > CONSTANTS.OPTION_GAME.MAX_CHAR_NAME_AMOUNT) {
        inputName.setCustomValidity(`Имя не должно быть больше чем ${CONSTANTS.MAX_CHAR_NAME_AMOUNT} символов`);
      }

      if (inputName.value.length <= 0) {
        inputName.setCustomValidity('Заполните поле');
      }

      if (inputName.validity.customError) {
        inputName.style.outlineColor = 'red';
        btnSubmitForm.disabled = true;
      } else {
        inputName.style.outlineColor = '';
        btnSubmitForm.disabled = false;
      }

      inputName.reportValidity();
    }

    inputName.addEventListener('input', onNameInputValid)

    rulesForm.onsubmit = () => {
      return false
    }

    btnSubmitForm.addEventListener('click', () => {
      this.onAnswer(inputName.value)
    })
  }
}
