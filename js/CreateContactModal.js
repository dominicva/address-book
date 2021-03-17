// import Component from './Component';
import Modal from './Modal';
import ContactForm from './ContactForm';
import Contact from './Contact';

export default class CreateContactModal extends Modal {
  constructor(renderHook, tag, className) {
    super(renderHook, tag, className);
    this.modal = new Modal(renderHook, tag, className);
    this.modal.render();
    this.form = new ContactForm(this.modal.domEl, 'div', 'add-contact__form');
    this.form.render();
    this.initEventListeners();
  }

  addContactHandler(event) {
    event.preventDefault();
    const newContactData = this.form.inputValues;
    const contact = new Contact(newContactData);
    // contact.render();

    this.clearInputValues();
    this.modal.modalAnimateOut();
  }

  cancelCreateContactHandler(event) {
    event.preventDefault();
    this.form.clearInputValues();
    this.modal.modalAnimateOut();
  }

  initEventListeners() {
    const createBtn = this.form.domEl.querySelector('.add-contact__submit-btn');
    const cancelBtn = this.form.domEl.querySelector('.add-contact__cancel-btn');

    createBtn.addEventListener('click', () => {
      this.addContactHandler(event);
    });

    cancelBtn.addEventListener('click', () => {
      this.cancelCreateContactHandler(event);
    });
  }
}

// export default class CreateContactModal extends Component {
//   constructor(hookEl, tag, className) {
//     super(hookEl, tag, className);
//     // this.hookEl = hookEl;
//     this.inputIds = {
//       firstName: 'fname',
//       lastName: 'lname',
//       number: 'number',
//       address: 'address',
//     };
//     this.innerHTML = `
//       <h2 class="add-contact__form__heading">new contact</h2>
//       <form class="add-contact__form">
//         <label for="fname">first name</label>
//         <input type="text" name="fname" id="fname" />

//         <label for="lname">last name</label>
//         <input type="text" name="lname" id="lname" />

//         <label for="number">number</label>
//         <input type="text" name="number" id="number" />

//         <label for="address">address</label>
//         <input type="text" name="address" id="address" />
//         <div class="add-contact__btns__container">
//           <button class="add-contact__submit-btn" type="submit">
//             Create
//           </button>
//           <button class="add-contact__cancel-btn">Cancel</button>
//         </div>
//       </form>
//     `;
//   }

//   get inputValues() {
//     return {
//       firstName: this.createContactModalEl.querySelector('#fname').value,
//       lastName: this.createContactModalEl.querySelector('#lname').value,
//       number: this.createContactModalEl.querySelector('#number').value,
//       address: this.createContactModalEl.querySelector('#address').value,
//     };
//   }

//   clearInputValues() {
//     for (const inputId in this.inputIds) {
//       document.getElementById(`${this.inputIds[inputId]}`).value = '';
//     }
//   }

//   modalAnimateIn() {
//     this.createContactModalEl.style.animation =
//       'slide-in 0.5s ease-out forwards';
//   }

//   modalAnimateOut() {
//     this.createContactModalEl.style.animation = 'slide-out 0.5s ease forwards';
//   }

//   // render() {
//   //   this.createContactModalEl = document.createElement('div');
//   //   this.createContactModalEl.className = 'modal';
//   //   this.createContactModalEl.innerHTML = this.innerHTML;
//   //   const createContactBtn = this.createContactModalEl.querySelector(
//   //     '.add-contact__submit-btn'
//   //   );
//   //   const cancelContactBtn = this.createContactModalEl.querySelector(
//   //     '.add-contact__cancel-btn'
//   //   );
//   //   createContactBtn.addEventListener('click', () => {
//   //     this.addContactHandler(event);
//   //   });
//   //   cancelContactBtn.addEventListener('click', () => {
//   //     this.cancelCreateContactHandler(event);
//   //   });

//   //   this.hookEl.append(this.createContactModalEl);
//   // }
// }
