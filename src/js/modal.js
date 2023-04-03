'use strict';

const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__inner');
const modalOpenTrigger = document.querySelectorAll('[data-open-modal-cv]');
const modalCloseTrigger = document.querySelectorAll('[data-close-modal-cv]');

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
modalOpenTrigger.forEach((element) => {
  element.addEventListener('click', openModal);
});

modalCloseTrigger.forEach((element) => {
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
