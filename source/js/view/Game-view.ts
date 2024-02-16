import AbstractView from './Abstract-view'
import typeQuestion from '../utils/typeQuestion';
import { resize, libraryFrame } from '../utils/resize';
import { IGameData } from '../../types/types';

export default class GameView extends AbstractView {
  constructor(public data: IGameData, public state: any) {
    super('div',  ['game'] )
  }

  get template() {
    return ` <p class="game__task">${this.data.task}</p>
    ${typeQuestion[this.data.type](this.data.options)}`
  }


  bind() {
    const gameForm = this.element.querySelector('.game__content');
    console.dir(this.data)
    switch (this.data.type) {
      case 'singleQuestion': {
        gameForm?.addEventListener('input', (evt) => {
          evt.preventDefault();
          const checkedQuestion: HTMLInputElement | null = gameForm.querySelector('input[name="question1"]:checked');
          if (checkedQuestion) {
            this.onAnswer(checkedQuestion.value);
          }
        })
      }

      case 'doubleQuestion':{
        console.log('111')
        gameForm?.addEventListener('input', (evt) => {
          evt.preventDefault();

          const checkedQuestion1: HTMLInputElement | null = gameForm.querySelector('input[name="question1"]:checked');
          const checkedQuestion2: HTMLInputElement | null = gameForm.querySelector('input[name="question2"]:checked');
          if (checkedQuestion1 && checkedQuestion2) {
            this.onAnswer(checkedQuestion1.value, checkedQuestion2.value);
          }
        })
        break;}

      case 'tripleQuestion': {
        const listGameOption: NodeListOf<HTMLDivElement> = this.element.querySelectorAll('.game__option');

         Array.from(listGameOption).forEach((el) => {
           el.addEventListener('click', (evt: Event) => {
             evt.preventDefault();
             if (evt.target){
              const target = evt.target as HTMLDivElement
              this.onAnswer(target.firstElementChild);
             }

           })
         });
      }
    }
  }

  // onAnswer() {
  //   throw new Error('Method not implemented.');
  // }

  resizeImages() {
    const images = this.element.querySelectorAll('.game__option img') as NodeListOf<HTMLImageElement>;
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
