import AbstractView from './Abstract-view.js';
export default class StatisticView extends AbstractView {
    constructor(state) {
        super('div', ['stats']);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: state
        });
    }
    get template() {
        return `
            <ul class="stats">
            ${this.state.results.map((el) => {
            return `<li class="stats__result stats__result--${el}"></li>`;
        })}

    </ul>
  `;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvU3RhdGlzdGljLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUE7QUFFN0MsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUNyRCxZQUFvQixLQUFpQjtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQURiOzs7O21CQUFRLEtBQUs7V0FBWTtJQUVyQyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTzs7Y0FFRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUM3QyxPQUFPLDJDQUEyQyxFQUFFLFNBQVMsQ0FBQTtRQUMvRCxDQUFDLENBQUM7OztHQUdELENBQUE7SUFDRCxDQUFDO0NBQ0YiLCJmaWxlIjoidmlldy9TdGF0aXN0aWMtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdGF0ZUdhbWUgfSBmcm9tICcuLi91dGlscy9iaXNuZXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgQWJzdHJhY3RWaWV3IGZyb20gJy4vQWJzdHJhY3Qtdmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IElTdGF0ZUdhbWUpIHtcbiAgICBzdXBlcignZGl2JywgWydzdGF0cyddKVxuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGF0c1wiPlxuICAgICAgICAgICAgJHt0aGlzLnN0YXRlLnJlc3VsdHMubWFwKChlbDogYW55KSA9PiB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzdGF0c19fcmVzdWx0IHN0YXRzX19yZXN1bHQtLSR7ZWx9XCI+PC9saT5gXG4gIH0pfVxuXG4gICAgPC91bD5cbiAgYFxuICB9XG59XG4iXX0=