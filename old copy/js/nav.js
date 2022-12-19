class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav>
      <div class="logo nav-pos">
          <a href="Homepage.html"><img src="../img/logo-white.png" alt=""><h3>Web-DHS</h3></a>
      </div>
      <div class="r-side">
      <a href="login.html" class="nav-items">Login</a>    
      <a href="checkout.html" class="nav-items"><img src="../img/shoppingcart.png" alt=""></a>
          <div class="burger right nav-items">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
          </div>
      </div>    
      <ul class="navbar_links nav">
          <li>
              <a href="Homepage.html">Start</a>
          </li>
          <li>
              <a href="About.html">Om oss</a>
          </li>
          <li>
              <a href="Services.html">Tjänster</a>
          </li>
          <li>
              <a href="#footer">Kontakt</a>
          </li>
      </ul>
      
      </nav>
      `;
    }
}
  
customElements.define('nav-component', Header);

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navbar_links')
    const navLinks = document.querySelectorAll('.navbar_links li')

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');   
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation             
        burger.classList.toggle('toggle');    
    });

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