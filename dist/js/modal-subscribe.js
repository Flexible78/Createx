'use strict';

const modalSubcribe = document.querySelector('.modal-subscribe');
const modalOverlaySubscribe = document.querySelector('.modal-subscribe__inner');
const modalOpenSubcribeTrigger = document.querySelectorAll('[data-open-modal-subscribe]');
const modalCloseSubcribeTrigger = document.querySelectorAll('[data-close-modal-subscribe]');

function openModal() {
  modalSubcribe.classList.add('modal-subscribe--visible');
  modalSubcribe.classList.remove('modal-subscribe--hidden');
  document.body.style.overflowY = 'hidden';
}
function closeModalS() {
  modalSubcribe.classList.add('modal-subscribe--hidden');
  modalSubcribe.classList.remove('modal-subscribe--visible');
  document.body.style.overflowY = '';
}
modalOpenSubcribeTrigger.forEach((element) => {
  element.addEventListener('click', openModal);
});

modalCloseSubcribeTrigger.forEach((element) => {
  element.addEventListener('click', closeModalS);
});
modalSubcribe.addEventListener('click', (e) => {
  if (e.target === modalOverlaySubscribe) {
    closeModalS();
  }
});
modalSubcribe.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModalS();
  }
});
