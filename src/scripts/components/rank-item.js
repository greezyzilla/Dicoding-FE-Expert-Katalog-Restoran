import CONFIG from '../globals/config';

class RankItem extends HTMLElement {
  set item(restaurant) {
    this.restaurant = restaurant;
    if (!restaurant.id) this.renderSkeleton();
    else this.render();
  }

  render() {
    this.setAttribute('class', 'rank-item');
    this.ariaLabel = `${this.restaurant.name} best number ${this.restaurant.rankId}`;
    this.innerHTML = `
            <div style="background-image: url('./images/badges/rank-${this.restaurant.rankId}.png')">
                <image src="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}" class="image" alt="${this.restaurant.name}" />
            </div>
            <p>${this.restaurant.name}</p>
        `;
  }

  renderSkeleton() {
    this.setAttribute('class', 'rank-item');
    this.ariaLabel = 'loading';
    this.innerHTML = `
            <div class="skeleton" style="background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')"></div>
            <p class='skeleton'>&nbsp;</p>
        `;
  }
}

customElements.define('rank-item', RankItem);
