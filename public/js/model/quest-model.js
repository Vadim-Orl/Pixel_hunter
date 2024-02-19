import { isGameModel } from '../types/type-guards.js';
import { INITIAL_GAME, changeLevel, tick, resultGame, answer, decLives, } from '../utils/bisnesFunction.js';
export default class QuestModel {
    constructor(data, playerName) {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
        Object.defineProperty(this, "playerName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: playerName
        });
        Object.defineProperty(this, "_state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resultPoints", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isFail", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.restart();
        this.resultPoints = 0;
        this.isFail = false;
        this._state = INITIAL_GAME;
    }
    get state() {
        return Object.freeze(this._state);
    }
    hasNextLevel() {
        return changeLevel(this._state, this._state.level + 1) !== 0;
    }
    nextLevel() {
        const newState = changeLevel(this._state, this._state.level + 1);
        if (isGameModel(newState)) {
            return this._state = newState;
        }
    }
    decLives() {
        const newState = decLives(this._state);
        if (isGameModel(newState)) {
            return this._state = newState;
        }
    }
    getLives() {
        return this._state.lives;
    }
    getCurrentLevel() {
        return this._state.level;
    }
    gameOver() {
        return (this._state);
    }
    restart() {
        this._state = INITIAL_GAME;
    }
    isGameOver() {
        return this._state.lives <= 0;
    }
    tick() {
        this._state = tick(this._state);
    }
    answer(isCorrectAnsw, timeAnswer) {
        this._state = answer(this._state, isCorrectAnsw, timeAnswer);
    }
    resultGame() {
        return resultGame(this._state);
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3F1ZXN0LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxPQUFPLEVBQ0wsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQzlELE1BQU0sNEJBQTRCLENBQUM7QUF3QnBDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVTtJQUs3QixZQUFtQixJQUFpQixFQUFTLFVBQWtCO1FBQW5EOzs7O21CQUFPLElBQUk7V0FBYTtRQUFFOzs7O21CQUFPLFVBQVU7V0FBUTtRQUp0RDs7Ozs7V0FBbUI7UUFDNUI7Ozs7O1dBQXFCO1FBQ3JCOzs7OztXQUFnQjtRQUdkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFJLEtBQUs7UUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRSxRQUFRLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQXNCLEVBQUUsVUFBa0I7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNGIiwiZmlsZSI6Im1vZGVsL3F1ZXN0LW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNHYW1lTW9kZWwgfSBmcm9tICcuLi90eXBlcy90eXBlLWd1YXJkcy5qcyc7XG5pbXBvcnQgeyBJR2FtZURhdGEgfSBmcm9tICcuLi90eXBlcy90eXBlcy5qcyc7XG5pbXBvcnQge1xuICBJTklUSUFMX0dBTUUsIGNoYW5nZUxldmVsLCB0aWNrLCByZXN1bHRHYW1lLCBhbnN3ZXIsIGRlY0xpdmVzLFxufSBmcm9tICcuLi91dGlscy9iaXNuZXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgeyBJU3RhdGVHYW1lIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdE1vZGVsIHtcbiAgcmVzdWx0UG9pbnRzOiBudW1iZXI7XG4gIGlzRmFpbDogYm9vbGVhbiB8IG51bGw7XG4gIGRhdGE6IElHYW1lRGF0YVtdLFxuICByZWFkb25seSBzdGF0ZTogSVN0YXRlR2FtZSxcbiAgcGxheWVyTmFtZTogc3RyaW5nXG5cbiAgaGFzTmV4dExldmVsKCk6IGJvb2xlYW4sXG4gIG5leHRMZXZlbCgpOiAgSVN0YXRlR2FtZSB8IHVuZGVmaW5lZCxcbiAgZGVjTGl2ZXMoKTogSVN0YXRlR2FtZSB8IHVuZGVmaW5lZCxcbiAgZ2V0TGl2ZXMoKTogbnVtYmVyLFxuICBnZXRDdXJyZW50TGV2ZWwoKTogbnVtYmVyLFxuICBnYW1lT3ZlcigpOiBJU3RhdGVHYW1lLFxuICByZXN0YXJ0KCk6IHZvaWQsXG4gIGlzR2FtZU92ZXIoKTogYm9vbGVhbixcbiAgdGljaygpOiB2b2lkLFxuICBhbnN3ZXIoaXNDb3JyZWN0QW5zdzogYm9vbGVhbiwgdGltZUFuc3dlcjogbnVtYmVyKTogdm9pZCxcbiAgcmVzdWx0R2FtZSgpOiBudW1iZXJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdE1vZGVsIGltcGxlbWVudHMgSVF1ZXN0TW9kZWwge1xuICBwcml2YXRlICBfc3RhdGU6IElTdGF0ZUdhbWU7XG4gIHJlc3VsdFBvaW50czogbnVtYmVyO1xuICBpc0ZhaWw6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IElHYW1lRGF0YVtdLCBwdWJsaWMgcGxheWVyTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgdGhpcy5yZXN1bHRQb2ludHMgPSAwO1xuICAgIHRoaXMuaXNGYWlsID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdGUgPSBJTklUSUFMX0dBTUU7XG4gIH1cblxuXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzLl9zdGF0ZSk7XG4gIH1cblxuICBoYXNOZXh0TGV2ZWwoKSB7XG4gICAgcmV0dXJuIGNoYW5nZUxldmVsKHRoaXMuX3N0YXRlLCB0aGlzLl9zdGF0ZS5sZXZlbCArIDEpICE9PSAwO1xuICB9XG5cbiAgbmV4dExldmVsKCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gY2hhbmdlTGV2ZWwodGhpcy5fc3RhdGUsIHRoaXMuX3N0YXRlLmxldmVsICsgMSlcbiAgICBpZiAoaXNHYW1lTW9kZWwobmV3U3RhdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGUgPW5ld1N0YXRlO1xuICAgIH1cbiAgfVxuXG4gIGRlY0xpdmVzKCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gZGVjTGl2ZXModGhpcy5fc3RhdGUpXG4gICAgaWYgKGlzR2FtZU1vZGVsKG5ld1N0YXRlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGl2ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmxpdmVzO1xuICB9XG5cbiAgZ2V0Q3VycmVudExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5sZXZlbDtcbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fc3RhdGUpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IElOSVRJQUxfR0FNRTtcbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmxpdmVzIDw9IDA7XG4gIH1cblxuICB0aWNrKCkge1xuICAgIHRoaXMuX3N0YXRlID0gdGljayh0aGlzLl9zdGF0ZSk7XG4gIH1cblxuICBhbnN3ZXIoaXNDb3JyZWN0QW5zdzogYm9vbGVhbiwgdGltZUFuc3dlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBhbnN3ZXIodGhpcy5fc3RhdGUsIGlzQ29ycmVjdEFuc3csIHRpbWVBbnN3ZXIpO1xuICB9XG5cbiAgcmVzdWx0R2FtZSgpIHtcbiAgICByZXR1cm4gcmVzdWx0R2FtZSh0aGlzLl9zdGF0ZSlcbiAgfVxufVxuIl19