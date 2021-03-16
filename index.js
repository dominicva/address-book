class Control {
  constructor(hookEl) {
    this.hookEl = hookEl;
    this.tag = 'div';
    this.className = 'control__container';
    this.innerHTML = `
      <h1 class="control__heading">address book</h1>
      <button class="control__add-contact__btn"><i class="material-icons">add</i>Add contact</button>
    `;
  }

  launchCreateContactModal() {
    App.launchCreateContactModal();
  }

  render() {
    const controlEl = document.createElement(this.tag);
    controlEl.className = this.className;
    controlEl.innerHTML = this.innerHTML;
    const addContactBtn = controlEl.querySelector('button');
    addContactBtn.addEventListener('click', () => {
      this.launchCreateContactModal();
    });
    this.hookEl.append(controlEl);
  }
}

class Contact {
  constructor(hookEl, { firstName, lastName, number, address }) {
    this.hookEl = hookEl;
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.address = address;
    this.innerHTML = `
      <div class="contact__field first-name">${this.firstName}</div>  
      <div class="contact__field last-name">${this.lastName}</div>
      <div class="contact__field number">${this.number}</div>
      <div class="contact__field address">${this.address}</div>
      <button class="contact__delete-btn">Delete</button>
    `;
    this.className = 'contact';
  }

  deleteContactHandler() {
    event.target.parentElement.remove();
  }

  render() {
    const contactEl = document.createElement('div');
    contactEl.className = this.className;
    contactEl.innerHTML = this.innerHTML;
    const deleteContactBtn = contactEl.querySelector('.contact__delete-btn');
    deleteContactBtn.addEventListener('click', () => {
      this.deleteContactHandler(event);
    });
    this.hookEl.append(contactEl);
    // return contactEl;
  }
}

class CreateContactModal {
  constructor(hookEl) {
    this.hookEl = hookEl;
    this.inputIds = {
      firstName: 'fname',
      lastName: 'lname',
      number: 'number',
      address: 'address',
    };
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
            Create contact
          </button>
          <button class="add-contact__cancel-btn">Cancel</button>
        </div>
      </form>
    `;
  }

  get inputValues() {
    return {
      firstName: this.createContactModalEl.querySelector('#fname').value,
      lastName: this.createContactModalEl.querySelector('#lname').value,
      number: this.createContactModalEl.querySelector('#number').value,
      address: this.createContactModalEl.querySelector('#address').value,
    };
  }

  clearInputValues() {
    for (const inputId in this.inputIds) {
      document.getElementById(`${this.inputIds[inputId]}`).value = '';
    }
  }

  modalAnimateIn() {
    this.createContactModalEl.style.animation =
      'slide-in 0.5s ease-out forwards';
  }

  modalAnimateOut() {
    this.createContactModalEl.style.animation =
      'slide-out 0.5s ease-out forwards';
  }

  addContactHandler(event) {
    event.preventDefault();
    const newContactData = this.inputValues;
    const contact = new Contact(this.hookEl, newContactData);
    contact.render();

    this.clearInputValues();
    this.modalAnimateOut();
  }

  cancelCreateContactHandler() {
    this.clearInputValues();
    this.modalAnimateOut();
  }

  render() {
    this.createContactModalEl = document.createElement('div');
    this.createContactModalEl.className = 'modal';
    this.createContactModalEl.innerHTML = this.innerHTML;
    const createContactBtn = this.createContactModalEl.querySelector(
      '.add-contact__submit-btn'
    );
    const cancelContactBtn = this.createContactModalEl.querySelector(
      '.add-contact__cancel-btn'
    );
    createContactBtn.addEventListener('click', () => {
      this.addContactHandler(event);
    });
    cancelContactBtn.addEventListener('click', () => {
      this.cancelCreateContactHandler();
    });

    this.hookEl.append(this.createContactModalEl);
  }
}

class SearchBar {
  constructor(hookEl) {
    this.hookEl = hookEl;
    this.innerHTML = `
      <input class="search__input" type="text" name="search" id="search" placeholder="Search contacts" />
      <div class="search__btns__container">
        <button class="search__btn">Search</button>
        <button class="search__btn--cancel">Cancel</button>
      </div>
  `;
  }

  get searchInput() {
    return document.getElementById('search').value;
  }

  set searchInput(value) {
    document.getElementById('search').value = value;
  }

  searchHandler() {
    const contactElements = Array.from(document.querySelectorAll('.contact'));
    const searchTerm = this.searchInput;

    contactElements.forEach(contactEl => {
      if (!contactEl.textContent.includes(searchTerm)) {
        contactEl.style.display = 'none';
      }
    });
  }

  cancelSearchHandler() {
    const contactElements = Array.from(document.querySelectorAll('.contact'));
    contactElements.forEach(contactEl => (contactEl.style.display = 'block'));
    this.searchInput = '';
  }

  render() {
    const searchBarEl = document.createElement('div');
    searchBarEl.className = 'search__container';
    searchBarEl.innerHTML = this.innerHTML;

    // set up event listeners
    const searchBtn = searchBarEl.querySelector('.search__btn');
    const cancelBtn = searchBarEl.querySelector('.search__btn--cancel');
    searchBtn.addEventListener('click', () => {
      this.searchHandler();
    });
    cancelBtn.addEventListener('click', () => {
      this.cancelSearchHandler();
    });

    this.hookEl.append(searchBarEl);
    // return searchBarEl;
  }
}

class ContactList {}

class App {
  static createContactModal;

  static init() {
    const hook = document.getElementById('app');
    const controlElement = new Control(hook);
    controlElement.render();
    this.createContactModal = new CreateContactModal(hook);
    this.createContactModal.render();
    const searchBar = new SearchBar(hook);
    searchBar.render();
  }

  static launchCreateContactModal() {
    console.log('inside static addContact()');
    this.createContactModal.modalAnimateIn();
  }
}

App.init();
