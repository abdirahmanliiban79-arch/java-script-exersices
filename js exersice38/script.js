const toggleButton = document.querySelector('.toggle-bottom')
const navBar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click',function(){
    navBar.classList.toggle('active')
})