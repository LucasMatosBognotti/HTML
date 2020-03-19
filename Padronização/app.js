const navSlide = () => {
  const burger = document.querySelector('.menu-burger');
  const ul = document.querySelector('.menu-nav-links');
  const li = document.querySelectorAll('.menu-nav-links li');

  burger.addEventListener('click', () => {
    ul.classList.toggle('menu-nav-links-active');

    li.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    burger.classList.toggle('toggle');
    
  });
}

navSlide();