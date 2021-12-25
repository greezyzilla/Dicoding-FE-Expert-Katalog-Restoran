import Toast from '../utils/alert-helper';

class FavoriteButton extends HTMLElement {
  set item({ restaurant, FavoriteRestaurantIdb }) {
    this.restaurant = restaurant;
    this.FavoriteRestaurantIdb = FavoriteRestaurantIdb;

    this.isRestaurantExist = async (id) => {
      const favoriteRestaurant = await this.FavoriteRestaurantIdb.getRestaurant(id);
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

    this.removeEventListener('click', this.renderLikedClickHandle);
    this.addEventListener('click', this.renderLikeClickHandle);
  }

  async renderLikeClickHandle() {
    await this.FavoriteRestaurantIdb.putRestaurant(this.restaurant);
    Toast.fire({
      icon: 'success',
      title: 'Added Successfully',
      text: `${this.restaurant.name || '-'} is added to Favorite`,
    });
    this.render();
  }

  renderLiked() {
    this.innerHTML = `
        <button class="restaurant-detail__information__content__action active" aria-label="remove from favorites" id="likedButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span class="restaurant-detail__information__content__action__text">Favorite</span>
        </button>
    `;

    this.removeEventListener('click', this.renderLikeClickHandle);
    this.addEventListener('click', this.renderLikedClickHandle);
  }

  async renderLikedClickHandle() {
    await this.FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
    Toast.fire({
      icon: 'success',
      title: 'Removed Successfully',
      text: `${this.restaurant.name || '-'} is removed from Favorite`,
    });
    this.render();
  }
}

if (!customElements.get('favorite-button')) {
  customElements.define('favorite-button', FavoriteButton);
}
