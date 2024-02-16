import AbstractView from './Abstract-view.js';
import Application from '../controller/router.js';
export default class IntroView extends AbstractView {
    constructor() {
        super('div', ['intro']);
    }
    get template() {
        return ` <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    `;
    }
    onAnswer() {
        Application.showGreeting();
    }
    bind() {
        this._element && this._element.querySelector('.intro__asterisk')?.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.onAnswer();
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvaW50cm8tdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVUsU0FBUSxZQUFZO0lBQ2pEO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU87O0tBRU4sQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2xHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YiLCJmaWxlIjoidmlldy9pbnRyby12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0VmlldyBmcm9tICcuL0Fic3RyYWN0LXZpZXcuanMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50cm9WaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2RpdicsIFsnaW50cm8nXSlcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYCA8aDEgY2xhc3M9XCJpbnRyb19fYXN0ZXJpc2tcIj4qPC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnRyb19fbW90dG9cIj48c3VwPio8L3N1cD4g0K3RgtC+INC90LUg0YTQvtGC0L4uINCt0YLQviDRgNC40YHRg9C90L7QuiDQvNCw0YHQu9C+0Lwg0L3QuNC00LXRgNC70LDQvdC00YHQutC+0LPQviDRhdGD0LTQvtC20L3QuNC60LAt0YTQvtGC0L7RgNC10LDQu9C40YHRgtCwIFRqYWxmIFNwYXJuYWF5LjwvcD5cbiAgICBgXG4gIH1cblxuICBvbkFuc3dlcigpIHtcbiAgICBBcHBsaWNhdGlvbi5zaG93R3JlZXRpbmcoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYXN0ZXJpc2snKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub25BbnN3ZXIoKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==