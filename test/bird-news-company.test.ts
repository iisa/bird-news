import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { BirdNewsCompany } from '../src/BirdNewsCompany.js';
import '../src/bird-news-company.js';

describe('BirdNewsCompany', () => {
  let element: BirdNewsCompany;
  beforeEach(async () => {
    element = await fixture(html`<bird-news-company></bird-news-company>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
