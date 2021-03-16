import ConfirmDeleteModal from './ConfirmDeleteModal';

export default class Contact {
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
      <button class="contact__delete-btn material-icons">delete</button>
    `;
    this.className = 'contact';
  }

  deleteContactHandler(event) {
    const confirmationModal = new ConfirmDeleteModal(this.hookEl);
    confirmationModal.render(event);
    confirmationModal.animateIn();
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
  }
}
