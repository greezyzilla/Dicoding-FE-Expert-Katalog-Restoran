import Toast from '../utils/alert-helper';
import RestaurantApiSource from '../data/restaurantapi-source';

class RestaurantReview extends HTMLElement {
  set item({ restaurantId, reviews }) {
    this.restaurantId = restaurantId;
    this.reviews = reviews;

    if (restaurantId) this.render();
    else this.renderSkeleton();
  }

  connectedCallback() {
    const reviewForm = this.querySelector('#post-review');
    this.formHandler({ form: reviewForm, restaurantId: this.restaurantId });
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-review">
            <h2 class="restaurant-review__label">Customer Review (${this.reviews.length})</h2>
            <ul class="restaurant-review__container">
                ${this.reviews.map((reviewData) => `<li class="restaurant-review__item"><div><h3>${reviewData.name}</h3><span>${reviewData.date}</span></div><p>${reviewData.review}</p></li>`).join('')}
            </ul>
        </div>
        <div class="section-detail__post-review">
            <h2 class="section-detail__post-review__label">Post a review</h2>
            <form class="section-detail__post-review__form" id="post-review">
                    <div class="section-detail__post-review__form__control">
                        <label for="review-name">Name</label>
                        <input type="text" id="review-name" required>
                    </div>
                    <div class="section-detail__post-review__form__control">
                        <label for="review-body">Review</label>
                        <input type="text" id="review-body" required>
                    </div>
                    <button class="section-detail__post-review__form__submit">Make Review!</button>
            </form>
        </div>
    `;
  }

  renderSkeleton() {
    this.innerHTML = `
    <div class="restaurant-review">
        <h2 class="restaurant-review__label skeleton" style="width:200px">&nbsp;</h2>
        <ul class="restaurant-review__container">
            ${[...new Array(4)].map(() => `
                <li class="restaurant-review__item">
                    <div>
                        <h3 class="skeleton" style="width:120px">&nbsp;</h3>
                        <span class="skeleton" style="width:200px;">&nbsp;</span>
                    </div>
                    <p class="skeleton" style="height:1rem">&nbsp;</p>
                    <p class="skeleton" style="height:1rem">&nbsp;</p>
                </li>
            `).join('')}
        </ul>
    </div>
    <div class="section-detail__post-review">
        <h2 class="section-detail__post-review__label skeleton" style="width:200px">&nbsp;</h2>
        <div class="section-detail__post-review__form" id="post-review">
                <div class="section-detail__post-review__form__control">
                    <label class="skeleton" for="review-name" style="width:100px">&nbsp;</label>
                    <input class="skeleton" type="text" id="review-name" disabled>
                </div>
                <div class="section-detail__post-review__form__control">
                    <label class="skeleton" for="review-body" style="width:100px">&nbsp;</label>
                    <input class="skeleton" type="text" id="review-body" disabled>
                </div>
                <button class="section-detail__post-review__form__submit skeleton disabled">&nbsp;</button>
        </div>
    </div>
    `;
  }

  formHandler(formObj) {
    const { form, restaurantId } = formObj;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewData = {
        id: restaurantId,
        name: event.target[0].value,
        review: event.target[1].value,
      };

      try {
        const { customerReviews } = await RestaurantApiSource.addReview(reviewData);

        form.reset();
        Toast.fire({
          icon: 'success',
          title: 'Reviewed Successfully',
          text: 'Wait for a couple of minutes to be shown',
        });
        this.item = { restaurantId, reviews: customerReviews };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: 'Error Has Occured',
          text: 'Check your internet connection',
        });
      }
    });
  }
}

customElements.define('restaurant-review', RestaurantReview);
