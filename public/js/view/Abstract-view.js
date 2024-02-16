const render = (template, tag, classes) => {
    const newNode = document.createElement(tag);
    classes.forEach((el) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvQWJzdHJhY3Qtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQWdCLEVBQUUsR0FBVyxFQUFFLE9BQWlCLEVBQUUsRUFBRTtJQUNsRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMzQixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzdCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQWUsWUFBWTtJQUd6QixZQUFtQixNQUFNLEtBQUssRUFBUyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQXpDOzs7O21CQUFPLEdBQUc7V0FBUTtRQUFFOzs7O21CQUFPLE9BQU87V0FBTztRQUZyRDs7Ozs7V0FBa0M7UUFHaEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRSxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQUksT0FBTztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNO1FBQ1osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRVMsSUFBSSxDQUFDLFFBQXFCLElBQUcsQ0FBQztDQUN6QztBQUVELGVBQWUsWUFBWSxDQUFDIiwiZmlsZSI6InZpZXcvQWJzdHJhY3Qtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbmRlciA9ICh0ZW1wbGF0ZTogc3RyaW5nLCB0YWc6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG5ld05vZGUuY2xhc3NMaXN0LmFkZChlbClcbiAgfSlcblxuICBuZXdOb2RlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gbmV3Tm9kZTtcbn07XG5cbmFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmlldyB7XG4gIF9lbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFnID0gJ2RpdicsIHB1YmxpYyBjbGFzc2VzID0gWycnXSApIHtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQWJzdHJhY3RWaWV3KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgaW5zdGFudGlhdGUgQWJzdHJhY3RWaWV3LCBvbmx5IGNvbmNyZXRlIG9uZScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpOnN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmQodGhpcy5fZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICByZXR1cm4gcmVuZGVyKHRoaXMudGVtcGxhdGUsIHRoaXMudGFnLCB0aGlzLmNsYXNzZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJpbmQoX2VsZW1lbnQ6IEhUTUxFbGVtZW50KSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFZpZXc7XG4iXX0=