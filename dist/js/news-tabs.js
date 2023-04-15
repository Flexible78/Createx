'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.categories-nav__btn');
  const article = document.querySelectorAll('.news-article');
  const tabsList = document.querySelectorAll('.categories-nav');

  function hideArticles() {
    article.forEach((el) => {
      el.closest('.news-list__item')
        .classList
        .add('news-list__item--hidden');
      el.closest('.news-list__item')
        .classList
        .remove('news-list__item--visible');
    });
  }

  function showArticles(dataValue = 'all') {
    article.forEach((el) => {
      if (el.dataset.target === `${dataValue}`) {
        el.closest('.news-list__item')
          .classList
          .add('news-list__item--visible');
        el.closest('.news-list__item')
          .classList
          .remove('news-list__item--hidden');
      }
      if (dataValue === 'all') {
        el.closest('.news-list__item')
          .classList
          .remove('news-list__item--hidden');
        el.closest('.news-list__item')
          .classList
          .add('news-list__item--visible');
      }
    });
  }

  hideArticles();
  showArticles();

  tabsList.addEventListener('click', (e) => {
    const self = e.target;
    const dataValue = self.dataset.filter;

    tabs.forEach((el) => {
      el.classList.remove('categories-nav__btn--active');
    });

    self.classList.add('categories-nav__btn--active');

    if (self.classList.contains('categories-nav__btn')) {
      hideArticles();
      showArticles(dataValue);
    }
  });
});
