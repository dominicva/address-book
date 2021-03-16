export default class SearchBar {
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
      if (
        !contactEl.textContent.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
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
  }
}
