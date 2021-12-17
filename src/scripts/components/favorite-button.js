import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import Toast from '../utils/alert-helper';

class FavoriteButton extends HTMLElement {
  set item(restaurant) {
    this.restaurant = restaurant;

    this.isRestaurantExist = async (id) => {
      const favoriteRestaurant = await FavoriteRestaurantIdb.getRestaurant(id);
      return !!favoriteRestaurant;
    };

    this.render();
  }

  async render() {
    const { id } = this.restaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  }

  renderLike() {
    this.innerHTML = `
        <button class="restaurant-detail__information__content__action" aria-label="add to favorites" id="likeButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="restaurant-detail__information__content__action__text">Favorite</span>
        </button>
    `;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      Toast.fire({
        icon: 'success',
        title: 'Added Successfully',
        text: `${this.restaurant.name} is added to Favorite`,
      });
      this.render();
    });
  }

  renderLiked() {
    this.innerHTML = `
        <button class="restaurant-detail__information__content__action active" aria-label="add to favorites" id="likeButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="restaurant-detail__information__content__action__text">Favorite</span>
        </button>
    `;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      Toast.fire({
        icon: 'success',
        title: 'Removed Successfully',
        text: `${this.restaurant.name} is removed from Favorite`,
      });
      this.render();
    });
  }
}

customElements.define('favorite-button', FavoriteButton);
