import GameView from '../view/Game-view.js';
import Router from '../controller/router.js';
import HeaderView from '../view/Header-view.js';
import StatisticView from '../view/Statistic-view.js';
const ONE_SECOND = 1000;
const showPlayerHeader = true;
export default class GameScreen {
    constructor(model) {
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: model
        });
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_timeAnswer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "header", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "statistic", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.root = document.createElement('div');
        this._timer = null;
        this._timeAnswer = 0;
        this.updateHeader = this.updateHeader.bind(this);
        this.startGame = this.startGame.bind(this);
        this._tick = this._tick.bind(this);
        this.changeLevel = this.changeLevel.bind(this);
    }
    get element() {
        return this.root;
    }
    changeLevel() {
        this._timeAnswer = 0;
        this.updateHeader();
        this.updateStatistic();
        const levelData = this.model.data[this.model.getCurrentLevel()];
        const level = new GameView(levelData, this.model.getCurrentLevel());
        this.changeContentView(level);
        level.onAnswer = this.onAnswer.bind(this);
        level.resizeImages();
    }
    startGame() {
        this.header = new HeaderView(this.model.state, showPlayerHeader);
        this.content = new GameView(this.model.data[this.model.getCurrentLevel()], this.model.getCurrentLevel());
        this.statistic = new StatisticView(this.model.state);
        this.root.appendChild(this.header.element);
        this.root.appendChild(this.content.element);
        this.root.appendChild(this.statistic.element);
        this.content.onAnswer = this.onAnswer.bind(this);
        this.content.resizeImages();
        this._tick();
    }
    stopGame() {
        this._timer && clearInterval(this._timer);
    }
    endGame(isFail) {
        this.model.isFail = isFail;
        this.model.resultPoints = this.model.resultGame();
        Router.showResult(this.model, isFail);
    }
    _tick() {
        if (this.model.state.time > 0) {
            this.model.tick();
            this._timeAnswer++;
            this.updateHeader();
            this._timer = setTimeout(() => this._tick(), ONE_SECOND);
        }
        else {
            this.endGame(true);
        }
    }
    onAnswer(...answer) {
        this.stopGame();
        const questionBd = this.model.data[this.model.getCurrentLevel()];
        let isCorrectAnsw = false;
        let findElement;
        switch (questionBd.type) {
            case 'singleQuestion':
            case 'doubleQuestion':
                isCorrectAnsw = answer.every((el, index) => {
                    return (questionBd.options[index].answer === el);
                });
                break;
            case 'tripleQuestion':
                // if ((typeof answer[0] )!== 'string') {
                findElement = questionBd.options.find((el) => {
                    return el.alt === answer[0].alt;
                });
                // }
                isCorrectAnsw = (findElement?.answer === 'paint');
                break;
            default: throw new Error('Could not process user response. Check database');
        }
        this.model.answer(isCorrectAnsw, this._timeAnswer);
        if (this.model.isGameOver()) {
            this.endGame(true);
        }
        else if (this.model.hasNextLevel()) {
            this.model.nextLevel();
            this.changeLevel();
        }
        else {
            this.endGame(false);
        }
    }
    updateHeader() {
        const header = new HeaderView(this.model.state, showPlayerHeader);
        this.header && this.root.replaceChild(header.element, this.header.element);
        header.onClick = () => {
            this.stopGame();
            Router.showWellcom();
        };
        this.header = header;
    }
    changeContentView(view) {
        this.content && this.root.replaceChild(view.element, this.content.element);
        this.content = view;
    }
    updateStatistic() {
        const statistic = new StatisticView(this.model.state);
        this.statistic && this.root.replaceChild(statistic.element, this.statistic.element);
        this.statistic = statistic;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2dhbWUtc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBSXRELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxPQUFPLFVBQVU7SUFRN0IsWUFBb0IsS0FBa0I7UUFBMUI7Ozs7bUJBQVEsS0FBSztXQUFhO1FBUHRDOzs7OztXQUFxQjtRQUNiOzs7OztXQUE4QjtRQUM5Qjs7Ozs7V0FBb0I7UUFDNUI7Ozs7O1dBQStCO1FBQy9COzs7OztXQUE4QjtRQUM5Qjs7Ozs7V0FBcUM7UUFHbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElB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QUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0NBQ0YiLCJmaWxlIjoibW9kZWwvZ2FtZS1zY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi4vdmlldy9HYW1lLXZpZXcuanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9jb250cm9sbGVyL3JvdXRlci5qcyc7XG5pbXBvcnQgSGVhZGVyVmlldyBmcm9tICcuLi92aWV3L0hlYWRlci12aWV3LmpzJztcbmltcG9ydCBTdGF0aXN0aWNWaWV3IGZyb20gJy4uL3ZpZXcvU3RhdGlzdGljLXZpZXcuanMnO1xuaW1wb3J0IHsgSVF1ZXN0TW9kZWwgfSBmcm9tICcuL3F1ZXN0LW1vZGVsLmpzJztcbmltcG9ydCB7IFR5cGVWYXJBbnN3ZXIgfSBmcm9tICcuLi90eXBlcy90eXBlcy5qcyc7XG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxMDAwO1xuY29uc3Qgc2hvd1BsYXllckhlYWRlciA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4ge1xuICByb290OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfdGltZXI6IG51bGwgfCBOb2RlSlMuVGltZW91dDtcbiAgcHJpdmF0ZSBfdGltZUFuc3dlcjogbnVtYmVyO1xuICBoZWFkZXI6IEhlYWRlclZpZXcgfCB1bmRlZmluZWQ7XG4gIGNvbnRlbnQ6IEdhbWVWaWV3IHwgdW5kZWZpbmVkO1xuICBzdGF0aXN0aWM6IFN0YXRpc3RpY1ZpZXcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RlbDogSVF1ZXN0TW9kZWwpIHtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICB0aGlzLl90aW1lQW5zd2VyID0gMDtcblxuICAgIHRoaXMudXBkYXRlSGVhZGVyID0gdGhpcy51cGRhdGVIZWFkZXIuYmluZCh0aGlzKVxuICAgIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuX3RpY2sgPSB0aGlzLl90aWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUxldmVsID0gdGhpcy5jaGFuZ2VMZXZlbC5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290O1xuICB9XG5cbiAgY2hhbmdlTGV2ZWwoKSB7XG4gICAgdGhpcy5fdGltZUFuc3dlciA9IDA7XG4gICAgdGhpcy51cGRhdGVIZWFkZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRpc3RpYygpO1xuICAgIGNvbnN0IGxldmVsRGF0YSA9IHRoaXMubW9kZWwuZGF0YVt0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpXTtcbiAgICBjb25zdCBsZXZlbCA9IG5ldyBHYW1lVmlldyhsZXZlbERhdGEsIHRoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCkpXG5cbiAgICB0aGlzLmNoYW5nZUNvbnRlbnRWaWV3KGxldmVsKTtcbiAgICBsZXZlbC5vbkFuc3dlciA9IHRoaXMub25BbnN3ZXIuYmluZCh0aGlzKTtcbiAgICBsZXZlbC5yZXNpemVJbWFnZXMoKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXJWaWV3KHRoaXMubW9kZWwuc3RhdGUsIHNob3dQbGF5ZXJIZWFkZXIpO1xuICAgIHRoaXMuY29udGVudCA9IG5ldyBHYW1lVmlldyh0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV0sIHRoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCkpXG4gICAgdGhpcy5zdGF0aXN0aWMgPSBuZXcgU3RhdGlzdGljVmlldyh0aGlzLm1vZGVsLnN0YXRlKTtcblxuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlci5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnN0YXRpc3RpYy5lbGVtZW50KTtcblxuICAgIHRoaXMuY29udGVudC5vbkFuc3dlciA9IHRoaXMub25BbnN3ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbnRlbnQucmVzaXplSW1hZ2VzKCk7XG4gICAgdGhpcy5fdGljaygpO1xuICB9XG5cbiAgc3RvcEdhbWUoKSB7XG4gICAgdGhpcy5fdGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gIH1cblxuICBlbmRHYW1lKGlzRmFpbDogYm9vbGVhbikge1xuICAgIHRoaXMubW9kZWwuaXNGYWlsID0gaXNGYWlsO1xuICAgIHRoaXMubW9kZWwucmVzdWx0UG9pbnRzID0gdGhpcy5tb2RlbC5yZXN1bHRHYW1lKClcbiAgICBSb3V0ZXIuc2hvd1Jlc3VsdCh0aGlzLm1vZGVsLCBpc0ZhaWwpO1xuICB9XG5cbiAgX3RpY2soKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuc3RhdGUudGltZSA+IDApIHtcbiAgICAgIHRoaXMubW9kZWwudGljaygpXG4gICAgICB0aGlzLl90aW1lQW5zd2VyKys7XG4gICAgICB0aGlzLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3RpY2soKSwgT05FX1NFQ09ORCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbkFuc3dlciguLi5hbnN3ZXI6IGFueVtdKSB7XG4gICAgdGhpcy5zdG9wR2FtZSgpO1xuXG4gICAgY29uc3QgcXVlc3Rpb25CZCA9IHRoaXMubW9kZWwuZGF0YVt0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpXTtcbiAgICBsZXQgaXNDb3JyZWN0QW5zdyA9IGZhbHNlO1xuICAgIGxldCBmaW5kRWxlbWVudDtcblxuICAgIHN3aXRjaCAocXVlc3Rpb25CZC50eXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGVRdWVzdGlvbic6XG4gICAgICBjYXNlICdkb3VibGVRdWVzdGlvbic6XG4gICAgICAgIGlzQ29ycmVjdEFuc3cgPSBhbnN3ZXIuZXZlcnkoKGVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHF1ZXN0aW9uQmQub3B0aW9uc1tpbmRleF0uYW5zd2VyID09PSBlbClcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyaXBsZVF1ZXN0aW9uJzpcbiAgICAgICAgLy8gaWYgKCh0eXBlb2YgYW5zd2VyWzBdICkhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBmaW5kRWxlbWVudCA9IHF1ZXN0aW9uQmQub3B0aW9ucy5maW5kKChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmFsdCA9PT0gYW5zd2VyWzBdLmFsdDtcbiAgICAgICAgICB9KVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaXNDb3JyZWN0QW5zdyA9IChmaW5kRWxlbWVudD8uYW5zd2VyID09PSAncGFpbnQnKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHByb2Nlc3MgdXNlciByZXNwb25zZS4gQ2hlY2sgZGF0YWJhc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsLmFuc3dlcihpc0NvcnJlY3RBbnN3LCB0aGlzLl90aW1lQW5zd2VyKTtcblxuICAgIGlmICh0aGlzLm1vZGVsLmlzR2FtZU92ZXIoKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5oYXNOZXh0TGV2ZWwoKSkge1xuICAgICAgdGhpcy5tb2RlbC5uZXh0TGV2ZWwoKTtcbiAgICAgIHRoaXMuY2hhbmdlTGV2ZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRHYW1lKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlclZpZXcodGhpcy5tb2RlbC5zdGF0ZSwgc2hvd1BsYXllckhlYWRlcik7XG4gICAgdGhpcy5oZWFkZXIgJiYgdGhpcy5yb290LnJlcGxhY2VDaGlsZChoZWFkZXIuZWxlbWVudCwgdGhpcy5oZWFkZXIuZWxlbWVudClcbiAgICBoZWFkZXIub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIFJvdXRlci5zaG93V2VsbGNvbSgpO1xuICAgIH1cbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnRWaWV3KHZpZXc6IGFueSkge1xuICAgIHRoaXMuY29udGVudCAmJiB0aGlzLnJvb3QucmVwbGFjZUNoaWxkKHZpZXcuZWxlbWVudCwgdGhpcy5jb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGVudCA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0aXN0aWMoKSB7XG4gICAgY29uc3Qgc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG4gICAgdGhpcy5zdGF0aXN0aWMgJiYgdGhpcy5yb290LnJlcGxhY2VDaGlsZChzdGF0aXN0aWMuZWxlbWVudCwgdGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG4gICAgdGhpcy5zdGF0aXN0aWMgPSBzdGF0aXN0aWM7XG4gIH1cbn1cbiJdfQ==