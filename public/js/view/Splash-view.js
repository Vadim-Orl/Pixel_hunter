import AbstractView from './Abstract-view.js';

export default class SplashScreen extends AbstractView {
  constructor() {
    super();
    this.cursor = 0;
    this.symbolsSeg = `/-\\|`;
  }

  get template() {
    return `<div></div>`;
  }

  start() {
    this.cursor = ++this.cursor >= this.symbolsSeg.length ? 0 :this.cursor;
    this.element.textContent = this.symbolsSeg[this.cursor];
    this.timeout = setTimeout(() => this.start(), 50);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}

//# sourceMappingURL=Splash-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L1NwbGFzaC12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IDA7XG4gICAgdGhpcy5zeW1ib2xzU2VnID0gYC8tXFxcXHxgO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgPGRpdj48L2Rpdj5gO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5jdXJzb3IgPSArK3RoaXMuY3Vyc29yID49IHRoaXMuc3ltYm9sc1NlZy5sZW5ndGggPyAwIDp0aGlzLmN1cnNvcjtcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnN5bWJvbHNTZWdbdGhpcy5jdXJzb3JdO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdGFydCgpLCA1MCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG59XG4iXSwiZmlsZSI6IlNwbGFzaC12aWV3LmpzIn0=
