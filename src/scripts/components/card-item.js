import "./explore-modal.js";
import { restaurants } from "../../DATA.json";

class CardItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  connectedCallback() {
    const item = restaurants.find((item) => `card-${item.id}` === this.id);
    this.buttonCTA = document.createElement("button");
    this.buttonCTA.setAttribute("class", "button");
    this.buttonCTA.ariaLabel = `name ${item.name}, location ${item.city}, rating ${item.rating} Read More`;
    this.buttonCTA.innerHTML = "Read More";
    this.buttonCTA.addEventListener("click", (event) => {
      const modal = document.createElement("explore-modal");
      modal.item = item;
      document.getElementById("overlay").append(modal);
    });
    this.querySelector(".body").append(this.buttonCTA);
  }

  render() {
    this.id = `card-${this._item.id}`;
    this.setAttribute("class", "card");
    this.ariaLabel = this._item.name;
    this.innerHTML = `
        <img
          class="image"
          src=${this._item.pictureId}
          alt="${this._item.name} Picture"
        />
        <div class="body">
          <div class="informations">
            <h2 class="title">${this._item.name}</h2>
            <div class="details">
              <div class="item">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-map-pin"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  ></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    fill="white"
                    stroke="white"
                  ></circle>
                </svg>
                <span class="value">${this._item.city}</span>
              </div>
              <div class="item">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-star"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg>
                <span class="value">${this._item.rating.toFixed(1)}</span>
              </div>
            </div>
            <p class="description">
              ${this._item.description.slice(0, 80)}...
            </p>
          </div>
        </div>
    `;
  }
}

customElements.define("card-item", CardItem);
