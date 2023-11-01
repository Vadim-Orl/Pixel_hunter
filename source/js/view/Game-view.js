import AbstractView from './Abstract-view.js'
import typeQuestion from '../utils/typeQuestion.js';
import { resize, libraryFrame } from '../utils/resize.js';

export default class GameView extends AbstractView {
  constructor(data, state) {
    super('div', { classes: ['game'] })

    this.data = data;
    this.state = state;
  }

  get template() {
    return ` <p class="game__task">${this.data.task}</p>
    ${typeQuestion[this.data.type](this.data.options)}`
  }

  onAnswer() {
  }

  bind() {
    const gameForm = this.element.querySelector('.game__content');
    console.log(this.data.type)
    switch (this.data.type) {
      case 'singleQuestion': {
        gameForm.addEventListener('input', (evt) => {
          evt.preventDefault();
          const checkedQuestion = gameForm.querySelector('input[name="question1"]:checked');
          if (checkedQuestion) {
            this.onAnswer(checkedQuestion.value);
          }
        })
      }

      case 'doubleQuestion':{
        console.log('111')
        gameForm.addEventListener('input', (evt) => {
          evt.preventDefault();

          const checkedQuestion1 = gameForm.querySelector('input[name="question1"]:checked');
          const checkedQuestion2 = gameForm.querySelector('input[name="question2"]:checked');
          if (checkedQuestion1 && checkedQuestion2) {
            this.onAnswer(checkedQuestion1.value, checkedQuestion2.value);
          }
        })
        break;}

      case 'tripleQuestion': {
        const listGameOption = this.element.querySelectorAll('.game__option');
         Array.from(listGameOption).forEach((el) => {
           el.addEventListener('click', (evt) => {
             evt.preventDefault();
             this.onAnswer(evt.target.firstElementChild);
           })
         });
      }
    }
  }

  resizeImages() {
    const images = this.element.querySelectorAll('.game__option img');
    [...images].forEach((img) => {
      img.addEventListener('load', () => {
        const newSize = resize(
          { width:libraryFrame[this.data.type].width, height: libraryFrame[this.data.type].height },
          { width: img.width, height: img.height },
);
        img.width = newSize.width;
        img.height = newSize.height;
      });
    });
  }
}
