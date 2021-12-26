/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('Adding review to The First Restaurant', ({ I }) => {
  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());

  const inputName = 'Andilau';
  const inputReview = 'Makanannya senikmat masa depan!';

  I.seeElement('#review-name');
  I.fillField('#review-name', inputName);

  I.seeElement('#review-body');
  I.fillField('#review-body', inputReview);

  I.seeElement('.section-detail__post-review__form__submit');
  I.click(locate('.section-detail__post-review__form__submit'));

  I.see('Reviewed Successfully', '.swal2-container');

  I.see(inputName);
  I.see(inputReview);
});

Scenario('Adding review to The First Restaurant withoud name', ({ I }) => {
  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());

  const inputReview = 'Makanannya senikmat masa depan!';

  I.seeElement('#review-body');
  I.fillField('#review-body', inputReview);

  I.seeElement('.section-detail__post-review__form__submit');
  I.click(locate('.section-detail__post-review__form__submit'));

  I.see('Review Failed');
});

Scenario('Adding review to The First Restaurant withoud a review', ({ I }) => {
  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());

  const inputReview = 'Andilau';

  I.seeElement('#review-body');
  I.fillField('#review-body', inputReview);

  I.seeElement('.section-detail__post-review__form__submit');
  I.click(locate('.section-detail__post-review__form__submit'));

  I.see('Review Failed');
});
