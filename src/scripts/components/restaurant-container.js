import './restaurant-item';

class RestaurantContainer extends HTMLElement {
  set items(restaurants) {
    this.restaurants = restaurants;
    this.paginationInit();
    this.render();
  }

  paginationInit() {
    this.page = 0;
    this.pagination = document.createElement('nav');
    this.pagination.setAttribute('id', 'pagination');
    this.pagination.setAttribute('class', 'pagination-container');
    for (let page = 0; page < Math.ceil(this.restaurants.length / 6); page += 1) {
      const paginationItem = document.createElement('button');
      paginationItem.setAttribute('class', 'pagination-item');
      paginationItem.ariaLabel = `Go to page ${page + 1}`;
      paginationItem.innerHTML = page + 1;
      paginationItem.addEventListener('click', () => {
        this.page = page;
        this.render();
        document.querySelector('#content-focus').focus();
        document.querySelector('#content-anchor').scrollIntoView();
      });
      this.pagination.append(paginationItem);
    }
  }

  render() {
    this.innerHTML = '';
    this.setAttribute('class', 'restaurant-container');

    this.pagination.childNodes.forEach((item) => {
      if (+item.innerText === this.page + 1) item.classList.add('active');
      else item.classList.remove('active');
    });

    if (this.restaurants.length > 0) {
      this.restaurants
        .slice(this.page * 6, this.page * 6 + 6)
        .forEach((restaurant) => {
          const CardRestaurant = document.createElement('restaurant-item');
          CardRestaurant.item = restaurant;
          this.appendChild(CardRestaurant);
        });
    } else {
      const notFound = document.createElement('p');
      notFound.innerHTML = "Sorry, the restaurant can't be found";
      notFound.setAttribute('class', 'restaurant-container__error');
      notFound.tabIndex = '0';

      this.appendChild(notFound);
    }
    this.append(this.pagination);
  }
}

customElements.define('restaurant-container', RestaurantContainer);
