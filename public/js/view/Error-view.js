import AbstractView from './Abstract-view.js';
export default class ErrorView extends AbstractView {
    constructor(error) {
        super('div', ['end']);
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: error
        });
    }
    get template() {
        return `<p>Произошла ошибка: ${this.error.message}</p>`;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvRXJyb3Itdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVUsU0FBUSxZQUFZO0lBQ2pELFlBQW9CLEtBQVk7UUFDOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFEWjs7OzttQkFBUSxLQUFLO1dBQU87SUFFaEMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sd0JBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxNQUFNLENBQUE7SUFDekQsQ0FBQztDQUNGIiwiZmlsZSI6InZpZXcvRXJyb3Itdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcnJvcjogRXJyb3IpIHtcbiAgICBzdXBlcignZGl2JywgWydlbmQnXSk7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGA8cD7Qn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwOiAke3RoaXMuZXJyb3IubWVzc2FnZX08L3A+YFxuICB9XG59XG4iXX0=