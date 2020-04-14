/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 */
import { LitElement, html, customElement, property } from 'lit-element'

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <cs-counter> as an HTML tag.
 */
@customElement('cs-counter')
export class CounterElement extends LitElement {
  constructor() {
    super()

    this.add.bind(this)
    this.subtract.bind(this)
  }
  /**
   * Create an observed property. Triggers update on change.
   */
  @property({ type: Number })
  value = 0

  @property({ type: Number })
  step = 1

  add(): void {
    this.value += this.step
  }

  subtract(): void {
    this.value -= this.step
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <style>
        button,
        p {
          display: inline-block;
          font-size: 5rem;
        }

        :host {
          justify-content: center;
          align-items: center;
          display: flex;
        }
      </style>
      <div>
        <button @click="${this.subtract}" aria-label="decrement">-</button>
        <p>${this.value}</p>
        <button @click="${this.add}" aria-label="increment">+</button>
      </div>
    `
  }
}
