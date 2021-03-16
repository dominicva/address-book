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
      <label for="fname">first name</label>
      <input type="text" name="fname" id="fname" />

      <label for="lname">last name</label>
      <input type="text" name="lname" id="lname" />  
      
      <label for="number">number</label>
      <input type="text" name="number" id="number" />  
      
      <label for="address">address</label>
      <input type="text" name="address" id="address" />     
      <button class="add-contact__submit-btn" type="submit">
        Create contact
      </button>
    `;
  }

  get inputValues() {
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

  addContactHandler(event) {
    event.preventDefault();

    const newContactData = this.inputValues;

    const contact = new Contact(this.hookEl, newContactData);
    contact.render();
    this.clearInputValues();

    // App.createContact(contact);
  }

  render() {
    const createContactForm = document.createElement('form');
    createContactForm.className = 'add-contact__form';
    createContactForm.innerHTML = this.innerHTML;
    const addContactBtn = createContactForm.querySelector(
      '.add-contact__submit-btn'
    );
    addContactBtn.addEventListener('click', () => {
      this.addContactHandler(event);
    });

    this.hookEl.append(createContactForm);
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

class App {}

const hook = document.getElementById('app');
const createContactModal = new CreateContactModal(hook);
createContactModal.render();

const searchBar = new SearchBar(hook);
searchBar.render();
