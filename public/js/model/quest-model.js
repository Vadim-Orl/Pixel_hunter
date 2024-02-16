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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3F1ZXN0LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RCxPQUFPLEVBQ0wsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQzlELE1BQU0sNEJBQTRCLENBQUM7QUF1QnBDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVTtJQUs3QixZQUFtQixJQUFpQixFQUFTLFVBQWtCO1FBQW5EOzs7O21CQUFPLElBQUk7V0FBYTtRQUFFOzs7O21CQUFPLFVBQVU7V0FBUTtRQUp0RDs7Ozs7V0FBbUI7UUFDNUI7Ozs7O1dBQXFCO1FBQ3JCOzs7OztXQUFnQjtRQUdkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFJLEtBQUs7UUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRSxRQUFRLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQXNCLEVBQUUsVUFBa0I7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNGIiwiZmlsZSI6Im1vZGVsL3F1ZXN0LW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNHYW1lTW9kZWwgfSBmcm9tICcuLi90eXBlcy90eXBlLWd1YXJkcy5qcyc7XG5pbXBvcnQgeyBJR2FtZURhdGEgfSBmcm9tICcuLi90eXBlcy90eXBlcy5qcyc7XG5pbXBvcnQge1xuICBJTklUSUFMX0dBTUUsIGNoYW5nZUxldmVsLCB0aWNrLCByZXN1bHRHYW1lLCBhbnN3ZXIsIGRlY0xpdmVzLCBJU3RhdGVHYW1lLFxufSBmcm9tICcuLi91dGlscy9iaXNuZXNGdW5jdGlvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0TW9kZWwge1xuICByZXN1bHRQb2ludHM6IG51bWJlcjtcbiAgaXNGYWlsOiBib29sZWFuIHwgbnVsbDtcbiAgZGF0YTogSUdhbWVEYXRhW10sXG4gIHJlYWRvbmx5IHN0YXRlOiBJU3RhdGVHYW1lLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmdcblxuICBoYXNOZXh0TGV2ZWwoKTogYm9vbGVhbixcbiAgbmV4dExldmVsKCk6ICBJU3RhdGVHYW1lIHwgdW5kZWZpbmVkLFxuICBkZWNMaXZlcygpOiBJU3RhdGVHYW1lIHwgdW5kZWZpbmVkLFxuICBnZXRMaXZlcygpOiBudW1iZXIsXG4gIGdldEN1cnJlbnRMZXZlbCgpOiBudW1iZXIsXG4gIGdhbWVPdmVyKCk6IElTdGF0ZUdhbWUsXG4gIHJlc3RhcnQoKTogdm9pZCxcbiAgaXNHYW1lT3ZlcigpOiBib29sZWFuLFxuICB0aWNrKCk6IHZvaWQsXG4gIGFuc3dlcihpc0NvcnJlY3RBbnN3OiBib29sZWFuLCB0aW1lQW5zd2VyOiBudW1iZXIpOiB2b2lkLFxuICByZXN1bHRHYW1lKCk6IG51bWJlclxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0TW9kZWwgaW1wbGVtZW50cyBJUXVlc3RNb2RlbCB7XG4gIHByaXZhdGUgIF9zdGF0ZTogSVN0YXRlR2FtZTtcbiAgcmVzdWx0UG9pbnRzOiBudW1iZXI7XG4gIGlzRmFpbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogSUdhbWVEYXRhW10sIHB1YmxpYyBwbGF5ZXJOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICB0aGlzLnJlc3VsdFBvaW50cyA9IDA7XG4gICAgdGhpcy5pc0ZhaWwgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9IElOSVRJQUxfR0FNRTtcbiAgfVxuXG5cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMuX3N0YXRlKTtcbiAgfVxuXG4gIGhhc05leHRMZXZlbCgpIHtcbiAgICByZXR1cm4gY2hhbmdlTGV2ZWwodGhpcy5fc3RhdGUsIHRoaXMuX3N0YXRlLmxldmVsICsgMSkgIT09IDA7XG4gIH1cblxuICBuZXh0TGV2ZWwoKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBjaGFuZ2VMZXZlbCh0aGlzLl9zdGF0ZSwgdGhpcy5fc3RhdGUubGV2ZWwgKyAxKVxuICAgIGlmIChpc0dhbWVNb2RlbChuZXdTdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9bmV3U3RhdGU7XG4gICAgfVxuICB9XG5cbiAgZGVjTGl2ZXMoKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBkZWNMaXZlcyh0aGlzLl9zdGF0ZSlcbiAgICBpZiAoaXNHYW1lTW9kZWwobmV3U3RhdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRMaXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUubGl2ZXM7XG4gIH1cblxuICBnZXRDdXJyZW50TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmxldmVsO1xuICB9XG5cbiAgZ2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9zdGF0ZSk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMuX3N0YXRlID0gSU5JVElBTF9HQU1FO1xuICB9XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUubGl2ZXMgPD0gMDtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB0aWNrKHRoaXMuX3N0YXRlKTtcbiAgfVxuXG4gIGFuc3dlcihpc0NvcnJlY3RBbnN3OiBib29sZWFuLCB0aW1lQW5zd2VyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGFuc3dlcih0aGlzLl9zdGF0ZSwgaXNDb3JyZWN0QW5zdywgdGltZUFuc3dlcik7XG4gIH1cblxuICByZXN1bHRHYW1lKCkge1xuICAgIHJldHVybiByZXN1bHRHYW1lKHRoaXMuX3N0YXRlKVxuICB9XG59XG4iXX0=