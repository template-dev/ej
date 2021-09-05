const burgerBtn = document.querySelector('#burger');
const topMenu = document.querySelector('.topMenu');
const header = document.querySelector('.header');

const modalSignIn = document.querySelector('.modalSignIn');
const signIn = document.querySelector('#signIn');

burgerBtn.addEventListener('click', function() {
    if(document.documentElement.clientWidth <= 760) {
        if(topMenu.style.display === 'none') {
            topMenu.style.display = 'block';
            burgerBtn.classList.add('burger_active');
        } else {
            topMenu.style.display = 'none';
            burgerBtn.classList.remove('burger_active');
        }
    }
});

modalSignIn.addEventListener('click', function(event) {
    if(event.target.className === 'modalSignIn')
    {
        modalSignIn.style.display = 'none';
    }
});

signIn.addEventListener('click', function() {
    modalSignIn.style.display = 'flex';
});