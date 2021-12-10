import "regenerator-runtime"; /* for async await transpile */
import "../styles/reset.css";
import "../styles/main.css";
import "./components/card-container.js";
import { restaurants } from "../DATA.json";

const searchForm = document.getElementById("discover-form");

const overlay = document.querySelector("#overlay");
const header = document.querySelector(".header");
const io = new IntersectionObserver((entry) => {
  entry[0].isIntersecting
    ? header.classList.remove("overlaying")
    : header.classList.add("overlaying");
});
io.observe(overlay);

const drawerToggle = document.querySelector('.drawer-toggle');
const headerMenu = document.querySelector('.header');
drawerToggle.addEventListener('click',()=> {
  headerMenu.classList.toggle('active');
})
drawerToggle.addEventListener("keyup",(event)=>{
  if(event.keyCode === 13){
    headerMenu.classList.toggle('active');
  }
});

window.addEventListener("load", () => {
  const skipToContent = document.querySelector('.skip-to-content');
  skipToContent.addEventListener('keyup',(event)=>{
    if(event.keyCode===13) document.querySelector('.search').focus();
  })
  skipToContent.focus();
  skipToContent.scrollIntoView();

  const bestItems = restaurants.sort((a,b)=> b.rating - a.rating).slice(0,3);
  const bestParentElement = document.querySelector('.rank .items');
  bestItems.forEach((item,index) => {
    const bestElement = document.createElement('li');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('p');

    image.src = item.pictureId;
    image.classList.add('image');
    image.alt = `${item.name} picture`;
    
    title.innerHTML = item.name;
    title.classList.add('title');
    
    bestElement.ariaLabel = `${item.name} best number ${index+1}`;

    imageContainer.append(image);
    bestElement.classList.add("item")
    bestElement.append(imageContainer,title);
    bestParentElement.append(bestElement);
  })

  const cities = new Array(
    ...new Set(restaurants.map((res) => res.city))
  ).sort();

  const cityMenuSelect = document.querySelector("#select-city .select .menu");
  cities.forEach((city,index) => {
    const cityElement = document.createElement("div");
    const cityLabel = document.createElement('label');
    const cityInput = document.createElement('input')

    cityInput.setAttribute('type','radio');
    cityInput.setAttribute('class','radio');
    cityInput.setAttribute('name','city');
    cityInput.setAttribute('value',city);
    cityInput.setAttribute('id',`city-${index+1}`);
    cityLabel.setAttribute('class','item');
    cityLabel.setAttribute('for',`city-${index+1}`);
    cityLabel.innerHTML = city;
    cityLabel.tabIndex ='0'
    
    cityElement.append(cityInput,cityLabel);
    cityMenuSelect.append(cityElement);
  });

  const selectToggles = document.querySelectorAll(".discover-form .form-control .select .toggle");
  selectToggles.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
      const activeToggle = document.querySelector('.select.active');
      if(activeToggle && activeToggle.parentElement && activeToggle.parentElement.id !== toggle.parentNode.parentNode.id) activeToggle.classList.remove('active')
      toggle.parentElement.classList.toggle('active');
    })

    toggle.addEventListener("keyup",(event)=>{
      if(event.keyCode === 13){
        toggle.click();
      }
    });
  });

  const selectItems = document.querySelectorAll(".select .menu .item");
  selectItems.forEach(item=>{
    const selectElement = item.parentNode.parentNode.parentNode;
    const selectLabel = selectElement.children[0].children[0];
    
    item.addEventListener('click',()=>{
      selectElement.classList.toggle('active');
      selectLabel.innerHTML = item.innerHTML;
    })

    item.addEventListener('keydown',(event)=>{
      if(event.keyCode === 13){
        event.target.click();
        selectElement.focus();
      }

    })
  })

  const ContentContainer = document.querySelector(".content .container");
  const CardContainer = document.createElement("card-container");
  CardContainer.items = restaurants;
  CardContainer.setAttribute("id", "restaurants");
  ContentContainer.appendChild(CardContainer);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchData = new Object();

  for (var [key, value] of formData.entries()) { 
    searchData[key] = value
  }
    
  const restaurantsElement = document.querySelector("#restaurants");
  
  const restaurantsFilteredByCity = !searchData.city || +searchData.city === 0 ? restaurants : restaurants.filter((restaurant) => restaurant.city === searchData.city);
  
  const restaurantsFilteredByName = restaurantsFilteredByCity.filter(
    (restaurant) =>
    restaurant.name
    .toLocaleLowerCase()
    .includes(searchData.search.toLocaleLowerCase() )
    );
    
  const restaurantsFilteredByRating =
  +searchData.rating
    ? restaurantsFilteredByName.filter((restaurant) => {
      switch (searchData.rating) {
        case "1":
          return Math.floor(restaurant.rating) <= +searchData.rating;
        case "2":
          return (
            Math.floor(restaurant.rating) <= +searchData.rating &&
            Math.floor(restaurant.rating) > +searchData.rating - 1
          );
        case "3":
          return (
            Math.floor(restaurant.rating) <= +searchData.rating &&
            Math.floor(restaurant.rating) > +searchData.rating - 1
          );
        case "4":
          return Math.floor(restaurant.rating) >= +searchData.rating;
        }
      }): restaurantsFilteredByName

  restaurantsElement.items = restaurantsFilteredByRating;
  setTimeout(()=>{
    document.querySelector(".skip-to-card").scrollIntoView({block:"start"});
  },50)
  
  document.querySelector(".content .subtitle").focus();
});