const ham = document.getElementById('ham');
const mainContent = document.getElementById('main-doc');
const hamWrap = document.querySelector('.ham-menu');
const sidebar = document.querySelector('.sidebar-wrap');

ham.addEventListener('click', function(){
    sidebar.classList.toggle('is-visible');
    sidebar.classList.toggle('slide-in');
    hamWrap.classList.toggle('background');
    mainContent.classList.toggle('blur');
    ham.classList.toggle('fa-bars');
    ham.classList.toggle('fa-times');

})

