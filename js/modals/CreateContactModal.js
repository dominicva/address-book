import Contact from '../Contact';

export default class CreateContactModal {
  constructor(hookId, tag, cssClasses) {
    this.hookId = hookId;
    this.tag = tag;
    this.cssClasses = cssClasses;

    this.inputIds = {
      firstName: 'fname',
      lastName: 'lname',
      number: 'number',
      address: 'address',
    };

    this.htmlContent = `
    <form class="add-contact__form">
      <label class="test" for="fname">first name</label>
      <input type="text" name="fname" id="${this.inputIds.firstName}" />

      <label for="lname">last name</label>
      <input type="text" name="lname" id="${this.inputIds.lastName}" />

      <label for="number">number</label>
      <input type="tel" name="number" id="${this.inputIds.number}" pattern="^[+]*\d+" />

      <label for="address">address</label>
      <input type="text" name="address" id="${this.inputIds.address}" />
      <button class="add-contact__submit-btn" type="submit">
        Create contact
      </button>
    </form>
`;
  }

  createContactHandler = event => {
    // arrow function to lexically scope 'this' assignment
    event.preventDefault();

    const data = this.getInputValues(event);
    const contact = new Contact(data);

    contact.render(this.hookId);
    // contact.initEventListener();

    this.clearInputValues();
  };

  getInputValues() {
    return {
      firstName: document.getElementById('fname').value,
      lastName: document.getElementById('lname').value,
      number: document.getElementById('number').value,
      address: document.getElementById('address').value,
    };
  }

  clearInputValues() {
    for (const inputId in this.inputIds) {
      document.getElementById(`${this.inputIds[inputId]}`).value = '';
    }
  }

  initEventListener() {
    const createContactBtn = document.querySelector('.add-contact__submit-btn');
    createContactBtn.addEventListener('click', this);
  }

  handleEvent(event) {
    switch (event.type) {
      case 'click':
        console.log('made it into handleEvent');
        this.createContactHandler(event);
        break;
    }
  }

  render() {
    const element = document.createElement(this.tag);
    element.innerHTML = this.htmlContent;
    element.className = this.cssClasses;
    this.hookId.append(element);
  }
}
