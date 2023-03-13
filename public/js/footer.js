class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="footer-grid" id="footer">
      <div id="footer-filler">
      </div>
      <div id="footer-pricing">
          <h4 class="h4a">Priser</h4>
          <hr>
          <ul>
              <li><a href="Services">Våra Produkter</a></li>
              <li><a href="checkout">Betalning</a></li>
          </ul>
      </div>
      <div id="footer-about">    
          <h4 class="h4a">Om</h4>
          <hr>
          <ul>
              <li><a href="About#a2">Vad vi gör</a></li>
              <li><a href="About#tp">Vårat Team</a></li>
              <li><a href="About#a3">Hur vi fungerar</a></li>
          </ul>
      </div>
      <div id="footer-contact">
          <h4 class="h4a">Kontakt</h4>
          <hr>
          <ul>
              <li><a href="mailto:kontakt@web-dhs.se">kontakt@web-dhs.se</a></li>
              <li><a href="https://www.instagram.com/webdhs.uf/" target="_blank">Instagram</a></li>
          </ul>
      </div>

      <div class="f-social">
          <hr>
          <a href="https://www.instagram.com/webdhs.uf/" target="_blank"><img src="../img/instagram.png" alt="instagram logo"></a>
          <a href="mailto:kontakt@web-dhs.se"><img src="../img/e-mail.png" alt="instagram logo"></a>

      </div>
  </footer>
    `;
    }
}
  
customElements.define('footer-component', Footer);
