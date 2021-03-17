// import ConfirmDeleteModal from './ConfirmDeleteModal';
// import Component from './Component';

export default class Contact {
  constructor({ firstName, lastName, number, address }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.address = address;
  }
}

// export default class Contact {
//   constructor({ firstName, lastName, number, address }) {
//     this.hookEl = document.getElementById('app');
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.number = number;
//     this.address = address;
//     this.innerHTML = `
//       <div class="contact__field first-name">${this.firstName}</div>
//       <div class="contact__field last-name">${this.lastName}</div>
//       <div class="contact__field number">${this.number}</div>
//       <div class="contact__field address">${this.address}</div>
//       <button class="contact__delete-btn material-icons">delete</button>
//     `;
//     this.className = 'contact';
//   }

//   deleteContactHandler(event) {
//     const confirmationModal = new ConfirmDeleteModal(this.hookEl);
//     confirmationModal.render(event);
//     confirmationModal.animateIn();
//   }

//   render() {
//     const contactEl = document.createElement('div');
//     contactEl.className = this.className;
//     contactEl.innerHTML = this.innerHTML;
//     const deleteContactBtn = contactEl.querySelector('.contact__delete-btn');
//     deleteContactBtn.addEventListener('click', () => {
//       this.deleteContactHandler(event);
//     });
//     this.hookEl.append(contactEl);
//   }
// }
