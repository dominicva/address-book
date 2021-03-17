import Component from './Component';

export default class SearchBar extends Component {
  constructor(renderHook, tag, className) {
    super(renderHook, tag, className);
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
    // const contactElements = Array.from(document.querySelectorAll('.contact'));
    // const contactElsArr = this.contactElementsArray;
    const searchTerm = this.searchInput.toLowerCase();

    this.contactElementsArray.forEach(contactEl => {
      if (!contactEl.textContent.toLowerCase().includes(searchTerm)) {
        contactEl.style.display = 'none';
      }
    });
  }

  cancelSearchHandler() {
    // const contactElements = Array.from(document.querySelectorAll('.contact'));
    // const contactElsArr = this.contactElementsArray;
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

  // render() {
  //   const searchBarEl = document.createElement('div');
  //   searchBarEl.className = 'search__container';
  //   searchBarEl.innerHTML = this.innerHTML;

  //   // set up event listeners
  //   const searchBtn = searchBarEl.querySelector('.search__btn');
  //   const cancelBtn = searchBarEl.querySelector('.search__btn--cancel');
  //   searchBtn.addEventListener('click', () => {
  //     this.searchHandler();
  //   });
  //   cancelBtn.addEventListener('click', () => {
  //     this.cancelSearchHandler();
  //   });

  //   this.hookEl.append(searchBarEl);
  // }
}
