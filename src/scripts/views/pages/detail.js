import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import '../../../styles/detail.css';
import { createRestaurantDetail } from '../templates/template-creator';
import { changeHeaderToBlack } from '../../utils/header-helper';
import skipToContentInitiator from '../../utils/skiptocontent-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="section-detail">
        <div class="section-content__anchor" id="content-anchor"></div>
        <div class="container">
          <div id="detailContainer"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    changeHeaderToBlack();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detailContainer');
    const restaurantDetail = createRestaurantDetail({ restaurant: { id: '' }, FavoriteRestaurantIdb: null });
    detailContainer.append(restaurantDetail);

    const { restaurant } = await RestaurantApiSource.detail(url.id);

    restaurantDetail.item = { restaurant, FavoriteRestaurantIdb };

    skipToContentInitiator({
      element: document.querySelector('.skip-to-content'),
      focusTarget: restaurantDetail,
      scrollTarget: document.querySelector('#content-anchor'),
    });
  },
};

export default Detail;
