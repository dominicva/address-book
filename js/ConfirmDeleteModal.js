import App from './App';
import Modal from './Modal';

export default class ConfirmDeleteModal extends Modal {
  constructor(renderHook, className) {
    super(renderHook, className);
    this.innerHTML = `
      <h3 class="contact__delete__confirm__heading">Are you sure?</h3>
      <button class="contact__delete__confirm-btn">Delete</button>
      <button class="contact__delete__cancel-btn">Cancel</button>
    `;
    this.render();
  }

  confirmHandler() {
    this.modalAnimateOut();
    setTimeout(() => {
      App.deleteContact();
    }, 500);
  }

  cancelHandler() {
    this.modalAnimateOut();
  }

  initEventListeners() {
    const confirmDeleteBtn = this.domEl.querySelector(
      '.contact__delete__confirm-btn'
    );
    const cancelDeleteBtn = this.domEl.querySelector(
      '.contact__delete__cancel-btn'
    );

    confirmDeleteBtn.addEventListener('click', () => {
      this.confirmHandler();
    });
    cancelDeleteBtn.addEventListener('click', () => {
      this.cancelHandler();
    });
  }
}
