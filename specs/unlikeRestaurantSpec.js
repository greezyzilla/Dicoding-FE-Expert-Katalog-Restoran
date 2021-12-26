/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { createLikeButtonPresenterWithRestaurant } from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#likedButton')).toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('#likeButton')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    const favoriteButton = await createLikeButtonPresenterWithRestaurant({ id: 1 });

    favoriteButton.dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    const favoriteButton = await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    favoriteButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
