!function(d){function n(n){for(var r,e,t=n[0],o=n[1],i=n[2],a=0,l=[];a<t.length;a++)e=t[a],Object.prototype.hasOwnProperty.call(c,e)&&c[e]&&l.push(c[e][0]),c[e]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(d[r]=o[r]);for(m&&m(n);l.length;)l.shift()();return _.push.apply(_,i||[]),s()}function s(){for(var n,r=0;r<_.length;r++){for(var e=_[r],t=!0,o=1;o<e.length;o++){var i=e[o];0!==c[i]&&(t=!1)}t&&(_.splice(r--,1),n=a(a.s=e[0]))}return n}var e={},c={6:0},_=[];function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return d[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=d,a.c=e,a.d=function(n,r,e){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(r,n){if(1&n&&(r=a(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)a.d(e,t,function(n){return r[n]}.bind(null,t));return e},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var r=(t=window.webpackJsonp=window.webpackJsonp||[]).push.bind(t);t.push=n;for(var t=t.slice(),o=0;o<t.length;o++)n(t[o]);var m=r;_.push([34,3,0,4,2,1,5,7]),s()}({18:function(n,r,e){var t=e(1),o=e(19),e={insert:"head",singleton:!1};t(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,e);n.exports=o.locals||{}},19:function(n,r,e){(r=e(2)(!1)).push([n.i,"html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n",""]),n.exports=r},20:function(n,r,e){var t=e(1),o=e(21),e={insert:"head",singleton:!1};t(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,e);n.exports=o.locals||{}},21:function(n,r,e){(r=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap);"]),r.push([n.i,":root {\n  font-size: 16px;\n  font-family: 'Poppins';\n  --text-2xs: 0.625rem;\n  --text-xs: 0.75rem;\n  --text-sm: 0.812rem;\n  --text-base: 1rem;\n  --text-lg: 1.25rem;\n  --text-xl: 1.562rem;\n  --text-2xl: 1.938rem;\n  --text-3xl: 2.438rem;\n  --text-4xl: 3.062rem;\n  --text-5xl: 3.812rem;\n  --color-primary: #ff6b12;\n  --color-primary-dark: #b6561a;\n  --color-secondary: #14a5ff;\n  --color-secondary-dark: #1a7ab6;\n  --color-black: #505061;\n  --color-gray: #757575;\n  --color-light-gray: #e5e5e5;\n  --font-light: 300;\n  --font-semibold: 600;\n  --font-bold: 700;\n}\n\na,\ninput,\nbutton,\noption {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background: var(--color-black);\n}\n\nbody {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--color-primary);\n  border-radius: 5px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--color-primary-dark);\n  border-radius: 5px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: lightgray;\n}\n\n\n@keyframes showing {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 1);\n  }\n}\n\n@keyframes hiding {\n  from {\n    background-color: rgba(0, 0, 0, 1);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.skeleton {\n  opacity: .7;\n  animation: skeleton-loading 1s linear infinite alternate;\n  width: 100%;\n}\n\n.card-description-skeleton {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n\n.card-description-skeleton .skeleton {\n  height: 0.812rem;\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-color: hsl(200, 20%, 70%);\n  }\n\n  100% {\n    background-color: hsl(200, 20%, 95%);\n  }\n}\n\n.skip-to-content {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 100;\n  text-decoration: none;\n  color: var(--color-primary);\n}\n\n.skip-to-content:focus {\n  top: 0;\n}\n\n#content-anchor {\n  position: absolute;\n  top: -80px;\n  z-index: -1;\n}\n\n.header {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);\n  animation: hiding 500ms;\n  flex-direction: column;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  top: 0;\n}\n\n.header.overlaying,\n.header.active {\n  background-color: rgba(0, 0, 0, 1);\n  animation: showing 300ms;\n}\n\n.header__menu {\n  justify-content: space-between;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 1.2rem 2rem;\n  display: flex;\n  width: 100%;\n  background-color: inherit;\n}\n\n.header__menu__logo {\n  font-size: var(--text-xl);\n  font-weight: var(--font-semibold);\n  color: white;\n  text-decoration: none;\n}\n\n.header__menu #hamburger {\n  color: white;\n  font-size: var(--text-lg);\n  border: none;\n  background: none;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.header__menu #hamburger:focus {\n  outline: 2px solid white;\n}\n\n.header__menu #hamburger:hover {\n  color: var(--color-primary);\n}\n\n.header__dropdown {\n  display: none;\n}\n\n.header.active .header__dropdown {\n  box-sizing: border-box;\n  align-items: center;\n  display: flex;\n}\n\n.header__dropdown {\n  width: 100%;\n}\n\n.header__dropdown__nav {\n  padding: 0;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  width: inherit;\n  margin-bottom: 1rem;\n}\n\n.header__dropdown__item {\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header__dropdown__item:hover {\n  background-color: rgb(56, 56, 56);\n}\n\n.header__dropdown__item a {\n  text-decoration: none;\n  background-color: inherit;\n  color: white;\n  width: inherit;\n  height: inherit;\n}\n\n.container {\n  max-width: 1000px;\n  padding: 0 1rem;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n.section-loading {\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\n.section-loading__spinner {\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid var(--color-primary);\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.restaurant-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 2rem;\n}\n\n.restaurant-container__error {\n  text-align: center;\n  color: white;\n  padding: 3rem;\n  width: 100%;\n  background-color: lightcoral;\n  box-sizing: border-box;\n}\n\n.restaurant-item {\n  display: flex;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.restaurant-item:hover {\n  transform: scale(1.025);\n  transition: .1s ease-in-out;\n}\n\n.restaurant-item__image {\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.restaurant-item__body {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 1.2rem 1.2rem 1rem 1.2rem;\n  gap: 1.2rem;\n}\n\n.restaurant-item__body__informations {\n  display: flex;\n  flex-direction: column;\n  gap: .8rem;\n}\n\n.restaurant-item__body__informations__title {\n  font-size: var(--text-lg);\n  font-weight: var(--font-semibold);\n  color: var(--color-black);\n  line-height: 120%;\n}\n\n.restaurant-item__body__informations__details {\n  color: var(--color-black);\n  justify-content: flex-start;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  align-items: flex-start;\n  font-size: var(--text-sm);\n  gap: .5rem;\n}\n\n.restaurant-item__body__informations__details__item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.restaurant-item__body__informations__details__item svg {\n  width: 1rem;\n  height: 1rem;\n  stroke: var(--color-primary);\n  fill: var(--color-primary);\n}\n\n.restaurant-item__body__informations__details__description {\n  color: gray;\n  font-weight: 300;\n  font-size: var(--text-sm);\n  line-height: 140%;\n}\n\n.restaurant-item__body__informations__details__button {\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  background-color: var(--color-secondary);\n  color: white;\n  width: 100%;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.restaurant-item__body__informations__details__button:focus {\n  outline: 2px solid black;\n}\n\n.pagination-container {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n\n.pagination-item {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  border: none;\n  background-color: white;\n  color: gray;\n  font-weight: 600;\n  font-size: var(--text-base);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.pagination-item:hover {\n  background-color: rgb(241, 241, 241);\n}\n\n.pagination-item.active {\n  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);\n  background-color: var(--color-primary);\n  color: white\n}\n\n.footer {\n  background-color: whitesmoke;\n}\n\n.footer__sitemap {\n  display: flex;\n  justify-content: space-between;\n  padding: 2rem 1rem;\n}\n\n.footer__sitemap__brand {\n  font-size: var(--text-xl);\n  font-weight: 600;\n  color: var(--color-black)\n}\n\n.footer__sitemap__nav__heading {\n  padding-top: 0.2rem;\n  padding-bottom: 0.5rem;\n  color: var(--color-black);\n  font-weight: var(--font-semibold);\n  font-size: var(--text-base);\n}\n\n.footer__sitemap__nav__item {\n  justify-content: flex-end;\n  text-decoration: none;\n  font-size: var(--text-sm);\n  color: var(--color-primary-dark);\n}\n\n.footer__copyright {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center;\n  font-size: var(--text-sm);\n}\n\n@media screen and (min-width:600px) {\n  :root {\n    font-size: 18px;\n  }\n}\n\n@media screen and (min-width:700px) {\n  .header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .header__menu #hamburger {\n    display: none;\n  }\n\n  .header__dropdown {\n    display: flex;\n  }\n\n  .header__dropdown__nav {\n    flex-direction: row;\n    margin-bottom: 0;\n    gap: 1rem;\n    margin-right: 1rem;\n  }\n\n  .header__dropdown__item {\n    height: 100%;\n    width: auto;\n  }\n\n  .header__dropdown__item:hover {\n    background: none;\n  }\n\n  .header__dropdown__item a {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-size: var(--text-sm);\n  }\n\n  .header__dropdown__item a:hover {\n    color: var(--color-primary-dark);\n  }\n\n  .restaurant-container {\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    max-width: 650px;\n    gap: 2rem 1rem;\n    margin: 0 auto;\n  }\n\n  .restaurant-item {\n    flex-direction: column;\n    max-width: 280px;\n    height: 400px;\n    border-radius: 10px;\n  }\n\n  .restaurant-item__image {\n    width: 100%;\n    height: 170px;\n  }\n\n  .restaurant-item__body {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .restaurant-item__body__informations__title {\n    font-size: var(--text-base);\n  }\n\n  .restaurant-item__body__informations__details {\n    width: 100%;\n    flex-direction: row;\n    /* justify-content: space-between; */\n    gap: 1rem;\n  }\n\n  .restaurant-container__error,\n  .pagination-container {\n    grid-column: span 2;\n  }\n}\n\n@media screen and (min-width:1000px) {\n  .header__dropdown__item a {\n    font-size: var(--text-base);\n  }\n\n  .restaurant-container {\n    grid-template-columns: repeat(3, 1fr);\n    max-width: inherit;\n  }\n\n  .restaurant-container__error,\n  .pagination-container {\n    grid-column: span 3;\n  }\n}",""]),n.exports=r},22:function(n,r,e){var t=e(1),o=e(23),e={insert:"head",singleton:!1};t(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,e);n.exports=o.locals||{}},23:function(n,r,e){(r=e(2)(!1)).push([n.i,".section-hero {\r\n  position: relative;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 950px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 10rem 0 5rem 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.section-hero__background {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: inherit;\r\n  height: inherit;\r\n  overflow-x: hidden;\r\n  background-image: linear-gradient(0, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));\r\n}\r\n\r\n.section-hero__background__picture {\r\n  position: absolute;\r\n  width: inherit;\r\n  height: inherit;\r\n  z-index: -10;\r\n  object-fit: cover;\r\n}\r\n\r\n.section-hero .container {\r\n  z-index: 10;\r\n}\r\n\r\n.section-hero__copywriting {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.section-hero__copywriting__pre-heading {\r\n  color: white;\r\n  font-size: var(--text-base);\r\n  font-weight: var(--font-light);\r\n}\r\n\r\n.section-hero__copywriting__heading {\r\n  color: white;\r\n  font-size: var(--text-3xl);\r\n  font-weight: var(--font-semibold);\r\n  text-align: center;\r\n}\r\n\r\n.section-hero__copywriting__sub-heading {\r\n  color: rgb(199, 199, 199);\r\n  width: 80%;\r\n  text-align: center;\r\n  line-height: 150%;\r\n  font-weight: var(--font-light);\r\n}\r\n\r\n.section-hero__form {\r\n  display: flex;\r\n  width: 95%;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  padding: 2rem 1.8rem;\r\n  gap: 1rem;\r\n  border-radius: 15px;\r\n  margin: 2rem auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.section-hero__form__control {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 0.5rem;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.section-hero__form__control__label {\r\n  color: var(--color-black);\r\n  font-weight: 500;\r\n  font-size: var(--text-sm);\r\n}\r\n\r\n.section-hero__form__control__input {\r\n  color: var(--color-gray);\r\n  font-weight: 400;\r\n  font-size: var(--text-base);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  padding: .5rem .8rem;\r\n}\r\n\r\n.section-hero__form__control__input::placeholder {\r\n  color: rgb(180, 180, 180);\r\n}\r\n\r\n.section-hero__form__control__input:focus {\r\n  outline: none;\r\n}\r\n\r\n.section-hero__form__control__select {\r\n  color: var(--color-gray);\r\n  font-weight: 400;\r\n  font-size: var(--text-base);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-control {\r\n  background: none !important;\r\n  border-radius: 0 !important;\r\n  box-shadow: none !important;\r\n  border: none !important;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-control input,\r\n.section-hero__form__control .ts-wrapper .ts-control .item {\r\n  padding: 0 .5rem !important;\r\n  font-size: 1rem !important;\r\n  min-height: 44px !important;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-control input {\r\n  min-width: 0 !important;\r\n  width: 0 !important;\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-control .item {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-dropdown {\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-dropdown .option {\r\n  padding: 1rem;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-dropdown .option:hover,\r\n.section-hero__form__control .ts-wrapper .ts-dropdown .active,\r\n.section-hero__form__control .ts-wrapper .ts-dropdown .active.selected {\r\n  color: white;\r\n  background-color: lightsalmon;\r\n}\r\n\r\n.section-hero__form__control .ts-wrapper .ts-dropdown .selected {\r\n  background-color: rgb(248, 205, 188);\r\n}\r\n\r\n.section-hero__form__submit {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.3rem;\r\n  font-size: var(--text-base);\r\n  font-weight: var(--font-semibold);\r\n  padding: 1rem 0;\r\n  border: none;\r\n  background-color: var(--color-primary);\r\n  cursor: pointer;\r\n  color: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.section-hero__form__submit:focus {\r\n  outline: 2px solid var(--color-black);\r\n}\r\n\r\n.section-hero__form__submit__icon {\r\n  stroke: currentColor;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.section-rank {\r\n  background-color: white;\r\n  padding: 4rem 1rem 0 1rem;\r\n}\r\n\r\n.section-rank .container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0rem;\r\n}\r\n\r\n.section-rank__copywriting,\r\n.section-content__copywriting {\r\n  text-align: center;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.section-rank__heading,\r\n.section-content__heading {\r\n  font-size: var(--text-xl);\r\n  color: var(--color-black);\r\n  font-weight: var(--font-semibold);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.section-rank__sub-heading,\r\n.section-content__sub-heading {\r\n  font-size: var(--text-base);\r\n  font-weight: 300;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.rank-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.rank-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  padding-top: .72rem;\r\n  position: relative;\r\n}\r\n\r\n.rank-item div {\r\n  width: 12.63rem;\r\n  height: 15.7875rem;\r\n}\r\n\r\n.rank-item div .background {\r\n  position: absolute;\r\n  object-fit: cover;\r\n  width: inherit;\r\n  height: inherit;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.rank-item .image {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 10.8rem;\r\n  height: 10.8rem;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n  margin: .72rem .47rem;\r\n  z-index: 10;\r\n}\r\n\r\n.rank-item .title {\r\n  font-weight: var(--font-light);\r\n  color: var(--color-gray);\r\n}\r\n\r\n.rank-item p {\r\n  color: var(--color-gray);\r\n  font-weight: var(--font-light);\r\n}\r\n\r\n.section-content {\r\n  background-color: white;\r\n  padding: 4rem 1rem;\r\n  position: relative;\r\n}\r\n\r\n.section-content__anchor {\r\n  position: absolute;\r\n  top: -80px;\r\n  z-index: -1;\r\n}\r\n\r\n.section-aside {\r\n  height: 180px;\r\n  background-color: white;\r\n  padding: 0 1rem 2rem 1rem;\r\n}\r\n\r\n.section-aside .container {\r\n  display: flex;\r\n  height: 100%;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n}\r\n\r\n.section-aside__promotion-container {\r\n  background-image: linear-gradient(to right, #EAE8E9, white, #EAE8E9);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 1rem;\r\n}\r\n\r\n.section-aside__heading {\r\n  font-size: var(--text-lg);\r\n  font-weight: var(--font-semibold);\r\n  color: var(--color-black);\r\n}\r\n\r\n.section-aside__action {\r\n  text-decoration: none;\r\n  border-radius: 30px;\r\n  background-color: var(--color-primary-dark);\r\n  color: white;\r\n  padding: 0.5rem 3rem;\r\n  font-weight: 500;\r\n  opacity: 0.9;\r\n}\r\n\r\n.section-aside__action:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.section-aside__image {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width:700px) {\r\n  .section-hero {\r\n    height: 600px;\r\n  }\r\n\r\n  .section-hero__form {\r\n    flex-direction: row;\r\n    border-radius: 100px;\r\n    padding: .5rem 1rem .5rem 2rem;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 750px;\r\n    gap: 0;\r\n  }\r\n\r\n  .section-hero__form__control {\r\n    gap: 0;\r\n  }\r\n\r\n  .section-hero__form__control__label {\r\n    font-weight: 400;\r\n  }\r\n\r\n  .section-hero__form__control input,\r\n  .section-hero__form__control select,\r\n  .section-hero__form__control input::placeholder,\r\n  .section-hero__form__control .ts-wrapper .ts-control .item {\r\n    color: var(--color-secondary);\r\n    font-weight: 400;\r\n    font-size: var(--text-base);\r\n  }\r\n\r\n  .section-hero__form__control input,\r\n  .section-hero__form__control .ts-wrapper,\r\n  .section-hero__form__control .ts-wrapper .ts-control,\r\n  .section-hero__form__control .ts-wrapper .ts-control .item {\r\n    border: none;\r\n    padding: 0;\r\n    padding-left: 0 !important;\r\n  }\r\n\r\n  .section-hero__form__submit {\r\n    border-radius: 50%;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\r\n  }\r\n\r\n  .section-hero__form__submit__label {\r\n    display: none;\r\n  }\r\n\r\n  .section-rank {\r\n    padding-bottom: .2rem;\r\n  }\r\n\r\n  .section-rank .container {\r\n    gap: 2.3rem;\r\n  }\r\n\r\n  .rank-container {\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    gap: 3rem;\r\n  }\r\n\r\n  .rank-item div {\r\n    width: 8rem;\r\n    height: 10rem;\r\n  }\r\n\r\n  .rank-item .image {\r\n    width: 6.7rem;\r\n    height: 6.7rem;\r\n    margin: .62rem .35rem;\r\n  }\r\n\r\n  .rank-item:nth-child(1) {\r\n    order: 1;\r\n    transform: scale(1.3) translate(0, -11%);\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .rank-item:nth-child(2) {\r\n    order: 0;\r\n  }\r\n\r\n  .rank-item:nth-child(3) {\r\n    order: 3;\r\n  }\r\n\r\n  .section-aside__promotion-container {\r\n    background-image: linear-gradient(to right, #EAE8E9 0%, white 50%);\r\n    align-items: flex-start;\r\n    padding-left: 2rem;\r\n  }\r\n\r\n  .section-aside__heading {\r\n    line-height: 120%;\r\n  }\r\n\r\n  .section-aside__action {\r\n    margin-left: .5rem;\r\n  }\r\n\r\n  .section-aside__image {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (min-width:1000px) {\r\n  .section-hero {\r\n    height: 850px;\r\n    justify-content: center;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .rank-item div {\r\n    width: 10rem;\r\n    height: 12.5rem;\r\n  }\r\n\r\n  .rank-item .image {\r\n    width: 8.4rem;\r\n    height: 8.4rem;\r\n    margin: .66rem .4rem;\r\n  }\r\n}",""]),n.exports=r},29:function(n,r,e){var t=e(1),o=e(30),e={insert:"head",singleton:!1};t(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,e);n.exports=o.locals||{}},30:function(n,r,e){(r=e(2)(!1)).push([n.i,".section-favorite {\r\n    padding: 8rem 1rem;\r\n    background-color: white;\r\n    min-height: 500px;\r\n}\r\n\r\n.section-favorite__copywriting {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.section-favorite__copywriting__heading {\r\n    font-size: var(--text-xl);\r\n    color: var(--color-black);\r\n    font-weight: var(--font-semibold);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.section-favorite__copywriting__sub-heading {\r\n    font-size: var(--text-base);\r\n    font-weight: 300;\r\n    color: var(--color-gray);\r\n}\r\n\r\n.section-favorite__content {\r\n    position: relative;\r\n}",""]),n.exports=r},31:function(n,r,e){var t=e(1),o=e(32),e={insert:"head",singleton:!1};t(o="string"==typeof(o=o.__esModule?o.default:o)?[[n.i,o,""]]:o,e);n.exports=o.locals||{}},32:function(n,r,e){(r=e(2)(!1)).push([n.i,'.section-detail {\r\n  padding: 7rem 1.5rem;\r\n  background-color: white;\r\n}\r\n\r\n.section-detail .container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.restaurant-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.restaurant-detail__information {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: .8rem;\r\n}\r\n\r\n.restaurant-detail__information__content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.restaurant-detail__information__content__heading {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: max-content;\r\n  gap: .4rem;\r\n}\r\n\r\n.restaurant-detail__information__content__heading__title {\r\n  font-size: var(--text-xl);\r\n  font-weight: var(--font-semibold);\r\n  line-height: 130%;\r\n}\r\n\r\n.restaurant-detail__information__content__heading__categories {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  height: 100%;\r\n  gap: .6rem;\r\n}\r\n\r\n.restaurant-detail__information__content__heading__categories li {\r\n  color: var(--color-primary);\r\n  font-weight: var(--font-semibold);\r\n}\r\n\r\n.restaurant-detail__information__content__heading__categories li::after {\r\n  content: ".";\r\n  vertical-align: text-top;\r\n  margin-left: .5rem;\r\n}\r\n\r\n.restaurant-detail__information__content__heading__categories li:last-child::after {\r\n  content: "";\r\n}\r\n\r\n.restaurant-detail__information__content__action {\r\n  cursor: pointer;\r\n  margin-top: 0.4rem;\r\n  display: flex;\r\n  gap: .4rem;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: .8rem;\r\n  height: fit-content;\r\n  width: fit-content;\r\n  font-weight: var(--font-semibold);\r\n  color: var(--color-black);\r\n  background-color: whitesmoke;\r\n  opacity: .8;\r\n}\r\n\r\n.restaurant-detail__information__content__action svg {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  fill: var(--color-black);\r\n  color: var(--color-black);\r\n}\r\n\r\n.restaurant-detail__information__content__action:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.restaurant-detail__information__content__action.active {\r\n  background-color: var(--color-primary);\r\n  color: white;\r\n}\r\n\r\n.restaurant-detail__information__content__action.active svg {\r\n  fill: white;\r\n  color: white;\r\n}\r\n\r\n.restaurant-detail__details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: .5rem;\r\n}\r\n\r\n.restaurant-detail__details__item {\r\n  font-size: var(--text-base);\r\n  display: flex;\r\n  gap: .4rem;\r\n  color: lightslategray;\r\n  line-height: 140%;\r\n}\r\n\r\n.restaurant-detail__details__item svg {\r\n  margin-top: .1rem;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  stroke: var(--color-primary);\r\n  fill: var(--color-primary);\r\n}\r\n\r\n.restaurant-detail__body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.restaurant-detail__body__image {\r\n  width: 100%;\r\n  height: 60vw;\r\n  object-fit: cover;\r\n  border-radius: 15px;\r\n}\r\n\r\n.restaurant-detail__body__menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.restaurant-detail__body__menu__item,\r\n.restaurant-detail__description,\r\n.restaurant-review {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: .6rem;\r\n}\r\n\r\n.restaurant-detail__body__menu__item__label,\r\n.restaurant-detail__description__label,\r\n.restaurant-review__label,\r\n.section-detail__post-review__label {\r\n  font-weight: var(--font-semibold);\r\n}\r\n\r\n.restaurant-detail__body__menu__item__list {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: .3rem;\r\n  overflow-x: scroll;\r\n}\r\n\r\n.restaurant-detail__body__menu__item__list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.restaurant-detail__body__menu__item__list li {\r\n  height: 4rem;\r\n  display: flex;\r\n  flex-basis: 6.25rem;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: .5rem 1rem;\r\n  border-radius: 15px;\r\n  /* background-color: rgb(253, 244, 241); */\r\n  background-color: hsl(203, 75%, 97%);\r\n  font-size: var(--text-sm);\r\n  color: var(--color-gray);\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  line-height: 120%;\r\n}\r\n\r\n.restaurant-detail__body__menu__item__list li:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.restaurant-detail__description__paragraph {\r\n  line-height: 160%;\r\n  color: var(--color-black);\r\n}\r\n\r\n.restaurant-review__container,\r\n.section-detail__post-review__form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  padding: 1.4rem;\r\n  box-shadow: 0px 2px 20px #EDF4FF;\r\n}\r\n\r\n.restaurant-review__item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: .8rem;\r\n  padding-bottom: 1.4rem;\r\n  border-bottom: 1.2px solid var(--color-light-gray);\r\n}\r\n\r\n.restaurant-review__item:last-child {\r\n  border-bottom: none;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.restaurant-review__item div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.restaurant-review__item div h3,\r\n.section-detail__post-review__form__control label {\r\n  font-weight: var(--font-semibold);\r\n  font-size: var(--text-sm);\r\n  color: var(--color-black);\r\n}\r\n\r\n.restaurant-review__item div span {\r\n  color: var(--color-gray);\r\n  font-size: var(--text-sm);\r\n}\r\n\r\n.restaurant-review__item p {\r\n  color: var(--color-black);\r\n  line-height: 140%;\r\n  font-weight: var(--font-light);\r\n}\r\n\r\n.section-detail__post-review {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.section-detail__post-review__form__control {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.section-detail__post-review__form__control input {\r\n  font-weight: var(--font-light);\r\n  border: none;\r\n  border-bottom: 1px solid var(--color-gray);\r\n  padding: 1rem;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.section-detail__post-review__form__submit {\r\n  background-color: var(--color-secondary);\r\n  font-weight: var(--font-semibold);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n}\r\n\r\n@media screen and (min-width:700px) {\r\n  .restaurant-detail__information__content {\r\n    align-items: center;\r\n  }\r\n\r\n  .restaurant-detail__information__content__heading {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .restaurant-detail__details {\r\n    flex-direction: row-reverse;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .restaurant-detail__information {\r\n    gap: 0;\r\n  }\r\n\r\n  .restaurant-detail__body {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .restaurant-detail__body__image {\r\n    height: 18rem;\r\n  }\r\n\r\n  .restaurant-detail__body__menu {\r\n    width: 50%;\r\n  }\r\n}',""]),n.exports=r}});