import App from './App';
import Modal from './Modal';
// import ConfirmDeleteComponent from './ConfirmDeleteComponent';
// import Component from './Component';

export default class ConfirmDeleteModal extends Modal {
  constructor(renderHook, tag, className) {
    super(renderHook, tag, className);
    this.innerHTML = `
      <h3 class="contact__delete__confirm__heading">Are you sure?</h3>
      <button class="contact__delete__confirm-btn">Delete</button>
      <button class="contact__delete__cancel-btn">Cancel</button>
    `;
    this.render();
  }

  confirmHandler(deletionEvent) {
    this.modal.modalAnimateOut();
    setTimeout(() => {
      App.deleteContact(deletionEvent);
    }, 600);
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
      this.confirmHandler(deletionEvent);
    });
    cancelDeleteBtn.addEventListener('click', () => {
      this.cancelHandler();
    });
  }
}

// export default class ConfirmDeleteModal extends Modal {
//   constructor(renderHook, tag, className) {
//     super(renderHook, tag, className);
//     this.modal = new Modal(renderHook, tag, className);
//     this.modal.render();
//     this.confirmComponent = new ConfirmDeleteComponent(
//       this.modal.domEl,
//       'div',
//       'modal confirm-delete'
//     );
//     this.confirmComponent.render();
//   }

//   confirmHandler(deletionEvent) {
//     this.modal.modalAnimateOut();
//     setTimeout(() => {
//       App.deleteContact(deletionEvent);
//     }, 600);
//   }

//   cancelHandler() {
//     this.modal.modalAnimateOut();
//   }

//   initEventListeners() {
//     const confirmDeleteBtn = this.confirmComponent.domEl.querySelector(
//       '.contact__delete__confirm-btn'
//     );
//     const cancelDeleteBtn = this.confirmComponent.domEl.querySelector(
//       '.contact__delete__cancel-btn'
//     );

//     confirmDeleteBtn.addEventListener('click', () => {
//       this.confirmHandler(deletionEvent);
//     });
//     cancelDeleteBtn.addEventListener('click', () => {
//       this.cancelHandler();
//     });
//   }
// }
