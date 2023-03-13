class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav>
      <div class="logo nav-pos">
          <a href="/"><img src="../img/logo-white.png" alt=""><h3>Web-DHS</h3></a>
      </div>
      <div class="r-side">
      <a href="login" class="nav-items">Login</a>    
      <a href="checkout" class="nav-items">
      <img src="../img/shopping-cart.svg" alt="">
      <span class="cart-indicator"></span>

      </a>
          <div class="burger right nav-items">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
          </div>
      </div>    
      <ul class="navbar_links nav">
          <li>
              <a href="/">Start</a>
          </li>
          <li>
              <a href="about">Om oss</a>
          </li>
          <li>
              <a href="services">Tjänster</a>
          </li>
          <li>
              <a href="#footer" class="contact">Kontakt</a>
          </li>
      </ul>
      
      </nav>
      `;
    }
}
  
customElements.define('nav-component', Header);

const navSlide = () => {
    const contact = document.querySelector('.contact')
    const body = document.querySelector('.body')
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.navbar_links li');

    burger.addEventListener('click', () => {
    toggleNav();
    });

    document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
        closeNav();
    }
    });

    function toggleNav() {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
        link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');
    }

    function closeNav() {
    nav.classList.remove('nav-active');
    navLinks.forEach((link) => {
        link.style.animation = '';
    });
    burger.classList.remove('toggle');
    }

    contact.addEventListener('click', () => {
        toggleNav();
    })

}

const header = document.querySelector('.header')

navSlide();

const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                nav.classList.add('active_nav');
            } else {
                nav.classList.remove('active_nav');
            }
})