import GameView from '../view/Game-view.js';
import Router from '../controller/router.js';
import HeaderView from '../view/Header-view.js';
import StatisticView from '../view/Statistic-view.js';
import { isStringArr } from '../types/type-guards.js';
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
                if (isStringArr(answer)) {
                    isCorrectAnsw = answer.every((el, index) => {
                        return (questionBd.options[index].answer === el);
                    });
                }
                break;
            case 'tripleQuestion':
                if (!isStringArr(answer)) {
                    findElement = questionBd.options.find((el) => {
                        return el.alt === answer[0].alt;
                    });
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2dhbWUtc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBR3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFOUIsTUFBTSxDQUFDLE9BQU8sT0FBTyxVQUFVO0lBUTdCLFlBQW9CLEtBQWtCO1FBQTFCOzs7O21CQUFRLEtBQUs7V0FBYTtRQVB0Qzs7Ozs7V0FBcUI7UUFDYjs7Ozs7V0FBOEI7UUFDOUI7Ozs7O1dBQW9CO1FBQzVCOzs7OztXQUErQjtRQUMvQjs7Ozs7V0FBOEI7UUFDOUI7Ozs7O1dBQXFDO1FBR25DLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hE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LENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwiZmlsZSI6Im1vZGVsL2dhbWUtc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4uL3ZpZXcvR2FtZS12aWV3LmpzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vY29udHJvbGxlci9yb3V0ZXIuanMnO1xuaW1wb3J0IEhlYWRlclZpZXcgZnJvbSAnLi4vdmlldy9IZWFkZXItdmlldy5qcyc7XG5pbXBvcnQgU3RhdGlzdGljVmlldyBmcm9tICcuLi92aWV3L1N0YXRpc3RpYy12aWV3LmpzJztcbmltcG9ydCB7IElRdWVzdE1vZGVsIH0gZnJvbSAnLi9xdWVzdC1tb2RlbC5qcyc7XG5pbXBvcnQgeyBUeXBlVmFyQW5zd2VyIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmdBcnIgfSBmcm9tICcuLi90eXBlcy90eXBlLWd1YXJkcy5qcyc7XG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxMDAwO1xuY29uc3Qgc2hvd1BsYXllckhlYWRlciA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4ge1xuICByb290OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfdGltZXI6IG51bGwgfCBOb2RlSlMuVGltZW91dDtcbiAgcHJpdmF0ZSBfdGltZUFuc3dlcjogbnVtYmVyO1xuICBoZWFkZXI6IEhlYWRlclZpZXcgfCB1bmRlZmluZWQ7XG4gIGNvbnRlbnQ6IEdhbWVWaWV3IHwgdW5kZWZpbmVkO1xuICBzdGF0aXN0aWM6IFN0YXRpc3RpY1ZpZXcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RlbDogSVF1ZXN0TW9kZWwpIHtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICB0aGlzLl90aW1lQW5zd2VyID0gMDtcblxuICAgIHRoaXMudXBkYXRlSGVhZGVyID0gdGhpcy51cGRhdGVIZWFkZXIuYmluZCh0aGlzKVxuICAgIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKVxuICAgIHRoaXMuX3RpY2sgPSB0aGlzLl90aWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUxldmVsID0gdGhpcy5jaGFuZ2VMZXZlbC5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290O1xuICB9XG5cbiAgY2hhbmdlTGV2ZWwoKSB7XG4gICAgdGhpcy5fdGltZUFuc3dlciA9IDA7XG4gICAgdGhpcy51cGRhdGVIZWFkZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRpc3RpYygpO1xuICAgIGNvbnN0IGxldmVsRGF0YSA9IHRoaXMubW9kZWwuZGF0YVt0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpXTtcbiAgICBjb25zdCBsZXZlbCA9IG5ldyBHYW1lVmlldyhsZXZlbERhdGEsIHRoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCkpXG5cbiAgICB0aGlzLmNoYW5nZUNvbnRlbnRWaWV3KGxldmVsKTtcbiAgICBsZXZlbC5vbkFuc3dlciA9IHRoaXMub25BbnN3ZXIuYmluZCh0aGlzKTtcbiAgICBsZXZlbC5yZXNpemVJbWFnZXMoKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXJWaWV3KHRoaXMubW9kZWwuc3RhdGUsIHNob3dQbGF5ZXJIZWFkZXIpO1xuICAgIHRoaXMuY29udGVudCA9IG5ldyBHYW1lVmlldyh0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV0sIHRoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCkpXG4gICAgdGhpcy5zdGF0aXN0aWMgPSBuZXcgU3RhdGlzdGljVmlldyh0aGlzLm1vZGVsLnN0YXRlKTtcblxuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlci5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnN0YXRpc3RpYy5lbGVtZW50KTtcblxuICAgIHRoaXMuY29udGVudC5vbkFuc3dlciA9IHRoaXMub25BbnN3ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbnRlbnQucmVzaXplSW1hZ2VzKCk7XG4gICAgdGhpcy5fdGljaygpO1xuICB9XG5cbiAgc3RvcEdhbWUoKSB7XG4gICAgdGhpcy5fdGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gIH1cblxuICBlbmRHYW1lKGlzRmFpbDogYm9vbGVhbikge1xuICAgIHRoaXMubW9kZWwuaXNGYWlsID0gaXNGYWlsO1xuICAgIHRoaXMubW9kZWwucmVzdWx0UG9pbnRzID0gdGhpcy5tb2RlbC5yZXN1bHRHYW1lKClcbiAgICBSb3V0ZXIuc2hvd1Jlc3VsdCh0aGlzLm1vZGVsLCBpc0ZhaWwpO1xuICB9XG5cbiAgX3RpY2soKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuc3RhdGUudGltZSA+IDApIHtcbiAgICAgIHRoaXMubW9kZWwudGljaygpXG4gICAgICB0aGlzLl90aW1lQW5zd2VyKys7XG4gICAgICB0aGlzLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3RpY2soKSwgT05FX1NFQ09ORCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbkFuc3dlciguLi5hbnN3ZXI6ICBIVE1MSW1hZ2VFbGVtZW50W10gfCBzdHJpbmdbXSkge1xuICAgIHRoaXMuc3RvcEdhbWUoKTtcblxuICAgIGNvbnN0IHF1ZXN0aW9uQmQgPSB0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV07XG4gICAgbGV0IGlzQ29ycmVjdEFuc3cgPSBmYWxzZTtcbiAgICBsZXQgZmluZEVsZW1lbnQ7XG5cbiAgICBzd2l0Y2ggKHF1ZXN0aW9uQmQudHlwZSkge1xuICAgICAgY2FzZSAnc2luZ2xlUXVlc3Rpb24nOlxuICAgICAgY2FzZSAnZG91YmxlUXVlc3Rpb24nOlxuICAgICAgICBpZiAoaXNTdHJpbmdBcnIoYW5zd2VyKSkge1xuICAgICAgICAgIGlzQ29ycmVjdEFuc3cgPSBhbnN3ZXIuZXZlcnkoKGVsOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAocXVlc3Rpb25CZC5vcHRpb25zW2luZGV4XS5hbnN3ZXIgPT09IGVsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyaXBsZVF1ZXN0aW9uJzpcbiAgICAgICAgIGlmICghaXNTdHJpbmdBcnIoYW5zd2VyKSkge1xuICAgICAgICAgIGZpbmRFbGVtZW50ID0gcXVlc3Rpb25CZC5vcHRpb25zLmZpbmQoKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWwuYWx0ID09PSBhbnN3ZXJbMF0uYWx0O1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpc0NvcnJlY3RBbnN3ID0gKGZpbmRFbGVtZW50Py5hbnN3ZXIgPT09ICdwYWludCcpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcHJvY2VzcyB1c2VyIHJlc3BvbnNlLiBDaGVjayBkYXRhYmFzZScpO1xuICAgIH1cblxuICAgIHRoaXMubW9kZWwuYW5zd2VyKGlzQ29ycmVjdEFuc3csIHRoaXMuX3RpbWVBbnN3ZXIpO1xuXG4gICAgaWYgKHRoaXMubW9kZWwuaXNHYW1lT3ZlcigpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUodHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLmhhc05leHRMZXZlbCgpKSB7XG4gICAgICB0aGlzLm1vZGVsLm5leHRMZXZlbCgpO1xuICAgICAgdGhpcy5jaGFuZ2VMZXZlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZEdhbWUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyVmlldyh0aGlzLm1vZGVsLnN0YXRlLCBzaG93UGxheWVySGVhZGVyKTtcbiAgICB0aGlzLmhlYWRlciAmJiB0aGlzLnJvb3QucmVwbGFjZUNoaWxkKGhlYWRlci5lbGVtZW50LCB0aGlzLmhlYWRlci5lbGVtZW50KVxuICAgIGhlYWRlci5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgUm91dGVyLnNob3dXZWxsY29tKCk7XG4gICAgfVxuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICB9XG5cbiAgY2hhbmdlQ29udGVudFZpZXcodmlldzogYW55KSB7XG4gICAgdGhpcy5jb250ZW50ICYmIHRoaXMucm9vdC5yZXBsYWNlQ2hpbGQodmlldy5lbGVtZW50LCB0aGlzLmNvbnRlbnQuZWxlbWVudCk7XG4gICAgdGhpcy5jb250ZW50ID0gdmlldztcbiAgfVxuXG4gIHVwZGF0ZVN0YXRpc3RpYygpIHtcbiAgICBjb25zdCBzdGF0aXN0aWMgPSBuZXcgU3RhdGlzdGljVmlldyh0aGlzLm1vZGVsLnN0YXRlKTtcbiAgICB0aGlzLnN0YXRpc3RpYyAmJiB0aGlzLnJvb3QucmVwbGFjZUNoaWxkKHN0YXRpc3RpYy5lbGVtZW50LCB0aGlzLnN0YXRpc3RpYy5lbGVtZW50KTtcbiAgICB0aGlzLnN0YXRpc3RpYyA9IHN0YXRpc3RpYztcbiAgfVxufVxuIl19