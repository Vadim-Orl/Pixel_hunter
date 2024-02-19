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
                if (answer[0] instanceof HTMLImageElement) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2dhbWUtc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBR3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFFOUIsTUFBTSxDQUFDLE9BQU8sT0FBTyxVQUFVO0lBUTdCLFlBQW9CLEtBQWtCO1FBQTFCOzs7O21CQUFRLEtBQUs7V0FBYTtRQVB0Qzs7Ozs7V0FBcUI7UUFDYjs7Ozs7V0FBOEI7UUFDOUI7Ozs7O1dBQW9CO1FBQzVCOzs7OztXQUErQjtRQUMvQjs7Ozs7V0FBOEI7UUFDOUI7Ozs7O1dBQXFDO1FBR25DLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hE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M0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsImZpbGUiOiJtb2RlbC9nYW1lLXNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVmlldyBmcm9tICcuLi92aWV3L0dhbWUtdmlldy5qcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcbmltcG9ydCBIZWFkZXJWaWV3IGZyb20gJy4uL3ZpZXcvSGVhZGVyLXZpZXcuanMnO1xuaW1wb3J0IFN0YXRpc3RpY1ZpZXcgZnJvbSAnLi4vdmlldy9TdGF0aXN0aWMtdmlldy5qcyc7XG5pbXBvcnQgeyBJUXVlc3RNb2RlbCB9IGZyb20gJy4vcXVlc3QtbW9kZWwuanMnO1xuaW1wb3J0IHsgVHlwZVZhckFuc3dlciB9IGZyb20gJy4uL3R5cGVzL3R5cGVzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nQXJyIH0gZnJvbSAnLi4vdHlwZXMvdHlwZS1ndWFyZHMuanMnO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IHNob3dQbGF5ZXJIZWFkZXIgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIHtcbiAgcm9vdDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX3RpbWVyOiBudWxsIHwgTm9kZUpTLlRpbWVvdXQ7XG4gIHByaXZhdGUgX3RpbWVBbnN3ZXI6IG51bWJlcjtcbiAgaGVhZGVyOiBIZWFkZXJWaWV3IHwgdW5kZWZpbmVkO1xuICBjb250ZW50OiBHYW1lVmlldyB8IHVuZGVmaW5lZDtcbiAgc3RhdGlzdGljOiBTdGF0aXN0aWNWaWV3IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IElRdWVzdE1vZGVsKSB7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZUFuc3dlciA9IDA7XG5cbiAgICB0aGlzLnVwZGF0ZUhlYWRlciA9IHRoaXMudXBkYXRlSGVhZGVyLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLl90aWNrID0gdGhpcy5fdGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VMZXZlbCA9IHRoaXMuY2hhbmdlTGV2ZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIGNoYW5nZUxldmVsKCkge1xuICAgIHRoaXMuX3RpbWVBbnN3ZXIgPSAwO1xuICAgIHRoaXMudXBkYXRlSGVhZGVyKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0aXN0aWMoKTtcbiAgICBjb25zdCBsZXZlbERhdGEgPSB0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV07XG4gICAgY29uc3QgbGV2ZWwgPSBuZXcgR2FtZVZpZXcobGV2ZWxEYXRhLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuXG4gICAgdGhpcy5jaGFuZ2VDb250ZW50VmlldyhsZXZlbCk7XG4gICAgbGV2ZWwub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgbGV2ZWwucmVzaXplSW1hZ2VzKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyVmlldyh0aGlzLm1vZGVsLnN0YXRlLCBzaG93UGxheWVySGVhZGVyKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBuZXcgR2FtZVZpZXcodGhpcy5tb2RlbC5kYXRhW3RoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCldLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuICAgIHRoaXMuc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG5cbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIuZWxlbWVudCk7XG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMuY29udGVudC5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmNvbnRlbnQub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb250ZW50LnJlc2l6ZUltYWdlcygpO1xuICAgIHRoaXMuX3RpY2soKTtcbiAgfVxuXG4gIHN0b3BHYW1lKCkge1xuICAgIHRoaXMuX3RpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgZW5kR2FtZShpc0ZhaWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1vZGVsLmlzRmFpbCA9IGlzRmFpbDtcbiAgICB0aGlzLm1vZGVsLnJlc3VsdFBvaW50cyA9IHRoaXMubW9kZWwucmVzdWx0R2FtZSgpXG4gICAgUm91dGVyLnNob3dSZXN1bHQodGhpcy5tb2RlbCwgaXNGYWlsKTtcbiAgfVxuXG4gIF90aWNrKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLnN0YXRlLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnRpY2soKVxuICAgICAgdGhpcy5fdGltZUFuc3dlcisrO1xuICAgICAgdGhpcy51cGRhdGVIZWFkZXIoKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl90aWNrKCksIE9ORV9TRUNPTkQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZEdhbWUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25BbnN3ZXIoLi4uYW5zd2VyOiAgSFRNTEltYWdlRWxlbWVudFtdKSB7XG4gICAgdGhpcy5zdG9wR2FtZSgpO1xuXG4gICAgY29uc3QgcXVlc3Rpb25CZCA9IHRoaXMubW9kZWwuZGF0YVt0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpXTtcbiAgICBsZXQgaXNDb3JyZWN0QW5zdyA9IGZhbHNlO1xuICAgIGxldCBmaW5kRWxlbWVudDtcblxuICAgIHN3aXRjaCAocXVlc3Rpb25CZC50eXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGVRdWVzdGlvbic6XG4gICAgICBjYXNlICdkb3VibGVRdWVzdGlvbic6XG4gICAgICAgIGlmIChpc1N0cmluZ0FycihhbnN3ZXIpKSB7XG4gICAgICAgICAgaXNDb3JyZWN0QW5zdyA9IGFuc3dlci5ldmVyeSgoZWw6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChxdWVzdGlvbkJkLm9wdGlvbnNbaW5kZXhdLmFuc3dlciA9PT0gZWwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpcGxlUXVlc3Rpb24nOlxuICAgICAgICAgaWYgKGFuc3dlclswXSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICBmaW5kRWxlbWVudCA9IHF1ZXN0aW9uQmQub3B0aW9ucy5maW5kKChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmFsdCA9PT0gYW5zd2VyWzBdLmFsdDtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaXNDb3JyZWN0QW5zdyA9IChmaW5kRWxlbWVudD8uYW5zd2VyID09PSAncGFpbnQnKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHByb2Nlc3MgdXNlciByZXNwb25zZS4gQ2hlY2sgZGF0YWJhc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsLmFuc3dlcihpc0NvcnJlY3RBbnN3LCB0aGlzLl90aW1lQW5zd2VyKTtcblxuICAgIGlmICh0aGlzLm1vZGVsLmlzR2FtZU92ZXIoKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlbC5oYXNOZXh0TGV2ZWwoKSkge1xuICAgICAgdGhpcy5tb2RlbC5uZXh0TGV2ZWwoKTtcbiAgICAgIHRoaXMuY2hhbmdlTGV2ZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRHYW1lKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlclZpZXcodGhpcy5tb2RlbC5zdGF0ZSwgc2hvd1BsYXllckhlYWRlcik7XG4gICAgdGhpcy5oZWFkZXIgJiYgdGhpcy5yb290LnJlcGxhY2VDaGlsZChoZWFkZXIuZWxlbWVudCwgdGhpcy5oZWFkZXIuZWxlbWVudClcbiAgICBoZWFkZXIub25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgIFJvdXRlci5zaG93V2VsbGNvbSgpO1xuICAgIH1cbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnRWaWV3KHZpZXc6IGFueSkge1xuICAgIHRoaXMuY29udGVudCAmJiB0aGlzLnJvb3QucmVwbGFjZUNoaWxkKHZpZXcuZWxlbWVudCwgdGhpcy5jb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGVudCA9IHZpZXc7XG4gIH1cblxuICB1cGRhdGVTdGF0aXN0aWMoKSB7XG4gICAgY29uc3Qgc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG4gICAgdGhpcy5zdGF0aXN0aWMgJiYgdGhpcy5yb290LnJlcGxhY2VDaGlsZChzdGF0aXN0aWMuZWxlbWVudCwgdGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG4gICAgdGhpcy5zdGF0aXN0aWMgPSBzdGF0aXN0aWM7XG4gIH1cbn1cbiJdfQ==