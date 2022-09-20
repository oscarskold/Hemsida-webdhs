const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navbar_links')
    const navLinks = document.querySelectorAll('.navbar_links li, a')

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

function Readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }