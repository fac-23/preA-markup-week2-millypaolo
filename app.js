const toggleBtn = document.querySelector('.toggle-btn');
const primaryNavLinks = document.querySelector('.primary-nav__links').firstElementChild;


// Sandwich menu functionality on smaller devices

toggleBtn.addEventListener('click', (e) => {

  e.preventDefault();

  // expands sandwich menu when clicked
  toggleBtn.classList.toggle('active');
  primaryNavLinks.classList.toggle('active');

  // lets disabled users know the menu is either expanded or collapsed
  if(toggleBtn.classList.contains('active')) {
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

})