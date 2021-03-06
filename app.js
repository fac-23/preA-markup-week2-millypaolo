const toggleBtn = document.querySelector('.toggle-btn');
const navigationMenu = document.querySelector('.primary-nav__list');
const navigationLinks = document.querySelectorAll('.primary-nav__link');
const navigationBar = document.querySelector('.header-main');



/****** NAVIGATION ******/

/* Function to close menu */
function closeMenu() {
  toggleBtn.setAttribute('aria-expanded', 'false');
}



/* Toggle menu button functionality on smaller devices */
toggleBtn.addEventListener('click', (e) => {

  e.preventDefault();

  // expands burger menu when clicked and lets disabled users know the menu is either expanded or collapsed
  toggleBtn.getAttribute('aria-expanded') === 'false' ? 
  toggleBtn.setAttribute('aria-expanded', 'true') :
  toggleBtn.setAttribute('aria-expanded', 'false');

})



/* Navigation menu on smaller devices */
 // Menu closes when user clicks on a link.
 // Smooth scrolling to section when user clicks on a link.
navigationMenu.addEventListener('click', function(e) {

  e.preventDefault();

  if(e.target.classList.contains('primary-nav__link')) {

    closeMenu();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetCoordinates = targetSection.getBoundingClientRect();
    
    window.scrollTo({ 
      top: targetCoordinates.top + window.pageYOffset - navigationBar.offsetHeight,
      behavior: 'smooth' 
    });

  }

})



// Navigation menu closes if user clicks outside it
window.addEventListener('click', function(e) {

  if(!navigationBar.contains(e.target)) {
    closeMenu();
  }

})