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
                findElement = questionBd.options.find((el) => {
                    return el.alt === answer[0].alt;
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2dhbWUtc2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBR3RELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxPQUFPLFVBQVU7SUFRN0IsWUFBb0IsS0FBa0I7UUFBMUI7Ozs7bUJBQVEsS0FBSztXQUFhO1FBUHRDOzs7OztXQUFxQjtRQUNiOzs7OztXQUE4QjtRQUM5Qjs7Ozs7V0FBb0I7UUFDNUI7Ozs7O1dBQStCO1FBQy9COzs7OztXQUE4QjtRQUM5Qjs7Ozs7V0FBcUM7UUFHbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElB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QUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsImZpbGUiOiJtb2RlbC9nYW1lLXNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVmlldyBmcm9tICcuLi92aWV3L0dhbWUtdmlldy5qcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcbmltcG9ydCBIZWFkZXJWaWV3IGZyb20gJy4uL3ZpZXcvSGVhZGVyLXZpZXcuanMnO1xuaW1wb3J0IFN0YXRpc3RpY1ZpZXcgZnJvbSAnLi4vdmlldy9TdGF0aXN0aWMtdmlldy5qcyc7XG5pbXBvcnQgeyBJUXVlc3RNb2RlbCB9IGZyb20gJy4vcXVlc3QtbW9kZWwuanMnO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IHNob3dQbGF5ZXJIZWFkZXIgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIHtcbiAgcm9vdDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX3RpbWVyOiBudWxsIHwgTm9kZUpTLlRpbWVvdXQ7XG4gIHByaXZhdGUgX3RpbWVBbnN3ZXI6IG51bWJlcjtcbiAgaGVhZGVyOiBIZWFkZXJWaWV3IHwgdW5kZWZpbmVkO1xuICBjb250ZW50OiBHYW1lVmlldyB8IHVuZGVmaW5lZDtcbiAgc3RhdGlzdGljOiBTdGF0aXN0aWNWaWV3IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IElRdWVzdE1vZGVsKSB7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgdGhpcy5fdGltZUFuc3dlciA9IDA7XG5cbiAgICB0aGlzLnVwZGF0ZUhlYWRlciA9IHRoaXMudXBkYXRlSGVhZGVyLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLl90aWNrID0gdGhpcy5fdGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VMZXZlbCA9IHRoaXMuY2hhbmdlTGV2ZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIGNoYW5nZUxldmVsKCkge1xuICAgIHRoaXMuX3RpbWVBbnN3ZXIgPSAwO1xuICAgIHRoaXMudXBkYXRlSGVhZGVyKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0aXN0aWMoKTtcbiAgICBjb25zdCBsZXZlbERhdGEgPSB0aGlzLm1vZGVsLmRhdGFbdGhpcy5tb2RlbC5nZXRDdXJyZW50TGV2ZWwoKV07XG4gICAgY29uc3QgbGV2ZWwgPSBuZXcgR2FtZVZpZXcobGV2ZWxEYXRhLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuXG4gICAgdGhpcy5jaGFuZ2VDb250ZW50VmlldyhsZXZlbCk7XG4gICAgbGV2ZWwub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgbGV2ZWwucmVzaXplSW1hZ2VzKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyVmlldyh0aGlzLm1vZGVsLnN0YXRlLCBzaG93UGxheWVySGVhZGVyKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBuZXcgR2FtZVZpZXcodGhpcy5tb2RlbC5kYXRhW3RoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCldLCB0aGlzLm1vZGVsLmdldEN1cnJlbnRMZXZlbCgpKVxuICAgIHRoaXMuc3RhdGlzdGljID0gbmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5tb2RlbC5zdGF0ZSk7XG5cbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIuZWxlbWVudCk7XG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMuY29udGVudC5lbGVtZW50KTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5zdGF0aXN0aWMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmNvbnRlbnQub25BbnN3ZXIgPSB0aGlzLm9uQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb250ZW50LnJlc2l6ZUltYWdlcygpO1xuICAgIHRoaXMuX3RpY2soKTtcbiAgfVxuXG4gIHN0b3BHYW1lKCkge1xuICAgIHRoaXMuX3RpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgZW5kR2FtZShpc0ZhaWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1vZGVsLmlzRmFpbCA9IGlzRmFpbDtcbiAgICB0aGlzLm1vZGVsLnJlc3VsdFBvaW50cyA9IHRoaXMubW9kZWwucmVzdWx0R2FtZSgpXG4gICAgUm91dGVyLnNob3dSZXN1bHQodGhpcy5tb2RlbCwgaXNGYWlsKTtcbiAgfVxuXG4gIF90aWNrKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLnN0YXRlLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnRpY2soKVxuICAgICAgdGhpcy5fdGltZUFuc3dlcisrO1xuICAgICAgdGhpcy51cGRhdGVIZWFkZXIoKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl90aWNrKCksIE9ORV9TRUNPTkQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZEdhbWUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25BbnN3ZXIoLi4uYW5zd2VyOiBhbnkpIHtcbiAgICB0aGlzLnN0b3BHYW1lKCk7XG5cbiAgICBjb25zdCBxdWVzdGlvbkJkID0gdGhpcy5tb2RlbC5kYXRhW3RoaXMubW9kZWwuZ2V0Q3VycmVudExldmVsKCldO1xuICAgIGxldCBpc0NvcnJlY3RBbnN3ID0gZmFsc2U7XG4gICAgbGV0IGZpbmRFbGVtZW50O1xuXG4gICAgc3dpdGNoIChxdWVzdGlvbkJkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZVF1ZXN0aW9uJzpcbiAgICAgIGNhc2UgJ2RvdWJsZVF1ZXN0aW9uJzpcbiAgICAgICAgaXNDb3JyZWN0QW5zdyA9IGFuc3dlci5ldmVyeSgoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAocXVlc3Rpb25CZC5vcHRpb25zW2luZGV4XS5hbnN3ZXIgPT09IGVsKVxuICAgICAgICB9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpcGxlUXVlc3Rpb24nOlxuICAgICAgICBmaW5kRWxlbWVudCA9IHF1ZXN0aW9uQmQub3B0aW9ucy5maW5kKChlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbC5hbHQgPT09IGFuc3dlclswXS5hbHQ7XG4gICAgICAgIH0pXG4gICAgICAgIGlzQ29ycmVjdEFuc3cgPSAoZmluZEVsZW1lbnQ/LmFuc3dlciA9PT0gJ3BhaW50Jyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcm9jZXNzIHVzZXIgcmVzcG9uc2UuIENoZWNrIGRhdGFiYXNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlbC5hbnN3ZXIoaXNDb3JyZWN0QW5zdywgdGhpcy5fdGltZUFuc3dlcik7XG5cbiAgICBpZiAodGhpcy5tb2RlbC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwuaGFzTmV4dExldmVsKCkpIHtcbiAgICAgIHRoaXMubW9kZWwubmV4dExldmVsKCk7XG4gICAgICB0aGlzLmNoYW5nZUxldmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kR2FtZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXJWaWV3KHRoaXMubW9kZWwuc3RhdGUsIHNob3dQbGF5ZXJIZWFkZXIpO1xuICAgIHRoaXMuaGVhZGVyICYmIHRoaXMucm9vdC5yZXBsYWNlQ2hpbGQoaGVhZGVyLmVsZW1lbnQsIHRoaXMuaGVhZGVyLmVsZW1lbnQpXG4gICAgaGVhZGVyLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICBSb3V0ZXIuc2hvd1dlbGxjb20oKTtcbiAgICB9XG4gICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gIH1cblxuICBjaGFuZ2VDb250ZW50Vmlldyh2aWV3OiBhbnkpIHtcbiAgICB0aGlzLmNvbnRlbnQgJiYgdGhpcy5yb290LnJlcGxhY2VDaGlsZCh2aWV3LmVsZW1lbnQsIHRoaXMuY29udGVudC5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRlbnQgPSB2aWV3O1xuICB9XG5cbiAgdXBkYXRlU3RhdGlzdGljKCkge1xuICAgIGNvbnN0IHN0YXRpc3RpYyA9IG5ldyBTdGF0aXN0aWNWaWV3KHRoaXMubW9kZWwuc3RhdGUpO1xuICAgIHRoaXMuc3RhdGlzdGljICYmIHRoaXMucm9vdC5yZXBsYWNlQ2hpbGQoc3RhdGlzdGljLmVsZW1lbnQsIHRoaXMuc3RhdGlzdGljLmVsZW1lbnQpO1xuICAgIHRoaXMuc3RhdGlzdGljID0gc3RhdGlzdGljO1xuICB9XG59XG4iXX0=