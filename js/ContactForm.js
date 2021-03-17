import Component from './Component';

export default class ContactForm extends Component {
  constructor(hookEl, tag, className) {
    super(hookEl, tag, className);
    this.innerHTML = `
      <h2 class="add-contact__form__heading">new contact</h2>
      <form class="add-contact__form">
        <label for="fname">first name</label>
        <input type="text" name="fname" id="fname" />

        <label for="lname">last name</label>
        <input type="text" name="lname" id="lname" />  
        
        <label for="number">number</label>
        <input type="text" name="number" id="number" />  
        
        <label for="address">address</label>
        <input type="text" name="address" id="address" />
        <div class="add-contact__btns__container">     
          <button class="add-contact__submit-btn" type="submit">
            Create
          </button>
          <button class="add-contact__cancel-btn">Cancel</button>
        </div>
      </form>
    `;
    this.inputIds = {
      firstName: 'fname',
      lastName: 'lname',
      number: 'number',
      address: 'address',
    };
  }

  get inputValues() {
    return {
      firstName: this.domEl.querySelector('#fname').value,
      lastName: this.domEl.querySelector('#lname').value,
      number: this.domEl.querySelector('#number').value,
      address: this.domEl.querySelector('#address').value,
    };
  }

  clearInputValues() {
    for (const inputId in this.inputIds) {
      this.domEl.querySelector(`#${this.inputIds[inputId]}`).value = '';
    }
  }

  addContactHandler(event) {
    event.preventDefault();
    const newContactData = this.inputValues;
    const contact = new Contact(newContactData);
    contact.render();

    this.clearInputValues();
    this.modalAnimateOut();
  }

  cancelCreateContactHandler(event) {
    event.preventDefault();
    this.clearInputValues();
    this.modalAnimateOut();
  }
}
