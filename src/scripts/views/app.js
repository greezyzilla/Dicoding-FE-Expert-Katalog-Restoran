import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { createFooter } from './templates/template-creator';

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;
    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    await this.loading();
    this.content.innerHTML = await page.render();
    await page.afterRender();
    await this.renderFooter();
  }

  async loading() {
    this.content.innerHTML = `
    <section class="section-loading">
      <div class="section-loading__spinner"></div>
    </section>
  `;
  }

  async renderFooter() {
    this.content.append(createFooter());
  }
}

export default App;
