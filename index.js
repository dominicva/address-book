import CreateContactModal from './js/modals/CreateContactModal';

const addContactBtn = document.querySelector('.add-contact__btn');
const createContactRenderHook = document.getElementById('contacts');

addContactBtn.addEventListener('click', () => {
  const createContactModal = new CreateContactModal(
    createContactRenderHook,
    'div',
    'add-contact__modal'
  );

  createContactModal.render();
});
