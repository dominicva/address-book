import Component from './Component';

export default class Modal extends Component {
  constructor(renderHook, tag, className) {
    super(renderHook, tag, className);
    this.tag = 'div';
    // this.initEventListeners();
  }

  modalAnimateIn() {
    this.domEl.style.animation = 'slide-in 0.5s ease-out forwards'; // this.domEl inherited from Component
  }

  modalAnimateOut() {
    this.domEl.style.animation = 'slide-out 0.5s ease forwards';
  }
}
