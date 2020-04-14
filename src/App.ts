import { LitElement, html, property, customElement } from 'lit-element'

import './components/counter'

@customElement('cs-app')
export class CounterElement extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
        }
      </style>
      <cs-counter value="0" step="2"></cs-counter>
      <cs-counter value="34" step="5"></cs-counter>
      <cs-counter value="-20" step="10"></cs-counter>
      <cs-counter value="423" step="100"></cs-counter>
    `
  }
}
