import Component from './Component';
import App from './App';

export default class Control extends Component {
  constructor(hookEl, tag, className) {
    super(hookEl, tag, className);
    this.innerHTML = `
      <h1 class="control__heading">address book</h1>
      <button class="control__add-contact__btn"><i class="material-icons">add</i>Add contact</button>
    `;
  }

  launchCreateContactModal() {
    App.launchCreateContactModal();
  }

  initEventListeners() {
    const addContactBtn = this.domEl.querySelector('button');
    addContactBtn.addEventListener('click', () => {
      this.launchCreateContactModal();
    });
  }
}
