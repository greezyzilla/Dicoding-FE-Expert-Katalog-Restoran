import '../../components/restaurant-container';
import '../../components/restaurant-item';
import '../../components/favorite-button';
import '../../components/review-list';
import '../../components/rank-container';
import '../../components/restaurant-detail';
import lazySizes from 'lazysizes/lazysizes.min';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';

lazySizes.cfg.lazyClass = 'lazy';

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

const createRestaurantDetail = (restaurantData) => {
  const restaurantDetail = document.createElement('restaurant-detail');
  const { restaurant, FavoriteRestaurantIdb } = restaurantData;
  restaurantDetail.item = { restaurant, FavoriteRestaurantIdb };
  restaurantDetail.tabIndex = '0';

  return restaurantDetail;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'footer');
  footer.innerHTML = `
        <div class="container">
            <div class="footer__sitemap">
            <h1 class="footer__sitemap__brand">Restologue</h1>
            <nav>
                <h2 class="footer__sitemap__nav__heading">Sitemap</h2>
                <ul>
                <li><a href="#/" class="footer__sitemap__nav__item">Home</a></li>
                <li><a href="#/favorite" class="footer__sitemap__nav__item">Favorite</a></li>
                <li><a href="https://github.com/greezyzilla/Dicoding-FE-Expert-Katalog-Restoran" class="footer__sitemap__nav__item">About Us</a></li>
                </ul>
            </nav>
            </div>
            <p class="footer__copyright">Copyright © 2021 - GreezyZilla</p>
        </div>
    `;
  return footer;
};

export {
  createRankList, createRestaurantList, createRestaurantDetail, createFooter,
};
