import Component from './Component';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import App from './App';

export default class ContactComponent extends Component {
  constructor(renderHook, className, contactData) {
    super(renderHook, className);
    this.renderHook = document.getElementById('app');
    this.firstName = contactData.firstName;
    this.lastName = contactData.lastName;
    this.number = contactData.number;
    this.address = contactData.address;
    this.innerHTML = `
      <div class="contact__field first-name">${this.firstName}</div>  
      <div class="contact__field last-name">${this.lastName}</div>
      <div class="contact__field number">${this.number}</div>
      <div class="contact__field address">${this.address}</div>
      <button class="contact__delete-btn material-icons">delete</button>
    `;
    this.confirmDeleteModal = new ConfirmDeleteModal(
      this.renderHook,
      'modal confirm-delete'
    );
    this.render();
  }

  deleteContactHandler(event) {
    App.launchConfirmDeleteModal(event);
  }

  confirmHandler(deletionEvent) {
    this.confirmDeleteModal.modalAnimateOut();
    setTimeout(() => {
      App.deleteContact(deletionEvent);
    }, 600);
  }

  cancelHandler() {
    this.confirmDeleteModal.modalAnimateOut();
  }

  // overriden from super (Component) class. Called on render by Component.
  initEventListeners() {
    const deleteContactBtn = this.domEl.querySelector('.contact__delete-btn');
    deleteContactBtn.addEventListener('click', () => {
      this.deleteContactHandler(event); // pass event to track specific contact
    });
    const confirmDeleteBtn = this.confirmDeleteModal.domEl.querySelector(
      '.contact__delete__confirm-btn'
    );
    const cancelDeleteBtn = this.confirmDeleteModal.domEl.querySelector(
      '.contact__delete__cancel-btn'
    );

    confirmDeleteBtn.addEventListener('click', deletionEvent => {
      this.confirmHandler(deletionEvent);
    });
    cancelDeleteBtn.addEventListener('click', () => {
      this.cancelHandler();
    });
  }
}
