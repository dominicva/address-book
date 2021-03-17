import Component from './Component';

export default class Modal extends Component {
  constructor(renderHook, className) {
    super(renderHook, className);
  }

  modalAnimateIn() {
    this.domEl.style.animation = 'slide-in 0.4s ease-out forwards'; // this.domEl inherited from Component
  }

  modalAnimateOut() {
    this.domEl.style.animation = 'slide-out 0.4s ease forwards';
  }
}
