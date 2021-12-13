import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const birdNewsLogo = new URL('../../assets/bird_news_3.png', import.meta.url)
  .href;

export class BirdNewsCompany extends LitElement {
  @property({ type: String }) title = 'Bird News Company';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
      background-color: var(--bird-news-company-background-color, #fff);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin: 10px auto;
      max-height: 400px;
      padding: 10px;
      border: 1px solid #ccc;
    }

    .logo img {
      max-height: inherit;
      border: 1px solid #ccc;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <div class="logo">
          <img alt="Bird News Company logo" src=${birdNewsLogo} />
        </div>
        <h1>${this.title}</h1>
        <p>Exclusive content</p>
      </main>

      <p class="app-footer">
        Nicodemus Velasco &copy; ${new Date().getFullYear()}
      </p>
    `;
  }
}
