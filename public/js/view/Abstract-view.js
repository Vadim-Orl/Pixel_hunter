const render = (template, tag, classes) => {
    console.log(classes);
    const newNode = document.createElement(tag);
    classes.forEach((el) => {
        if (el)
            newNode.classList.add(el);
    });
    newNode.innerHTML = template;
    return newNode;
};
class AbstractView {
    constructor(tag = 'div', classes = ['']) {
        Object.defineProperty(this, "tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tag
        });
        Object.defineProperty(this, "classes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: classes
        });
        Object.defineProperty(this, "_element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (new.target === AbstractView) {
            throw new Error('Can\'t instantiate AbstractView, only concrete one');
        }
    }
    get template() {
        return '';
    }
    get element() {
        if (this._element) {
            return this._element;
        }
        this._element = this.render();
        this.bind(this._element);
        return this._element;
    }
    render() {
        return render(this.template, this.tag, this.classes);
    }
    bind(_element) { }
}
export default AbstractView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvQWJzdHJhY3Qtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQWdCLEVBQUUsR0FBVyxFQUFFLE9BQWlCLEVBQUUsRUFBRTtJQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ3JCLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDN0IsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBZSxZQUFZO0lBR3pCLFlBQW1CLE1BQU0sS0FBSyxFQUFTLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFBekM7Ozs7bUJBQU8sR0FBRztXQUFRO1FBQUU7Ozs7bUJBQU8sT0FBTztXQUFPO1FBRnJEOzs7OztXQUFrQztRQUdoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUFFLENBQUM7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU07UUFDWixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFUyxJQUFJLENBQUMsUUFBcUIsSUFBRyxDQUFDO0NBQ3pDO0FBRUQsZUFBZSxZQUFZLENBQUMiLCJmaWxlIjoidmlldy9BYnN0cmFjdC12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyID0gKHRlbXBsYXRlOiBzdHJpbmcsIHRhZzogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zb2xlLmxvZyhjbGFzc2VzKVxuICBjb25zdCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBjbGFzc2VzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSBuZXdOb2RlLmNsYXNzTGlzdC5hZGQoZWwpXG4gIH0pXG5cbiAgbmV3Tm9kZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgcmV0dXJuIG5ld05vZGU7XG59O1xuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpZXcge1xuICBfZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRhZyA9ICdkaXYnLCBwdWJsaWMgY2xhc3NlcyA9IFsnJ10gKSB7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IEFic3RyYWN0Vmlldykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IGluc3RhbnRpYXRlIEFic3RyYWN0Vmlldywgb25seSBjb25jcmV0ZSBvbmUnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKTpzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5iaW5kKHRoaXMuX2VsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHJlbmRlcih0aGlzLnRlbXBsYXRlLCB0aGlzLnRhZywgdGhpcy5jbGFzc2VzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBiaW5kKF9lbGVtZW50OiBIVE1MRWxlbWVudCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RWaWV3O1xuIl19