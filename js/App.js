import Component from './Component';
import Contact from './Contact';
import Control from './Control';
import CreateContactModal from './CreateContactModal';
import SearchBar from './SearchBar';
import ConfirmDeleteModal from './ConfirmDeleteModal';

export default class App {
  static createContactModal;
  static deleteContactModal;

  static init() {
    const hook = document.getElementById('app');
    const controlElement = new Control(hook, 'div', 'control__container');
    controlElement.render();
    controlElement.initEventListeners();

    this.createContactModal = new CreateContactModal(hook);
    this.createContactModal.render();
    this.deleteContactModal = new ConfirmDeleteModal(hook);
    this.deleteContactModal.render();
    const searchBar = new SearchBar(hook);
    searchBar.render();
  }

  static launchCreateContactModal() {
    this.createContactModal.modalAnimateIn();
  }

  static deleteContact(event) {
    event.target.parentElement.remove();
  }
}
