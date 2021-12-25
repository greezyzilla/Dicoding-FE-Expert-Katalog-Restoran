import '../../src/scripts/components/favorite-button';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  const favoriteButton = document.createElement('favorite-button');
  favoriteButton.item = { restaurant, FavoriteRestaurantIdb };
  document.querySelector('#likeButtonContainer').append(favoriteButton);
  await favoriteButton.render();

  return favoriteButton;
};

export { createLikeButtonPresenterWithRestaurant };
