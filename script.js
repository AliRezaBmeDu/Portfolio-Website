const menuButton = document.querySelector('.button-burger');
const excepSection = document.querySelector(".myInfo");
const closeButton = document.querySelector(".close-button");
const otherComponents = document.querySelectorAll('section');
const menuPage = document.querySelector(".mobile-menu");

menuButton.addEventListener('click', () => {
    console.log("Hello, it's being called");
    otherComponents.forEach(subelements => {
        subelements.classList.add("hide-seek");
      });
    excepSection.classList.remove("hide-seek");
    menuPage.style.display= 'block';
    menuButton.style.display = 'none';
    excepSection.classList.add('blur-effect');
});


closeButton.addEventListener('click', () => {
    console.log("Hello, closebutton is being called");
    menuPage.style.display = "none";
    menuButton.style.display = 'block';
    excepSection.classList.remove('blur-effect');
    otherComponents.forEach(subelements => {
        subelements.classList.remove("hide-seek");
      });
});


function closeMenu() {
  console.log("Hello, closebutton is being called");
  menuPage.style.display = "none";
  menuButton.style.display = 'block';
  excepSection.classList.remove('blur-effect');
  otherComponents.forEach(subelements => {
      subelements.classList.remove("hide-seek");
    });
}
