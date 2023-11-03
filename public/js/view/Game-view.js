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

//# sourceMappingURL=Game-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0dhbWUtdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RWaWV3IGZyb20gJy4vQWJzdHJhY3Qtdmlldy5qcydcbmltcG9ydCB0eXBlUXVlc3Rpb24gZnJvbSAnLi4vdXRpbHMvdHlwZVF1ZXN0aW9uLmpzJztcbmltcG9ydCB7IHJlc2l6ZSwgbGlicmFyeUZyYW1lIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBzdGF0ZSkge1xuICAgIHN1cGVyKCdkaXYnLCB7IGNsYXNzZXM6IFsnZ2FtZSddIH0pXG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYCA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj4ke3RoaXMuZGF0YS50YXNrfTwvcD5cbiAgICAke3R5cGVRdWVzdGlvblt0aGlzLmRhdGEudHlwZV0odGhpcy5kYXRhLm9wdGlvbnMpfWBcbiAgfVxuXG4gIG9uQW5zd2VyKCkge1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBnYW1lRm9ybSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGVudCcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS50eXBlKVxuICAgIHN3aXRjaCAodGhpcy5kYXRhLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZVF1ZXN0aW9uJzoge1xuICAgICAgICBnYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBjaGVja2VkUXVlc3Rpb24gPSBnYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVlc3Rpb24xXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICBpZiAoY2hlY2tlZFF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uQW5zd2VyKGNoZWNrZWRRdWVzdGlvbi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjYXNlICdkb3VibGVRdWVzdGlvbic6e1xuICAgICAgICBjb25zb2xlLmxvZygnMTExJylcbiAgICAgICAgZ2FtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBjb25zdCBjaGVja2VkUXVlc3Rpb24xID0gZ2FtZUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1ZXN0aW9uMVwiXTpjaGVja2VkJyk7XG4gICAgICAgICAgY29uc3QgY2hlY2tlZFF1ZXN0aW9uMiA9IGdhbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWVzdGlvbjJcIl06Y2hlY2tlZCcpO1xuICAgICAgICAgIGlmIChjaGVja2VkUXVlc3Rpb24xICYmIGNoZWNrZWRRdWVzdGlvbjIpIHtcbiAgICAgICAgICAgIHRoaXMub25BbnN3ZXIoY2hlY2tlZFF1ZXN0aW9uMS52YWx1ZSwgY2hlY2tlZFF1ZXN0aW9uMi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVhazt9XG5cbiAgICAgIGNhc2UgJ3RyaXBsZVF1ZXN0aW9uJzoge1xuICAgICAgICBjb25zdCBsaXN0R2FtZU9wdGlvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZV9fb3B0aW9uJyk7XG4gICAgICAgICBBcnJheS5mcm9tKGxpc3RHYW1lT3B0aW9uKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICB0aGlzLm9uQW5zd2VyKGV2dC50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSW1hZ2VzKCkge1xuICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZV9fb3B0aW9uIGltZycpO1xuICAgIFsuLi5pbWFnZXNdLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NpemUgPSByZXNpemUoXG4gICAgICAgICAgeyB3aWR0aDpsaWJyYXJ5RnJhbWVbdGhpcy5kYXRhLnR5cGVdLndpZHRoLCBoZWlnaHQ6IGxpYnJhcnlGcmFtZVt0aGlzLmRhdGEudHlwZV0uaGVpZ2h0IH0sXG4gICAgICAgICAgeyB3aWR0aDogaW1nLndpZHRoLCBoZWlnaHQ6IGltZy5oZWlnaHQgfSxcbik7XG4gICAgICAgIGltZy53aWR0aCA9IG5ld1NpemUud2lkdGg7XG4gICAgICAgIGltZy5oZWlnaHQgPSBuZXdTaXplLmhlaWdodDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXSwiZmlsZSI6IkdhbWUtdmlldy5qcyJ9
