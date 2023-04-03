'uses strict';

const modal = document.querySelector('.modal-subscribe');
const modalOverlay = document.querySelector('.modal-subscribe__inner');
const modalSubscribeopenTrigger = document.querySelectorAll('[data-open-modal-subscribe]');
const modalSubscribeсloseTrigger = document.querySelectorAll('[data-close-modal-subscribe]');

function openModal() {
  modal.classList.add('modal--visible');
  modal.classList.remove('modal--hidden');
  document.body.style.overflowY = 'hidden';
}
function closeModal() {
  modal.classList.add('modal--hidden');
  modal.classList.remove('modal--visible');
  document.body.style.overflowY = '';
}
modalSubscribeopenTrigger.forEach((element) => {
  element.addEventListener('click', openModal);
});

modalSubscribeсloseTrigger.forEach((element) => {
  element.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});
modal.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
