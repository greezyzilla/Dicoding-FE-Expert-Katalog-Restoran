import '../../../styles/home.css';
import TomSelect from 'tom-select/dist/js/tom-select.base';
import 'tom-select/dist/css/tom-select.default.css';
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRankItem, createRestaurantList } from '../templates/template-creator';
import { io } from '../../utils/header-helper';
import skipToContentInitiator from '../../utils/skiptocontent-initiator';

const Home = {
  async render() {
    return `
      <div id="io-anchor"></div>
      <section class="section-hero" id="hero"
      style="background-image: linear-gradient(0, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./images/heros/hero-image_4.jpg');">
      <div class="container">
        <div class="section-hero__copywriting">
          <p class="section-hero__copywriting__pre-heading">
            Hello restologuers
          </p>
          <h1 class="section-hero__copywriting__heading">
            Life is short, Moment is Longer
          </h1>
          <p class="section-hero__copywriting__sub-heading">
            Save your time to find the restaurant that can fit your need.
            Focus on the moment that you want to build, and catch it up!
          </p>
        </div>
        <form id="discover-form" class="section-hero__form">
          <div class="section-hero__form__control">
            <label class="section-hero__form__control__label" for="search">
              Restaurant Name
            </label>
            <input type="text" class="section-hero__form__control__input" id="search" autocomplete="off" placeholder="What do you looking for?"
            />
          </div>
          <div class="section-hero__form__control">
            <label for="select__city" class="section-hero__form__control__label" >
              City
            </label>
            <select class="section-hero__form__control__select" id="select__city" placeholder="Select city filter" autocomplete="off" >
              <option value="">Show All</option>
            </select>
          </div>
          <div class="section-hero__form__control">
            <label for="select__rating" class="section-hero__form__control__label" >
              Rating
            </label>
            <select class="section-hero__form__control__select" id="select__rating" placeholder="Select rating filter" autocomplete="off" >
              <option value="">Show All</option>
              <option value="1">1 Star or Less</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star or More</option>
            </select>
          </div>
          <button class="section-hero__form__submit" aria-label="Discover Restaurants" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="section-hero__form__submit__icon" >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span class="section-hero__form__submit__label"> Discover </span>
          </button>
        </form>
      </div>
    </section>
    <section class="section-rank">
      <div class="container">
        <div class="section-rank__copywriting">
          <h1 class="section-rank__heading">Meets Our Best Restaurants</h1>
          <p class="section-rank__sub-heading">
            Here is three of our best restaurant this year
          </p>
        </div>
        <ol class="section-rank__rank-container" id="rankContainer"></ol>
      </div>
    </section>
    <section class="section-content">
      <div class="section-content__anchor" id="content-anchor"></div>
      <div class="container">
        <div class="section-content__copywriting">
          <h1 class="section-content__heading">Explore The Restaurants</h1>
          <p class="section-content__sub-heading" id="content-focus" tabindex="0">
            Here is the restaurants that may fit your needs
          </p>
        </div>
        <div class="section-content__content-container" id="contentContainer" ></div>
      </div>
    </section>
    <aside class="section-aside">
      <div class="container">
        <div class="section-aside__promotion-container">
          <h1 class="section-aside__heading">Interested in this project?</h1>
          <a href="https://github.com/greezyzilla/Dicoding-FE-Expert-Katalog-Restoran" class="section-aside__action" >
            Support us!
          </a>
        </div>
        <img
          class="section-aside__image" src="https://image.freepik.com/free-photo/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-fingers-awesome-blank-space-advertisement-smirking-joyfully-introducing-product-white-background_176420-35016.jpg"
          alt="Woman photo created by cookie_studio - www.freepik.com" />
      </div>
    </aside>
    `;
  },

  async afterRender() {
    io.observe(document.getElementById('io-anchor'));
    skipToContentInitiator({
      element: document.querySelector('.skip-to-content'),
      focusTarget: document.querySelector('#content-focus'),
      scrollTarget: document.querySelector('#content-anchor'),
    });

    const { restaurants } = await RestaurantApiSource.list();

    const citiesData = new Array(
      ...new Set(restaurants.map((res) => res.city)),
    ).sort().map((city) => ({ text: city, value: city }));
    this.tomSelectInitiator({ id: '#select__city', data: citiesData });
    this.tomSelectInitiator({ id: '#select__rating' });

    const rankContainer = document.querySelector('#rankContainer');
    const bestRestaurants = restaurants.sort((a, b) => b.rating - a.rating).slice(0, 3);
    bestRestaurants.forEach((bestRestaurant, rankId) => {
      rankContainer.innerHTML += createRankItem(bestRestaurant, rankId);
    });

    const contentContainer = document.querySelector('#contentContainer');
    const restaurantContainer = createRestaurantList(restaurants);
    contentContainer.append(restaurantContainer);

    const discoverForm = document.querySelector('#discover-form');
    this.formHandler({ form: discoverForm, restaurants, restaurantContainer });
  },

  tomSelectInitiator(selectObj) {
    const { id, data } = selectObj;
    const tomSelect = new TomSelect(id, {
      allowEmptyOption: true,
      selectOnTab: true,
    });
    if (data) tomSelect.addOption(data);
    tomSelect.enable();
  },

  formHandler(formObj) {
    const { form, restaurants, restaurantContainer } = formObj;
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const filter = {
        name: event.target[0].value.toLowerCase(),
        city: event.target[1].value,
        rating: +event.target[3].value,
      };

      const restaurantByName = this.filterByName(restaurants, filter.name);
      const restaurantByCity = this.filterByCity(restaurantByName, filter.city);
      const restaurantByRating = this.filterByRating(restaurantByCity, filter.rating);

      restaurantContainer.items = restaurantByRating;
      document.querySelector('#content-anchor').scrollIntoView();
    });
  },

  filterByName(restaurants, filterName) {
    return restaurants.filter((restaurant) => {
      const name = restaurant.name.toLowerCase();
      return name.includes(filterName);
    });
  },

  filterByCity(restaurants, filterCity) {
    if (filterCity) {
      return restaurants.filter((restaurant) => {
        const { city } = restaurant;
        return city === filterCity;
      });
    } return restaurants;
  },

  filterByRating(restaurants, filterRating) {
    return restaurants.filter((restaurant) => {
      const rating = Math.floor(restaurant.rating);
      switch (filterRating) {
        case 1: return rating <= filterRating;
        case 2:
        case 3: return rating <= filterRating && rating > filterRating - 1;
        case 4: return rating > filterRating - 1;
        default: return true;
      }
    });
  },
};

export default Home;
