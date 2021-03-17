import Component from './Component';

export default class SearchBar extends Component {
  constructor(renderHook, className) {
    super(renderHook, className);
    this.innerHTML = `
      <input class="search__input" type="text" name="search" id="search" placeholder="Search contacts" />
      <div class="search__btns__container">
        <button class="search__btn">Search</button>
        <button class="search__btn--cancel">Cancel</button>
      </div>
    `;
    this.render();
  }

  get searchInput() {
    return this.domEl.querySelector('#search').value;
  }

  set searchInput(value) {
    this.domEl.querySelector('#search').value = value;
  }

  get contactElementsArray() {
    return Array.from(document.querySelectorAll('.contact'));
  }

  searchHandler() {
    const searchTerm = this.searchInput.toLowerCase();
    this.contactElementsArray.forEach(contactEl => {
      if (!contactEl.textContent.toLowerCase().includes(searchTerm)) {
        contactEl.style.display = 'none';
      }
    });
  }

  cancelSearchHandler() {
    this.contactElementsArray.forEach(
      contactEl => (contactEl.style.display = 'block')
    );
    this.searchInput = '';
  }

  initEventListeners() {
    const searchBtn = this.domEl.querySelector('.search__btn');
    const cancelBtn = this.domEl.querySelector('.search__btn--cancel');
    searchBtn.addEventListener('click', () => {
      this.searchHandler();
    });
    cancelBtn.addEventListener('click', () => {
      this.cancelSearchHandler();
    });
  }
}
