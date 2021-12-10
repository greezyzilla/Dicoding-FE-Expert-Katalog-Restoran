import "./card-item.js";

class CardContainer extends HTMLElement {
  set items(items) {
    this._items = items;
    this.page = 0;

    this.pagination = document.createElement("nav");
    this.pagination.setAttribute("id", "pagination");
    this.pagination.setAttribute("class", "pagination-container");
    for (let page = 0; page < Math.ceil(this._items.length / 6); page++) {
      const paginationItem = document.createElement("button");
      paginationItem.setAttribute("class", "pagination-item");
      paginationItem.ariaLabel = `Go to page ${page+1}`;
      paginationItem.innerHTML = page + 1;
      paginationItem.addEventListener("click", () => {
        this.page = page;
        this.render();
        document.querySelector(".content .subtitle").focus();
        document.querySelector(".skip-to-card").scrollIntoView({block:"start"});
      });
      this.pagination.append(paginationItem);
    }

    this.render();
  }

  render() {
    this.innerHTML = '';
    this.setAttribute("class", "cards");

    this.pagination.childNodes.forEach((item) => {
      if (+item.innerText === this.page + 1) item.classList.add("active");
      else item.classList.remove("active");
    });

    if(this._items.length>0){
      this._items
      .slice(this.page * 6, this.page * 6 + 6)
      .forEach((restaurant) => {
        const CardRestaurant = document.createElement("card-item");
        CardRestaurant.item = restaurant;
        this.appendChild(CardRestaurant);
      });
    } else {
      const notFound = document.createElement('p');
      notFound.innerHTML = "Sorry, the restaurant can't be found";
      notFound.setAttribute('class',"paragraph");
      notFound.tabIndex = "0";

      this.appendChild(notFound);
    }
    this.append(this.pagination);
  }
}

customElements.define("card-container", CardContainer);
