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
    console.dir(this.data)
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

//# sourceMappingURL=Game-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0dhbWUtdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RWaWV3IGZyb20gJy4vQWJzdHJhY3Qtdmlldy5qcydcbmltcG9ydCB0eXBlUXVlc3Rpb24gZnJvbSAnLi4vdXRpbHMvdHlwZVF1ZXN0aW9uLmpzJztcbmltcG9ydCB7IHJlc2l6ZSwgbGlicmFyeUZyYW1lIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdGF0ZSkge1xuICAgIHN1cGVyKCdkaXYnLCB7IGNsYXNzZXM6IFsnZ2FtZSddIH0pXG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYCA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj4ke3RoaXMuZGF0YS50YXNrfTwvcD5cbiAgICAke3R5cGVRdWVzdGlvblt0aGlzLmRhdGEudHlwZV0odGhpcy5kYXRhLm9wdGlvbnMpfWBcbiAgfVxuXG4gIG9uQW5zd2VyKCkge1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBnYW1lRm9ybSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGVudCcpO1xuICAgIGNvbnNvbGUuZGlyKHRoaXMuZGF0YSlcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS50eXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGVRdWVzdGlvbic6IHtcbiAgICAgICAgZ2FtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgY2hlY2tlZFF1ZXN0aW9uID0gZ2FtZUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1ZXN0aW9uMVwiXTpjaGVja2VkJyk7XG4gICAgICAgICAgaWYgKGNoZWNrZWRRdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vbkFuc3dlcihjaGVja2VkUXVlc3Rpb24udmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZG91YmxlUXVlc3Rpb24nOntcbiAgICAgICAgY29uc29sZS5sb2coJzExMScpXG4gICAgICAgIGdhbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dCkgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgY29uc3QgY2hlY2tlZFF1ZXN0aW9uMSA9IGdhbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWVzdGlvbjFcIl06Y2hlY2tlZCcpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrZWRRdWVzdGlvbjIgPSBnYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVlc3Rpb24yXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICBpZiAoY2hlY2tlZFF1ZXN0aW9uMSAmJiBjaGVja2VkUXVlc3Rpb24yKSB7XG4gICAgICAgICAgICB0aGlzLm9uQW5zd2VyKGNoZWNrZWRRdWVzdGlvbjEudmFsdWUsIGNoZWNrZWRRdWVzdGlvbjIudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7fVxuXG4gICAgICBjYXNlICd0cmlwbGVRdWVzdGlvbic6IHtcbiAgICAgICAgY29uc3QgbGlzdEdhbWVPcHRpb24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVfX29wdGlvbicpO1xuICAgICAgICAgQXJyYXkuZnJvbShsaXN0R2FtZU9wdGlvbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgdGhpcy5vbkFuc3dlcihldnQudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVfX29wdGlvbiBpbWcnKTtcbiAgICBbLi4uaW1hZ2VzXS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTaXplID0gcmVzaXplKFxuICAgICAgICAgIHsgd2lkdGg6bGlicmFyeUZyYW1lW3RoaXMuZGF0YS50eXBlXS53aWR0aCwgaGVpZ2h0OiBsaWJyYXJ5RnJhbWVbdGhpcy5kYXRhLnR5cGVdLmhlaWdodCB9LFxuICAgICAgICAgIHsgd2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0IH0sXG4pO1xuICAgICAgICBpbWcud2lkdGggPSBuZXdTaXplLndpZHRoO1xuICAgICAgICBpbWcuaGVpZ2h0ID0gbmV3U2l6ZS5oZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sImZpbGUiOiJHYW1lLXZpZXcuanMifQ==
