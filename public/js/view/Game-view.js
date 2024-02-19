import AbstractView from './Abstract-view.js';
import typeQuestion from '../utils/typeQuestion.js';
import { resize, libraryFrame } from '../utils/resize.js';
export default class GameView extends AbstractView {
    constructor(data, state) {
        super('div', ['game']);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: state
        });
    }
    get template() {
        return ` <p class="game__task">${this.data.task}</p>
    ${typeQuestion[this.data.type](this.data.options)}`;
    }
    bind() {
        const gameForm = this.element.querySelector('.game__content');
        console.dir(this.data);
        switch (this.data.type) {
            case 'singleQuestion': {
                gameForm?.addEventListener('input', (evt) => {
                    evt.preventDefault();
                    const checkedQuestion = gameForm.querySelector('input[name="question1"]:checked');
                    if (checkedQuestion) {
                        this.onAnswer(checkedQuestion.value);
                    }
                });
            }
            case 'doubleQuestion': {
                console.log('111');
                gameForm?.addEventListener('input', (evt) => {
                    evt.preventDefault();
                    const checkedQuestion1 = gameForm.querySelector('input[name="question1"]:checked');
                    const checkedQuestion2 = gameForm.querySelector('input[name="question2"]:checked');
                    if (checkedQuestion1 && checkedQuestion2) {
                        this.onAnswer(checkedQuestion1.value, checkedQuestion2.value);
                    }
                });
                break;
            }
            case 'tripleQuestion': {
                const listGameOption = this.element.querySelectorAll('.game__option');
                Array.from(listGameOption).forEach((el) => {
                    el.addEventListener('click', (evt) => {
                        evt.preventDefault();
                        if (evt.target) {
                            const target = evt.target;
                            this.onAnswer(target.firstElementChild);
                        }
                    });
                });
            }
        }
    }
    onAnswer(value, value2) {
        throw new Error('Method not implemented.');
    }
    // onAnswer() {
    //   throw new Error('Method not implemented.');
    // }
    resizeImages() {
        const images = this.element.querySelectorAll('.game__option img');
        [...images].forEach((img) => {
            img.addEventListener('load', () => {
                const newSize = resize({ width: libraryFrame[this.data.type].width, height: libraryFrame[this.data.type].height }, { width: img.width, height: img.height });
                img.width = newSize.width;
                img.height = newSize.height;
            });
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3J0IEFic3RyYWN0VmlldyBmcm9tICcuL0Fic3RyYWN0LXZpZXcuanMnXG5pbXBvcnQgdHlwZVF1ZXN0aW9uIGZyb20gJy4uL3V0aWxzL3R5cGVRdWVzdGlvbi5qcyc7XG5pbXBvcnQgeyByZXNpemUsIGxpYnJhcnlGcmFtZSB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZS5qcyc7XG5pbXBvcnQgeyBJR2FtZURhdGEgfSBmcm9tICcuLi90eXBlcy90eXBlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IElHYW1lRGF0YSwgcHVibGljIHN0YXRlOiBhbnkpIHtcbiAgICBzdXBlcignZGl2JywgIFsnZ2FtZSddIClcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYCA8cCBjbGFzcz1cImdhbWVfX3Rhc2tcIj4ke3RoaXMuZGF0YS50YXNrfTwvcD5cbiAgICAke3R5cGVRdWVzdGlvblt0aGlzLmRhdGEudHlwZV0odGhpcy5kYXRhLm9wdGlvbnMpfWBcbiAgfVxuXG5cbiAgYmluZCgpIHtcbiAgICBjb25zdCBnYW1lRm9ybSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fY29udGVudCcpO1xuICAgIGNvbnNvbGUuZGlyKHRoaXMuZGF0YSlcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS50eXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGVRdWVzdGlvbic6IHtcbiAgICAgICAgZ2FtZUZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dCkgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrZWRRdWVzdGlvbjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBnYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVlc3Rpb24xXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICBpZiAoY2hlY2tlZFF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uQW5zd2VyKGNoZWNrZWRRdWVzdGlvbi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjYXNlICdkb3VibGVRdWVzdGlvbic6e1xuICAgICAgICBjb25zb2xlLmxvZygnMTExJylcbiAgICAgICAgZ2FtZUZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dCkgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgY29uc3QgY2hlY2tlZFF1ZXN0aW9uMTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBnYW1lRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVlc3Rpb24xXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICBjb25zdCBjaGVja2VkUXVlc3Rpb24yOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGdhbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWVzdGlvbjJcIl06Y2hlY2tlZCcpO1xuICAgICAgICAgIGlmIChjaGVja2VkUXVlc3Rpb24xICYmIGNoZWNrZWRRdWVzdGlvbjIpIHtcbiAgICAgICAgICAgIHRoaXMub25BbnN3ZXIoY2hlY2tlZFF1ZXN0aW9uMS52YWx1ZSwgY2hlY2tlZFF1ZXN0aW9uMi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVhazt9XG5cbiAgICAgIGNhc2UgJ3RyaXBsZVF1ZXN0aW9uJzoge1xuICAgICAgICBjb25zdCBsaXN0R2FtZU9wdGlvbjogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVfX29wdGlvbicpO1xuXG4gICAgICAgICBBcnJheS5mcm9tKGxpc3RHYW1lT3B0aW9uKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQpe1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgICAgIHRoaXMub25BbnN3ZXIodGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkFuc3dlcih2YWx1ZTogYW55LCB2YWx1ZTI/OiBhbnkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICAvLyBvbkFuc3dlcigpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIC8vIH1cblxuICByZXNpemVJbWFnZXMoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lX19vcHRpb24gaW1nJykgYXMgTm9kZUxpc3RPZjxIVE1MSW1hZ2VFbGVtZW50PjtcbiAgICBbLi4uaW1hZ2VzXS5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTaXplID0gcmVzaXplKFxuICAgICAgICAgIHsgd2lkdGg6bGlicmFyeUZyYW1lW3RoaXMuZGF0YS50eXBlXS53aWR0aCwgaGVpZ2h0OiBsaWJyYXJ5RnJhbWVbdGhpcy5kYXRhLnR5cGVdLmhlaWdodCB9LFxuICAgICAgICAgIHsgd2lkdGg6IGltZy53aWR0aCwgaGVpZ2h0OiBpbWcuaGVpZ2h0IH0sXG4pO1xuICAgICAgICBpbWcud2lkdGggPSBuZXdTaXplLndpZHRoO1xuICAgICAgICBpbWcuaGVpZ2h0ID0gbmV3U2l6ZS5oZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19