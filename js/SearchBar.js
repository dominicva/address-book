import Component from './Component';

export default class SearchBar extends Component {
  constructor(renderHook, className) {
    super(renderHook, className);
    this.innerHTML = `
      <input class="search__input" type="text" name="search" id="search" placeholder="Search contacts" />
      <div class="search__btns__container">
        <button class="search__btn">Search</button>
      </div>
    `;
    this.render();
    this.searchBtn;
  }

  get searchInput() {
    return this.domEl.querySelector('#search').value;
  }

  set searchInput(value) {
    this.domEl.querySelector('#search').value = value;
  }

  get btnText() {
    return this.searchBtn.textContent;
  }

  set btnText(text) {
    this.searchBtn.textContent = text;
  }

  get contactElementsArray() {
    return Array.from(document.querySelectorAll('.contact'));
  }

  filterContacts(searchTerm) {
    this.contactElementsArray.forEach(contactEl => {
      if (!contactEl.textContent.toLowerCase().includes(searchTerm)) {
        contactEl.style.display = 'none';
      }
    });
  }

  searchHandler() {
    if (this.btnText === 'Search') {
      const searchTerm = this.searchInput.toLowerCase();
      this.filterContacts(searchTerm);
      this.btnText = 'Cancel';
      this.searchBtn.style.border = '4px solid var(--primary-light';
    } else if (this.btnText === 'Cancel') {
      this.cancelSearchHandler();
    }
  }

  cancelSearchHandler() {
    this.contactElementsArray.forEach(
      contactEl => (contactEl.style.display = 'block')
    );
    this.searchInput = '';
    this.btnText = 'Search';
    this.searchBtn.style.border = 'none';
  }

  initEventListeners() {
    this.searchBtn = this.domEl.querySelector('.search__btn');
    this.searchBtn.addEventListener('click', () => {
      this.searchHandler();
    });
  }
}
