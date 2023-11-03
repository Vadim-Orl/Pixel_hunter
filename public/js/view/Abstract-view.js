const render = (template, tag, classes) => {
  const newNode = document.createElement(tag);
  classes.forEach((el) => {
    newNode.classList.add(el)
  })

  newNode.innerHTML = template;
  return newNode;
};

class AbstractView {
  constructor(tag = 'div', { classes } = { classes: [] }) {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one');
    }
    this.tag = tag;
    this.classes = classes;
  }

  get template() {
    throw new Error('Template is required');
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

  bind() {}
}

export default AbstractView;

//# sourceMappingURL=Abstract-view.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3L0Fic3RyYWN0LXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyID0gKHRlbXBsYXRlLCB0YWcsIGNsYXNzZXMpID0+IHtcbiAgY29uc3QgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG5ld05vZGUuY2xhc3NMaXN0LmFkZChlbClcbiAgfSlcblxuICBuZXdOb2RlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gbmV3Tm9kZTtcbn07XG5cbmNsYXNzIEFic3RyYWN0VmlldyB7XG4gIGNvbnN0cnVjdG9yKHRhZyA9ICdkaXYnLCB7IGNsYXNzZXMgfSA9IHsgY2xhc3NlczogW10gfSkge1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBBYnN0cmFjdFZpZXcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBpbnN0YW50aWF0ZSBBYnN0cmFjdFZpZXcsIG9ubHkgY29uY3JldGUgb25lJyk7XG4gICAgfVxuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmQodGhpcy5fZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHJlbmRlcih0aGlzLnRlbXBsYXRlLCB0aGlzLnRhZywgdGhpcy5jbGFzc2VzKTtcbiAgfVxuXG4gIGJpbmQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFZpZXc7XG4iXSwiZmlsZSI6IkFic3RyYWN0LXZpZXcuanMifQ==
