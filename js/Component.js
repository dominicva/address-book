export default class Component {
  constructor(renderHook, className) {
    this.renderHook = renderHook;
    this.tag = 'div';
    this.className = className;
    this.innerHTML;
    this.domEl;
  }

  initEventListeners() {} // see subclasses

  render() {
    this.domEl = document.createElement(this.tag);
    if (this.className) this.domEl.className = this.className;
    if (this.innerHTML) this.domEl.innerHTML = this.innerHTML;

    this.renderHook.append(this.domEl);
    this.initEventListeners();
    return this.domEl;
  }
}
