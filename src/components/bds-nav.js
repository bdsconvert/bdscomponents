export class BDSNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.bdsnav = [
      { item: "Home", icon: "../assets/home.png" },
      { item: "Contact", icon: "../assets/contact.png" },
      { item: "Signon", icon: "../assets/signon.png" },
      { item: "Signoff", icon: "../assets/signoff.png" },
      { item: "Register", icon: "../assets/register.png" }
    ];
  }
  connectedCallback() {
    const { shadowRoot } = this;

    let navlist = ``;
    this.bdsnav.forEach((list) => {
      navlist += `
      <li><a href="#"><img src="${list.icon}"><span>${list.item}</span></a></li>
      `;
    });
    //rgba(85, 214, 170, 0.85)
    shadowRoot.innerHTML = `
      <style>
        :host {
          --background: teal;
        }
        header {
          background: var(--background);
          text-align: center;
          position: fixed;
          width: 100%;
          z-index: 999;
        }
        nav {
          position: absolute;
          text-align: left;
          top: 100%;
          left: 0;
          background: var(--background);
          width: 25%;
          transform: scale(1,0);
          transform: translateX(-100%);
          transition: transform 400ms ease-in-out;
          text-align: center;
          min-height: 75vh;
        }
        nav ul {
          margin: 0;
          padding: 0;
          list-style:none;
        }
        nav li {
          display:flex;
          margin-bottom:0.75rem;
          padding-top:1rem;
          padding-left:1rem;
          border-top: 0.1px dotted white;
        }
        nav a {
          color: white;
          text-decoration:none;
          opacity: 0;
          text-transform: uppercase;
          font-size: 0.8rem;
          transition: opacity 150ms ease-in-out;
          border-shadow: 5px 5px 18px #555;
        }
        nav a:hover {
          color: #000;
        }
        nav a span {
          display: inline-block;
          margin-left: 0.5rem;
        }
        nav img {
          filter: invert(100%);
        }
      
        .menu {
          display: none;
        }
        .menu:checked ~ nav {
          transform: scale(1,1);
        }
        .menu:checked ~ nav a {
          opacity: 1;
          transition: opacity 250ms ease-in-out 250ms;
        }
        .menu-label {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          margin-left: 1rem;
          height: 100%;
          align-items: center;
        }
        .menu-label span,
        .menu-label span::before,
        .menu-label span::after {
          display: block;
          background: white;
          height: 2px;
          width: 1.5rem;
          border-radius: 2px;
          position-relative;
        }
        .menu-label span::before,
        .menu-label span::after {
          content: '';
          position: absolute;
        }
        .menu-label span::before {
          bottom: 26px;
        }
        .menu-label span::after {
          top: 26px;
        }

        @media screen and (min-width: 800px) {
          .menu-label {
            display: none;
          }
          header {
            display: grid;
            grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
          }
          .logo {
            grid-column: 2 / 3;
          }
          nav {
            all: unset;
            grid-column: 3 / 4;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          nav a {
            opacity: 1;
            position: relative;
            text-transform: uppercase;
            font-size: 0.8rem;
          }
          nav ul {
            display: flex;
          }
          nav li {
            margin-left: 1rem;
            margin-bottom: 0;
            border: none;
          }
          nav a::before {
            content: '';
            display: block;
            height: 4px;
            background: black;
            position: absolute;
            top: -0.5rem;
            right: 0;
            left: 0;
            transform: scale(0,1);
            transition: transform ease-in-out 250ms;
          }
          nav a:hover::before {
            transform: scale(1,1);
          }
          nav a span {
            display: block;
          }
        }
      </style>
      <header>
        <h2 class="logo">BookDataSolutions</h2>
        <input type="checkbox" class="menu" id="menu">
        <label for="menu" class="menu-label"<span><span></label>
        <nav>
          <ul>
            ${navlist}
          </ul>
        </nav>
      </header>
    `;
    //<label for="menu" class="menu-label">☰</label>
  }
}
window.customElements.define("bds-nav", BDSNav);
