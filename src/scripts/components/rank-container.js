import './rank-item';

class RankContainer extends HTMLElement {
  set items(restaurants) {
    this.restaurants = restaurants;
    this.render();
  }

  render() {
    this.setAttribute('class', 'rank-container');
    this.innerHTML = '';
    this.restaurants.forEach((restaurant) => {
      const rankItem = document.createElement('rank-item');
      rankItem.item = restaurant;
      this.append(rankItem);
    });
  }
}

customElements.define('rank-container', RankContainer);
