const responsiveMenu = document.querySelector('.menu');
const responsiveMenuIcon = document.querySelector('.responsive__menu img');

responsiveMenuIcon.addEventListener('click', function() {
    responsiveMenu.classList.toggle('active')
});

console.log(responsiveMenu)