const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".item")
hamburger.addEventListener("click", () => { 
	  hamburger.classList.toggle('active');
		navItems.classList.toggle("show-menu");
});

// function to close menu items when any of one it clicked
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.toggle('active');
    navItems.classList.remove('show-menu');
  });
});

const main = document.querySelector('main');
// backdrop function to close menu items
main.addEventListener('click', () => {
	hamburger.classList.toggle('active');
  navItems.classList.remove('show-menu');
});