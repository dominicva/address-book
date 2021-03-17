import App from './js/App';
import ContactForm from './js/ContactForm';
import Modal from './js/Modal';
import Control from './js/Control';
import SearchBar from './js/SearchBar';

const renderHook = document.getElementById('app');

const control = new Control(renderHook, 'div', 'control__container');
const search = new SearchBar(renderHook, 'div', 'search__container');

// const testContactForm = new ContactForm(renderHook, 'div', 'add-contact__form');
// const testModal = new Modal(renderHook, 'div', 'modal add-contact');

// testModal.render();
// reset contactForm renderHook to render inside modal
// testContactForm.renderHook = testModal.domEl;
// testContactForm.render();

// setTimeout(() => {
//   testModal.modalAnimateIn();
// }, 4000);

// App.init();

// class AddContactModal extends Modal {
//   constructor(hookEl, tag, className) {
//     super(hookEl, tag, className);
//     this.modal = new Modal(hookEl, tag, className);
//     this.modal.render();
//     this.form = new ContactForm(this.modal.domEl, 'div', 'add-contact__form');
//     this.form.render();
//   }
// }

// const addContactModal = new AddContactModal(
//   renderHook,
//   'div',
//   'modal add-contact'
// );

// addContactModal.render();

// setTimeout(() => {
//   addContactModal.modal.modalAnimateIn();
// }, 2000);
