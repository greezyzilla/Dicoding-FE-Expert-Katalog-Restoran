import lazySizes from 'lazysizes/lazysizes.min';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../globals/config';

lazySizes.cfg.lazyClass = 'lazy';

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
            <div>
                <picture class="background">
                    <source type="image/webp" data-srcset="./images/badges/rank-${this.restaurant.rankId}.webp"></source>
                    <source type="image/png" data-srcset="./images/badges/rank-${this.restaurant.rankId}.png"></source>
                    <img class="background lazyload" data-src="./images/badges/rank-${this.restaurant.rankId}.png" alt="">
                </picture>
                <picture class="image lazyload">
                    <source data-srcset="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}"></source>
                    <img class="image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SM + this.restaurant.pictureId}" alt="${this.restaurant.name}">
                </picture>
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
