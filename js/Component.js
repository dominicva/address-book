export default class Component {
  constructor(renderHook, tag, className) {
    this.renderHook = renderHook;
    this.tag = tag;
    this.className = className;
    this.innerHTML;
  }

  initEventListeners() {} // see subclasses

  render() {
    this.domEl = document.createElement(this.tag);

    if (this.className) {
      this.domEl.className = this.className;
    }
    if (this.attribute && this.attributeValue) {
      this.domEl.setAttribute(this.attribute, this.attributeValue);
    }
    if (this.innerHTML) {
      this.domEl.innerHTML = this.innerHTML;
    }
    if (this.eventProps) {
      for (const prop in this.eventProps) {
        prop.addEventListener(prop['eventType'], () => {
          prop['callback']();
        });
      }
    }

    this.renderHook.append(this.domEl);
    this.initEventListeners();
    return this.domEl;
  }
}
