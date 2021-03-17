import Component from './Component';
import App from './App';

export default class Control extends Component {
  constructor(renderHook, tag, className) {
    super(renderHook, tag, className);
    this.innerHTML = `
      <h1 class="control__heading">address book</h1>
      <button class="control__add-contact__btn"><i class="material-icons">add</i>Add contact</button>
    `;
    this.render();
  }

  launchCreateContactModal() {
    App.launchCreateContactModal();
  }

  // overwritten from super (Component) class
  initEventListeners() {
    const addContactBtn = this.domEl.querySelector('button');
    // arrow function to lexically sope 'this' assignment
    addContactBtn.addEventListener('click', () => {
      this.launchCreateContactModal();
    });
  }
}
