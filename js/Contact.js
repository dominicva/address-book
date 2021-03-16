export default class Contact {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.number = data.number;
    this.address = data.address;

    this.htmlContent = `
    <ul>
      <li>${this.firstName}</li>
      <li>${this.lastName}</li>
      <li>${this.number}</li>
      <li>${this.address}</li>
    </ul>
    <button class="contact__delete-btn">Delete</button>
    <button>Edit</button>
  `;
  }

  handleEvent() {}

  // deleteContact(element) {
  //   element.remove();
  // }

  // initEventListener() {
  //   // console.log();
  //   this.htmlContent.addEventListener('click', this.deleteContact);
  // }

  render(hookId) {
    const contactEl = document.createElement('div');
    contactEl.className = 'contact';
    contactEl.innerHTML = this.htmlContent;
    hookId.append(contactEl);
  }
}
