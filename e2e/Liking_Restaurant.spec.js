/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('restaurant-container');
  I.see("Sorry, the restaurant can't be found", 'restaurant-container');
});

Scenario('Liking The First Restaurant', async ({ I }) => {
  I.seeElement('restaurant-container');
  I.see("Sorry, the restaurant can't be found", 'restaurant-container');

  I.amOnPage('/#/');
  I.seeElement('restaurant-item a');

  const firstRestaurantItem = locate('.restaurant-item__body__informations__title').first();
  const firstRestaurantItemName = await I.grabTextFrom(firstRestaurantItem);
  I.click(locate('restaurant-item a').first());

  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));
  I.see('Added Successfully', '.swal2-container');
  I.seeElement('#likedButton');

  I.amOnPage('/#/favorite');

  I.seeElement('restaurant-item');
  const firstLikedRestaurant = locate('.restaurant-item__body__informations__title').first();
  const firstLikedRestaurantName = await I.grabTextFrom(firstLikedRestaurant);
  assert.strictEqual(firstRestaurantItemName, firstLikedRestaurantName);
});

Scenario('Unliking The First Restaurant', async ({ I }) => {
  I.see("Sorry, the restaurant can't be found", 'restaurant-container');

  I.amOnPage('/#/');
  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-container');
  I.seeElement('restaurant-item');

  const firstLikedItem = locate('.restaurant-item__body__informations__title').first();
  const firstLikedItemName = await I.grabTextFrom(firstLikedItem);

  I.click(locate('restaurant-item a').first());

  const firstLikedItemDetailName = await I.grabTextFrom('.restaurant-detail__information__content__heading__title');
  I.seeElement('#likedButton');
  assert.strictEqual(firstLikedItemName, firstLikedItemDetailName);

  I.click(locate('#likedButton'));
  I.see('Removed Successfully', '.swal2-container');
  I.seeElement('#likeButton');

  I.amOnPage('/#/favorite');
  I.see("Sorry, the restaurant can't be found", 'restaurant-container');
});
