import App from './js/App';
import ContactForm from './js/ContactForm';
import Modal from './js/Modal';
import Control from './js/Control';
import SearchBar from './js/SearchBar';
import ConfirmDeleteModal from './js/ConfirmDeleteModal';
import Contact from './js/Contact';
import ContactComponent from './js/ContactComponent';

App.init();
// const renderHook = document.getElementById('app');

// const contactData = new Contact({
//   firstName: 'Dom',
//   lastName: 'van Almsick',
//   number: '+447796261122',
//   address: 'Walton Place',
// });

// const contact = new ContactComponent(renderHook, 'div', 'contact', contactData);

// CONFIRM DELETE MODAL TEST
// const confirmDelModal = new ConfirmDeleteModal(
//   renderHook,
//   'div',
//   'modal confirm-delete'
// );
// console.log(confirmDelModal);

// setTimeout(() => {
//   confirmDelModal.modalAnimateIn();
// }, 1500);

// const control = new Control(renderHook, 'div', 'control__container');
// const search = new SearchBar(renderHook, 'div', 'search__container');

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
