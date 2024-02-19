import AbstractView from './Abstract-view.js';
import { CONSTANTS } from '../utils/constants.js';
import Router from '../controller/router.js';
export default class HeaderView extends AbstractView {
    constructor(state, hasPlayerConsole = false) {
        super('header', ['header']);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: state
        });
        Object.defineProperty(this, "hasPlayerConsole", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: hasPlayerConsole
        });
    }
    get template() {
        if (this.hasPlayerConsole) {
            return `
            <div class="header__back">
              <span class="back">
                <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                <img src="img/logo_small.png" width="101" height="44">
              </span>
            </div>
            <h1 class="game__timer">${this.state?.time}</h1>
            <div class="game__lives">
               ${this.state?.lives && new Array(CONSTANTS.OPTION_GAME.MAX_LIVES - this.state.lives)
                .fill('<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">')
                .join('')}
               ${new Array(this.state?.lives)
                .fill('<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">')
                .join('')}
                </div>
            `;
        }
        return `
              <div class="header__back">
                <span class="back">
                  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                   <img src="img/logo_small.png" width="101" height="44">
                </span>
              </div>
            `;
    }
    onClick() {
        Router.showWellcom();
    }
    bind() {
        this.element.querySelector('.back')?.addEventListener('click', () => {
            this.onClick();
        });
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvSGVhZGVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBRzdDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVyxTQUFRLFlBQVk7SUFDbEQsWUFBb0IsS0FBa0IsRUFBVSxtQkFBbUIsS0FBSztRQUN0RSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQURqQjs7OzttQkFBUSxLQUFLO1dBQWE7UUFBRTs7OzttQkFBUSxnQkFBZ0I7V0FBUTtJQUV4RSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixPQUFPOzs7Ozs7O3NDQU95QixJQUFJLENBQUMsS0FBSyxFQUFFLElBQUk7O2lCQUVyQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDOUYsSUFBSSxDQUFDLHdGQUF3RixDQUFDO2lCQUM5RixJQUFJLENBQUMsRUFBRSxDQUFDO2lCQUNJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO2lCQUN4QyxJQUFJLENBQUMsdUZBQXVGLENBQUM7aUJBQzdGLElBQUksQ0FBQyxFQUFFLENBQUM7O2FBRUEsQ0FBQTtRQUNULENBQUM7UUFFRCxPQUFPOzs7Ozs7O2FBT0UsQ0FBQTtJQUNYLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNsRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJmaWxlIjoidmlldy9IZWFkZXItdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFZpZXcgZnJvbSAnLi9BYnN0cmFjdC12aWV3LmpzJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvcm91dGVyLmpzJztcbmltcG9ydCB7IElTdGF0ZUdhbWUgfSBmcm9tICcuLi91dGlscy9iaXNuZXNGdW5jdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlPzogSVN0YXRlR2FtZSwgcHJpdmF0ZSBoYXNQbGF5ZXJDb25zb2xlID0gZmFsc2UpIHtcbiAgICBzdXBlcignaGVhZGVyJywgWydoZWFkZXInXSlcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAodGhpcy5oYXNQbGF5ZXJDb25zb2xlKSB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fYmFja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnBuZ1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJnYW1lX190aW1lclwiPiR7dGhpcy5zdGF0ZT8udGltZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWVfX2xpdmVzXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuc3RhdGU/LmxpdmVzICYmIG5ldyBBcnJheShDT05TVEFOVFMuT1BUSU9OX0dBTUUuTUFYX0xJVkVTIC0gdGhpcy5zdGF0ZS5saXZlcylcbiAgICAuZmlsbCgnPGltZyBzcmM9XCJpbWcvaGVhcnRfX2VtcHR5LnN2Z1wiIGNsYXNzPVwiZ2FtZV9faGVhcnRcIiBhbHQ9XCJMaWZlXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCI+JylcbiAgICAuam9pbignJyl9XG4gICAgICAgICAgICAgICAke25ldyBBcnJheSh0aGlzLnN0YXRlPy5saXZlcylcbiAgICAuZmlsbCgnPGltZyBzcmM9XCJpbWcvaGVhcnRfX2Z1bGwuc3ZnXCIgY2xhc3M9XCJnYW1lX19oZWFydFwiIGFsdD1cIkxpZmVcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIj4nKVxuICAgIC5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19iYWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcnJvd19sZWZ0LnN2Z1wiIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCI0NVwiIGFsdD1cIkJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvX3NtYWxsLnBuZ1wiIHdpZHRoPVwiMTAxXCIgaGVpZ2h0PVwiNDRcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBSb3V0ZXIuc2hvd1dlbGxjb20oKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==