import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import '../../../styles/detail.css';
import { createRestaurantDetail, createReviewList } from '../templates/template-creator';
import { changeHeaderToBlack } from '../../utils/header-helper';
import Toast from '../../utils/alert-helper';
import skipToContentInitiator from '../../utils/skiptocontent-initiator';

const Detail = {
  async render() {
    return `
      <section class="section-detail">
        <div class="section-content__anchor" id="content-anchor"></div>
        <div class="container">
          <div id="detailContainer"></div>
          <div id="reviewContainer"></div>
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
        </div>
      </section>
    `;
  },

  async afterRender() {
    changeHeaderToBlack();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantApiSource.detail(url.id);

    const detailContainer = document.querySelector('#detailContainer');
    const restaurantDetail = createRestaurantDetail(restaurant);
    detailContainer.append(restaurantDetail);

    skipToContentInitiator({
      element: document.querySelector('.skip-to-content'),
      focusTarget: restaurantDetail,
      scrollTarget: document.querySelector('#content-anchor'),
    });

    const reviewContainer = document.querySelector('#reviewContainer');
    const reviewList = createReviewList(restaurant.customerReviews);
    reviewContainer.append(reviewList);

    const reviewForm = document.querySelector('#post-review');
    this.formHandler({ form: reviewForm, restaurantId: restaurant.id, reviewList });
  },

  formHandler(formObj) {
    const { form, restaurantId, reviewList } = formObj;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewData = {
        id: restaurantId,
        name: event.target[0].value,
        review: event.target[1].value,
      };

      try {
        const { customerReviews } = await RestaurantApiSource.addReview(reviewData);

        reviewList.items = customerReviews;
        form.reset();
        Toast.fire({
          icon: 'success',
          title: 'Reviewed Successfully',
          text: 'Wait for a couple of minutes to be shown',
        });
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: 'Error Has Occured',
          text: 'Check your internet connection',
        });
      }
    });
  },
};

export default Detail;
