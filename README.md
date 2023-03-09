# Product component

En este pequeño proyecto aprendí a usar webcomponents para crear un componente reautilizable. En esta ocasión se trata de una tarjeta de un producto la cual esta lista para ser reutilizada en alguna aplicación de ventas.

## Tabla de contenido

- [Product component](#product-component)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Screenshot de la solución](#screenshot-de-la-solución)
    - [Links](#links)
    - [Usage](#usage)
  - [El proceso](#el-proceso)
    - [Build with](#build-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Screenshot de la solución

![Solución al reto](src/screenshot.jpg)

### Links

- [Live Site URL](https://brandon328.github.io/nike-component/)

### Usage

1. Clona este repositorio en un entorno local.
2. Abrir el archivo index.html que se encuentra dentro de la ruta `src/index.html`.
3. En este tercer paso usaremos el webcomponent de la siguiente manera en nuestro archivo `.html`:
   ```html
    <product-card 
      brand="Nike"
      img="https://raw.githubusercontent.com/degranda/curso-web-components/main/Proyecto/imgs/nike-blue.png"
      name="Nike Zoom 2020" 
      collection="running collection"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate perspiciatis numquam non quisquam voluptates tenetur repellat temporibus vero sint ut adipisci perferendis, excepturi in, quae quia ducimus molestiae! Vitae."
      price="$2,500">
    </product-card>
   ```
   Leyenda:
    - brand: Es la marca del producto
    - img: Imagen del producto
    - name: Nombre del producto
    - collection: Colección a la que pertenece el producto.
    - description: Descripción del producto

## El proceso

### Build with

- HTML5 semántico
- CSS
- CSS Grid
- Metodología BEM
- Mobile-first workflow
- NPM - Gestor de paquetes
- [Git y Github](https://github.com/) - Control de versiones

### What I learned

Aprendí a crear componentes web reutilizables e independientes de su entorno con Javascript Vanilla. Estos componentes se generan a partir de una clase como se aprecia a continuación:

```javascript
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    // Definimos los atributos que va a tener nuestro componente
    return ['title'];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
      </section>
      ${this.getStyle()}
    `;
    return template;
  }
  getStyle() {
    // Aquí podemos agregar los estilos
    return `
      <style>
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

customElements.define('my-component', MyComponent);
```

## Author

- Website - [Brandon James Huaman](https://www.brandonjj.com)
- Frontend Mentor - [@Brandon328](https://www.frontendmentor.io/profile/Brandon328)
- Twitter - [@BrandonJJ328](https://www.twitter.com/BrandonJJ328)
- Linkedin - [@BrandonJJ](https://www.linkedin.com/in/brandonjj/)
- Github - [@Brandon328](https://github.com/Brandon328)
