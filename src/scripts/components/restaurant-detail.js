import './favorite-button';
import './restaurant-review';
import CONFIG from '../globals/config';

const scrollHandle = (event) => {
  event.preventDefault();
  const target = event.target.parentNode;
  target.scrollLeft += event.deltaY / 4;
};

class RestaurantDetail extends HTMLElement {
  set item({ restaurant, FavoriteRestaurantIdb }) {
    this.restaurant = restaurant;
    this.FavoriteRestaurantIdb = FavoriteRestaurantIdb;
    this.listenedElements = [];

    if (!restaurant.id) this.renderSkeleton();
    else this.render();
    // if (!restaurant.id) this.renderSkeleton();
    // else this.render();
  }

  connectedCallback() {
    const scrollableLists = this.querySelectorAll('.restaurant-detail__body__menu__item__list');
    scrollableLists.forEach((list) => {
      const scrollableList = list;
      this.listenedElements.push(list);
      scrollableList.addEventListener('wheel', scrollHandle, { passive: false });
    });
  }

  disconnectedCallback() {
    this.listenedElements.forEach((list) => {
      list.removeEventListener('wheel', scrollHandle);
    });
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-detail">
            <div class="restaurant-detail__information">
                <div class="restaurant-detail__information__content">
                    <div class="restaurant-detail__information__content__heading">
                        <h1 class="restaurant-detail__information__content__heading__title">${this.restaurant.name}</h1>
                        <ul class="restaurant-detail__information__content__heading__categories">
                            ${this.restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div id="buttonContainer"></div>
                </div>
                <div class="restaurant-detail__details">
                    <div class="restaurant-detail__details__item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white" stroke="white"></circle></svg>
                        <span>${this.restaurant.city}, ${this.restaurant.address}</span>
                    </div>
                    <div class="restaurant-detail__details__item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span>${this.restaurant.rating}</span>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__body">
                <picture class="restaurant-detail__body__image">
                    <source media="(max-width:600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}"></source>
                    <source media="(min-width:600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_MD + this.restaurant.pictureId}"></source>
                    <img class="restaurant-detail__body__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LG + this.restaurant.pictureId}" alt="${this.restaurant.name}">
                </picture>
                <div class="restaurant-detail__body__menu">
                    <div class="restaurant-detail__body__menu__item">
                        <h2 class="restaurant-detail__body__menu__item__label">Foods (${this.restaurant.menus.foods.length})</h2>
                        <ul class="restaurant-detail__body__menu__item__list" tabindex="0">
                            ${this.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="restaurant-detail__body__menu__item">
                        <h2 class="restaurant-detail__body__menu__item__label">Drinks (${this.restaurant.menus.drinks.length})</h2>
                        <ul class="restaurant-detail__body__menu__item__list" tabindex="0">
                            ${this.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__description">
                <h2 class="restaurant-detail__description__label">Description</h2>
                <p class="restaurant-detail__description__paragraph">${this.restaurant.description}</p>
            </div>
        </div>
    `;

    const favoriteButton = document.createElement('favorite-button');
    favoriteButton.item = {
      restaurant: this.restaurant,
      FavoriteRestaurantIdb: this.FavoriteRestaurantIdb,
    };
    this.querySelector('#buttonContainer').append(favoriteButton);

    const restaurantReview = document.createElement('restaurant-review');
    restaurantReview.item = {
      restaurantId: this.restaurant.id,
      reviews: this.restaurant.customerReviews,
    };
    this.append(restaurantReview);
  }

  renderSkeleton() {
    this.innerHTML = `
    <div class="restaurant-detail">
        <div class="restaurant-detail__information">
            <div class="restaurant-detail__information__content">
                <div class="restaurant-detail__information__content__heading">
                    <h1 class="restaurant-detail__information__content__heading__title skeleton" style="width:250px; height:1.562rem">&nbsp;</h1>
                    <ul class="restaurant-detail__information__content__heading__categories"><li class="skeleton" style="width:100px">&nbsp;</li></ul>
                </div>
                <div id="buttonContainer">
                    <div class="skeleton" style="width:120px; height:48px; border-radius:5px">&nbsp;</div>
                </div>
            </div>
            <div class="restaurant-detail__details">
                <div class="restaurant-detail__details__item skeleton" style="width:300px; height:1rem"></div>
                <div class="restaurant-detail__details__item skeleton" style="width:60px; height:1rem"></div>
            </div>
        </div>
        <div class="restaurant-detail__body">
            <div class="restaurant-detail__body__image skeleton"></div>
            <div class="restaurant-detail__body__menu">
                <div class="restaurant-detail__body__menu__item">
                    <h2 class="restaurant-detail__body__menu__item__label skeleton" style="width:90px">&nbsp;</h2>
                    <ul class="restaurant-detail__body__menu__item__list">${[...new Array(3)].map(() => '<li class="skeleton">&nbsp;</li>').join('')}</ul>
                </div>
                <div class="restaurant-detail__body__menu__item">
                    <h2 class="restaurant-detail__body__menu__item__label skeleton" style="width:90px">&nbsp;</h2>
                    <ul class="restaurant-detail__body__menu__item__list">${[...new Array(3)].map(() => '<li class="skeleton">&nbsp;</li>').join('')}</ul>
                </div>
            </div>
        </div>
        <div class="restaurant-detail__description">
            <h2 class="restaurant-detail__description__label skeleton" style="width:100px">&nbsp;</h2>
            ${[...new Array(10)].map(() => '<div class="skeleton">&nbsp;</div>').join('')}
        </div>
    </div>
    `;

    const restaurantReview = document.createElement('restaurant-review');
    restaurantReview.item = {
      restaurantId: '',
      reviews: [],
    };
    this.append(restaurantReview);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
