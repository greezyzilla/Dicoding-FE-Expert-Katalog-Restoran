import lazySizes from 'lazysizes/lazysizes.min';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../globals/config';

lazySizes.cfg.lazyClass = 'lazy';

class RestaurantItem extends HTMLElement {
  set item(restaurant) {
    this.restaurant = restaurant;
    if (this.restaurant.id) this.render();
    else this.renderSkeleton();
  }

  render() {
    this.id = this.restaurant.id;
    this.setAttribute('class', 'restaurant-item');
    this.ariaLabel = this.restaurant.name;
    this.innerHTML = `
      <picture class="restaurant-item__image">
          <source media="(max-width:700px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}"></source>
          <source media="(min-width:700px)" data-srcset="${CONFIG.BASE_IMAGE_URL_MD + this.restaurant.pictureId}"></source>
          <img class="restaurant-item__image lazyload" width="100%" height="100%" data-src="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="${this.restaurant.name}">
      </picture>
      <div class="restaurant-item__body">
        <div class="restaurant-item__body__informations">
          <h2 class="restaurant-item__body__informations__title ">${this.restaurant.name}</h2>
          <div class="restaurant-item__body__informations__details">
            <div class="restaurant-item__body__informations__details__item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" ></path>
                <circle cx="12" cy="10" r="3" fill="white" stroke="white" ></circle>
              </svg>
              <span>${this.restaurant.city}</span>
            </div>
            <div class="restaurant-item__body__informations__details__item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" ></polygon>
              </svg>
              <span class="value">${this.restaurant.rating.toFixed(1)}</span>
            </div>
          </div>
          <p class="restaurant-item__body__informations__details__description">
            ${this.restaurant.description.slice(0, 75)}...
          </p>
          </div>
          <a href="#/detail/${this.restaurant.id}" class="restaurant-item__body__informations__details__button" aria-label="name ${this.restaurant.name}, location ${this.restaurant.city}, rating ${this.restaurant.rating} Read More"> Read More </a>
      </div>
    `;
  }

  renderSkeleton() {
    this.setAttribute('class', 'restaurant-item');
    this.innerHTML = `
        <img class="restaurant-item__image skeleton" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="loading" />
        <div class="restaurant-item__body">
          <div class="restaurant-item__body__informations">
            <h2 class="restaurant-item__body__informations__title skeleton">&nbsp;</h2>
            <div class="restaurant-item__body__informations__details">
              <div class="restaurant-item__body__informations__details__item skeleton" style="height:1rem">&nbsp;</div>
              <div class="restaurant-item__body__informations__details__item skeleton" style="height:1rem">&nbsp;</div>
            </div>
            <div class="restaurant-item__body__informations__details__description">
                <div class="card-description-skeleton">
                  <div class="skeleton"></div>
                  <div class="skeleton"></div>
                  <div class="skeleton"></div>
                </div>
            </div>
            </div>
            <button class="restaurant-item__body__informations__details__button skeleton" aria-label="loading" tabindex="-1">&nbsp;</button>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
