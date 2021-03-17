import Control from './Control';
import CreateContactModal from './CreateContactModal';
import SearchBar from './SearchBar';
import ConfirmDeleteModal from './ConfirmDeleteModal';

export default class App {
  static createContactModal;
  static confirmDeleteModal;
  static deletionEvent;

  static launchCreateContactModal() {
    this.createContactModal.modal.modalAnimateIn();
  }

  static launchConfirmDeleteModal(deletionEvent) {
    this.deletionEvent = deletionEvent;
    this.confirmDeleteModal.modalAnimateIn();
  }

  static deleteContact() {
    this.deletionEvent.target.style.transform = 'translateX(80rem)';
    setTimeout(() => {
      this.deletionEvent.target.parentElement.remove();
    }, 600);
  }

  static init() {
    const hook = document.getElementById('app');
    new Control(hook, 'control__container');
    new SearchBar(hook, 'search__container');

    this.createContactModal = new CreateContactModal(hook, 'modal');
    this.confirmDeleteModal = new ConfirmDeleteModal(
      hook,
      'modal confirm-delete'
    );
  }
}
