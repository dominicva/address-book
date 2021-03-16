import App from './App';

export default class ConfirmDeleteModal {
  constructor(hookEl) {
    this.hookEl = hookEl;
    this.innerHTML = `
      <h3 class="contact__delete__confirm__heading">Are you sure?</h3>
      <button class="contact__delete__confirm-btn">Delete</button>
      <button class="contact__delete__cancel-btn">Cancel</button>
    `;
  }

  animateIn() {
    this.confirmDeleteModalEl.style.animation =
      'slide-in 0.35s ease-out forwards';
  }

  animateOut() {
    this.confirmDeleteModalEl.style.animation =
      'slide-out 0.35s ease-in forwards';
  }

  confirmDeleteHandler(deletionEvent) {
    this.confirmDeleteModalEl.style =
      'animation-name: slide-out; animation-duration: 0.25s; animation-timing-function: ease';

    setTimeout(() => {
      App.deleteContact(deletionEvent);
    }, 600);
  }

  cancelDeleteHandler(event) {
    this.confirmDeleteModalEl.style =
      'animation-name: slide-out; animation-duration: 0.25s; animation-timing-function: ease';
  }

  render(deletionEvent) {
    this.confirmDeleteModalEl = document.createElement('div');
    this.confirmDeleteModalEl.className = 'modal';
    this.confirmDeleteModalEl.setAttribute('id', 'confirm-delete');
    this.confirmDeleteModalEl.innerHTML = this.innerHTML;
    const confirmDeleteBtn = this.confirmDeleteModalEl.querySelector(
      '.contact__delete__confirm-btn'
    );
    const cancelDeleteBtn = this.confirmDeleteModalEl.querySelector(
      '.contact__delete__cancel-btn'
    );

    confirmDeleteBtn.addEventListener('click', () => {
      this.confirmDeleteHandler(deletionEvent);
    });
    cancelDeleteBtn.addEventListener('click', () => {
      this.cancelDeleteHandler();
    });

    this.hookEl.append(this.confirmDeleteModalEl);
  }
}
