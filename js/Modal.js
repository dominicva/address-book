import Component from './Component';

export default class Modal extends Component {
  constructor(hookEl, tag, className) {
    super(hookEl, tag, className);
    this.innerHTML;
  }

  modalAnimateIn() {
    this.domEl.style.animation = 'slide-in 0.5s ease-out forwards'; // this.domEl inherited from Component
  }

  modalAnimateOut() {
    this.domEl.style.animation = 'slide-out 0.5s ease forwards';
  }
}
