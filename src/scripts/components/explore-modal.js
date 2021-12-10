class ExploreModal extends HTMLElement {
  set item(item) {
    this._item = item;

    this.buttonClose = document.createElement("button");
    this.buttonClose.setAttribute("class", "close");
    this.buttonClose.innerHTML = "X";
    this.buttonClose.tabIndex = "1";
    this.buttonClose.addEventListener("click", (event) => {
      event.preventDefault()
      document.querySelector(`#card-${this._item.id} .button`).focus();
      this.remove();
    });
    this.buttonClose.addEventListener('keydown',(event)=>{
      if(event.shiftKey && event.keyCode === 9) event.preventDefault();
    })
    this.render();
  }

  connectedCallback(){
    const body = document.querySelector(".modal .body")
    body.focus()
    body.addEventListener("keydown",(event)=>{
      if(event.shiftKey === false && event.keyCode === 9) event.preventDefault();
    })
  }

  render() {
    this.setAttribute("class", "backdrop");
    this.innerHTML = `
    <div class="modal">
      <img
        src="${this._item.pictureId}"
        alt="${this._item.name} Picture"
        class="image"
      />
      <div class="body" tabindex="2">
        <h1 class="title">${this._item.name}</h1>
        <div class="details">
          <div class="item">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1.3rem"
              height="1.3rem"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <div class="label">
              <h2 class="title">Location</h2>
              <p class="value">${this._item.city}</p>
            </div>
          </div>
          <span>|</span>
          <div class="item">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1.3rem"
              height="1.3rem"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="modal-icon"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
            <div class="label">
              <h2 class="title">Rating</h2>
              <p class="value">${this._item.rating.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div class="label">
          <h2 class="title">Description</h2>
          <p class="value">${this._item.description}</p>
        </div>
      </div>
    </div>
    `;
    this.querySelector(".modal").append(this.buttonClose);
    this.addEventListener("click", (event) => {
      event.preventDefault()
      document.querySelector(`#card-${this._item.id} .button`).focus();
      this.remove();
    });
  }
}

customElements.define("explore-modal", ExploreModal);
