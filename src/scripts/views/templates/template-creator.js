import CONFIG from '../../globals/config';
import '../../components/restaurant-container';
import '../../components/restaurant-item';
import '../../components/favorite-button';
import '../../components/review-list';
import '../../components/rank-container';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const createRankList = (restaurants) => {
  const rankContainer = document.createElement('rank-container');
  rankContainer.items = restaurants;
  return rankContainer;
};

const createRestaurantList = (restaurants) => {
  const restaurantContainer = document.createElement('restaurant-container');
  restaurantContainer.items = restaurants;
  return restaurantContainer;
};

const createRestaurantDetail = (restaurant) => {
  const restaurantContainer = document.createElement('div');
  restaurantContainer.innerHTML = `
        <div class="restaurant-detail">
            <div class="restaurant-detail__information">
                <div class="restaurant-detail__information__content">
                    <div class="restaurant-detail__information__content__heading">
                        <h1 class="restaurant-detail__information__content__heading__title">${restaurant.name}</h1>
                        <ul class="restaurant-detail__information__content__heading__categories">
                            ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div id="buttonContainer"></div>
                </div>
                <div class="restaurant-detail__details">
                    <div class="restaurant-detail__details__item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white" stroke="white"></circle></svg>
                        <span>${restaurant.city}, ${restaurant.address}</span>
                    </div>
                    <div class="restaurant-detail__details__item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__body">
                <img class="restaurant-detail__body__image" src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}">
                <div class="restaurant-detail__body__menu">
                    <div class="restaurant-detail__body__menu__item">
                        <h2 class="restaurant-detail__body__menu__item__label">Foods (${restaurant.menus.foods.length})</h2>
                        <ul class="restaurant-detail__body__menu__item__list" tabindex="0">
                            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="restaurant-detail__body__menu__item">
                        <h2 class="restaurant-detail__body__menu__item__label">Drinks (${restaurant.menus.drinks.length})</h2>
                        <ul class="restaurant-detail__body__menu__item__list" tabindex="0">
                            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__description">
                <h2 class="restaurant-detail__description__label">Description</h2>
                <p class="restaurant-detail__description__paragraph">${restaurant.description}</p>
            </div>
        </div>
    `;
  restaurantContainer.tabIndex = '0';

  const scrollableLists = restaurantContainer.querySelectorAll('.restaurant-detail__body__menu__item__list');
  scrollableLists.forEach((list) => {
    const scrollableList = list;
    scrollableList.addEventListener('wheel', (event) => {
      event.preventDefault();
      scrollableList.scrollLeft += event.deltaY / 4;
    }, { passive: false });
  });

  const buttonContainer = restaurantContainer.querySelector('#buttonContainer');
  const favoriteButton = document.createElement('favorite-button');
  favoriteButton.item = { restaurant, FavoriteRestaurantIdb };
  buttonContainer.append(favoriteButton);

  return restaurantContainer;
};

const createReviewList = (reviews) => {
  const reviewList = document.createElement('review-list');
  reviewList.items = reviews;
  return reviewList;
};

export {
  createRankList, createRestaurantList, createRestaurantDetail, createReviewList,
};
