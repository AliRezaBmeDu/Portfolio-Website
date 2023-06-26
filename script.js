const menuButton = document.querySelector('.button-burger');
const excepSection = document.querySelector(".myInfo");
const closeButton = document.querySelector(".close-button");
const otherComponents = document.querySelectorAll('section');
const menuPage = document.querySelector(".mobile-menu");

menuButton.addEventListener('click', openMenu());
closeButton.addEventListener('click', closeMenu());

function openMenu() {
    otherComponents.forEach(subelements => {
        subelements.style.display = "none";
      });
    excepSection.style.display = "block";
    menuPage.style.display = "block";
    excepSection.classList.toggle('blur-effect');
}

function closeMenu() {
    menuPage.style.display = "none";
    otherComponents.forEach(subelements => {
        subelements.style.display = "block";
      });
    excepSection.classList.toggle('noblur');
}
//////
// const closeMenu = () => {
//     mobileMenu.style.display = 'none';
//     openIcon.style.display = 'block';
//   };
  
//   openIcon.addEventListener('click', () => {
//     openIcon.style.display = 'none';
//     mobileMenu.style.display = 'block';
//   });
//   closeIcon.addEventListener('click', closeMenu);
//   mobileLinks.addEventListener('click', closeMenu);