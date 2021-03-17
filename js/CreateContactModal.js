import Modal from './Modal';
import ContactForm from './ContactForm';
import Contact from './Contact';
import ContactComponent from './ContactComponent';

export default class CreateContactModal extends Modal {
  constructor(renderHook, className) {
    super(renderHook, className);
    this.modal = new Modal(renderHook, className);
    this.modal.render();
    this.form = new ContactForm(this.modal.domEl, 'add-contact__form');
    this.form.render();
    this.initEventListeners();
  }

  userInputValid(contactData) {
    return Object.values(contactData).join(''); // contact contains something
  }

  addContactHandler(event) {
    event.preventDefault();
    const userInput = this.form.inputValues;
    if (this.userInputValid(userInput)) {
      const contact = new Contact(userInput);
      new ContactComponent(this.renderHook, 'contact', contact);
      this.form.clearInputValues();
      this.modal.modalAnimateOut();
    } else {
      alert('Please enter some contact information');
      return;
    }
  }

  cancelCreateContactHandler(event) {
    event.preventDefault();
    this.form.clearInputValues();
    this.modal.modalAnimateOut();
  }

  initEventListeners() {
    const createBtn = this.form.domEl.querySelector('.add-contact__submit-btn');
    createBtn.addEventListener('click', () => {
      this.addContactHandler(event);
    });

    const cancelBtn = this.form.domEl.querySelector('.add-contact__cancel-btn');
    cancelBtn.addEventListener('click', () => {
      this.cancelCreateContactHandler(event);
    });
  }
}
