const render = (template: string, tag: string, classes: string[]) => {
  console.log(classes)
  const newNode = document.createElement(tag);
  classes.forEach((el) => {
    if (el) newNode.classList.add(el)
  })

  newNode.innerHTML = template;
  return newNode;
};

abstract class AbstractView {
  _element: HTMLElement | undefined;

  constructor(public tag = 'div', public classes = [''] ) {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one');
    }
  }

  get template():string {
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

  private render() {
    return render(this.template, this.tag, this.classes);
  }

  protected bind(_element: HTMLElement) {}
}

export default AbstractView;
