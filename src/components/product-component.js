class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return ['brand', 'img', 'name', 'collection', 'description', 'price'];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section class="product-card__header">
        <h2>${this.brand}</h2>
        <img src="${this.img}" alt="${this.name} image">
      </section>
      <section class="product-card__main-content">
        <section class="product-card__main-content__body">
          <h2>${this.name}</h2>
          <h3>${this.collection}</h3>
          <p>${this.description}</p>
        </section>
        <section class="product-card__main-content__footer">
          <span>${this.price}</span>
          <input type="button" value="buy now">
        </section>
      </section>
      ${this.getStyle()}
    `;
    return template;
  }
  getStyle() {
    return `
      <style>
        :host{
          --primary-color: #5b67b1;
          --secondary-color: #435084;
          --dark-color: #040a25;
          --text-secondary-color: #88888b;
          display: grid;
          max-width: 360px;
          margin: 0 auto;
          display: grid;
          grid-template-rows: 220px auto;
          border: 2px solid var(--dark-color);
          border-radius: 8px;
        }
        .product-card__header{
          background-color: var(--primary-color);
          position: relative;
        }
        .product-card__header h2{
          font-family: Arial, Helvetica, sans-serif;
          font-size: 88px;
          position: absolute;
          top: 20px;
          left: 15px;
          margin:0;
          color: var(--secondary-color);
          opacity: 0.8;
        }
        .product-card__header img{
          width: 70%;
          position: relative;
          left: 50%;
          top: 44%;
          transform: translateX(-50%);
        }
        .product-card__main-content{
          padding: 15px;
          background-color: white;
        }
        .product-card__main-content__body h2{
          margin-bottom: 5px;
        }
        .product-card__main-content__body h3{
          text-transform: uppercase;
          color: var(--text-secondary-color);
          font-size:16px;
          margin: 0;
        }
        .product-card__main-content__footer{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 50px 0 30px 0;
        }
        .product-card__main-content__footer span{
          font-size: 24px;
          font-weight: bold;
          color: var(--text-secondary-color);
        }
        .product-card__main-content__footer input{
          border: 1px solid var(--secondary-color);
          color: white;
          padding: 10px 20px;
          border-radius: 15px;
          text-transform: uppercase;
          box-shadow: 3px 3px 0px 0px var(--secondary-color);
          background-color: var(--primary-color);
          font-weight: bold;
          cursor: pointer;
        }
        @media (min-width: 700px) {
          :host{
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            max-width: 680px;
          }
          .product-card__main-content{
            padding: 25px;
          } 
          .product-card__main-content__body h2{
            margin: 0px 0 25px 0;
            font-size: 30px;
          }
          .product-card__main-content__body p{
            margin: 16px 0 16px 25px;
          }
          .product-card__main-content__footer{
            margin-top: 28px;
            margin-bottom: 8px;
          }
          .product-card__header img{
            width: 150%;
            transform: rotate(-31deg);
            left: -40%;
            top: 25%;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define('product-card', ProductCard);