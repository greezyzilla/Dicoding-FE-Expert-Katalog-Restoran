class ReviewList extends HTMLElement {
  set items(reviews) {
    this.reviews = reviews;

    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-review">
            <h2 class="restaurant-review__label">Customer Review (${this.reviews.length})</h2>
            <ul class="restaurant-review__container">
                ${this.reviews.map((reviewData) => `<li class="restaurant-review__item"><div><h3>${reviewData.name}</h3><span>${reviewData.date}</span></div><p>${reviewData.review}</p></li>`).join('')}
            </ul>
        </div>
        `;
  }
}

customElements.define('review-list', ReviewList);
