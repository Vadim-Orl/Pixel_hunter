import AbstractView from './Abstract-view.js';
export default class SplashScreen extends AbstractView {
    constructor(cursor = 0, symbolsSeg = `/-\\|`) {
        super();
        Object.defineProperty(this, "cursor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: cursor
        });
        Object.defineProperty(this, "symbolsSeg", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: symbolsSeg
        });
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    get template() {
        return `<div></div>`;
    }
    start() {
        this.cursor = ++this.cursor >= this.symbolsSeg.length ? 0 : this.cursor;
        this.element.textContent = this.symbolsSeg[this.cursor];
        this.timeout = setTimeout(() => this.start(), 50);
    }
    stop() {
        clearTimeout(this.timeout);
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvU3BsYXNoLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxZQUFhLFNBQVEsWUFBWTtJQUdwRCxZQUFvQixTQUFTLENBQUMsRUFBVSxhQUFhLE9BQU87UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFERTs7OzttQkFBUSxNQUFNO1dBQUk7UUFBRTs7OzttQkFBUSxVQUFVO1dBQVU7UUFGNUQ7Ozs7O1dBQW9DO0lBSXBDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJO1FBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YiLCJmaWxlIjoidmlldy9TcGxhc2gtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgdGltZW91dDogTm9kZUpTLlRpbWVvdXQgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJzb3IgPSAwLCBwcml2YXRlIHN5bWJvbHNTZWcgPSBgLy1cXFxcfGApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgPGRpdj48L2Rpdj5gO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5jdXJzb3IgPSArK3RoaXMuY3Vyc29yID49IHRoaXMuc3ltYm9sc1NlZy5sZW5ndGggPyAwIDp0aGlzLmN1cnNvcjtcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnN5bWJvbHNTZWdbdGhpcy5jdXJzb3JdO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdGFydCgpLCA1MCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG59XG4iXX0=