import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantList } from '../templates/template-creator';
import '../../../styles/favorite.css';
import { changeHeaderToBlack } from '../../utils/header-helper';
import skipToContentInitiator from '../../utils/skiptocontent-initiator';

const Favorite = {
  async render() {
    return `
      <div id="io-anchor"></div>
      <div class="section-content__anchor" id="content-anchor"></div>
      <section class="section-favorite">
        <div class="container">
          <div class="section-favorite__copywriting">
            <h1 class="section-favorite__copywriting__heading">Favorite Restaurant</h1>
            <p class="section-favorite__copywriting__sub-heading" id="content-focus" tabindex="0">Here is the list of your favorite restaurants</p>
          </div>
          <div class="section-favorite__content" id="favoriteContainer">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    changeHeaderToBlack();
    skipToContentInitiator({
      element: document.querySelector('.skip-to-content'),
      focusTarget: document.querySelector('#content-focus'),
      scrollTarget: document.querySelector('#content-anchor'),
    });

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('#favoriteContainer');
    favoriteContainer.append(createRestaurantList(restaurants));
  },
};

export default Favorite;
