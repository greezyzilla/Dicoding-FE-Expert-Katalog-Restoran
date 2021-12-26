import '../styles/reset.css';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'regenerator-runtime';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.header'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
