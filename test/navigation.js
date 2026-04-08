const navBar = document.querySelector('.navigation-bar')
const toggleBottom = document.querySelector('.toggle-bottom')

navBar.addEventListener('click',()=>{
    toggleBottom.classList.toggle('active')
    navBar.classList.toggle('active')
    closeModal()
});

function closeModal(){
    window.location
}

const home = document.querySelector('#home')
home.addEventListener('click',()=>{
    const Home = document.querySelector('#Home');
    const About = document.querySelector('#About');
    const Services = document.querySelector('#Services');
    const Help = document.querySelector('#Help');
    const Contact = document.querySelector('#Contact');
     const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    About.style.display = 'none';
    Services.style.display = 'none'
    Help.style.display = 'none'
    Home.style.display = 'flex'
    Contact.style.display = 'none'
});
const about =document.querySelector('#about');
about.addEventListener('click',()=>{
    const About = document.querySelector('#About');
    const Home = document.querySelector('#Home');
    const Services = document.querySelector('#Services');
    const Help = document.querySelector('#Help');
    const Contact = document.querySelector('#Contact');
     const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    About.style.display = 'flex';
    Home.style.display = 'none'
    Services.style.display = 'none'
    Help.style.display = 'none'
    Contact.style.display = 'none'
});
const services = document.querySelector('#services');
services.addEventListener('click',()=>{
    const Services = document.querySelector('#Services');
    const About = document.querySelector('#About');
    const Home = document.querySelector('#Home');
     const Help = document.querySelector('#Help');
     const Contact = document.querySelector('#Contact');
      const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    Services.style.display = 'flex'
    About.style.display = 'none';
    Home.style.display = 'none'
    Help.style.display = 'none'
    Contact.style.display = 'none'
});
const help = document.querySelector('#help');
help.addEventListener('click',()=>{
    const Help = document.querySelector('#Help');
    const Services = document.querySelector('#Services');
    const About = document.querySelector('#About');
    const Home = document.querySelector('#Home');
    const Contact = document.querySelector('#Contact');
     const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    Services.style.display = 'none'
    Contact.style.display = 'none'
    About.style.display = 'none';
    Home.style.display = 'none'
    Help.style.display = 'flex'
});
const contact = document.querySelector('#contact');
contact.addEventListener('click',()=>{
    const Contact = document.querySelector('#Contact');
    const Help = document.querySelector('#Help');
    const Services = document.querySelector('#Services');
    const About = document.querySelector('#About');
    const Home = document.querySelector('#Home');
    const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    Contact.style.display = 'flex'
    Services.style.display = 'none'
    About.style.display = 'none';
    Home.style.display = 'none'
    Help.style.display = 'none'

})

const seeAll = document.querySelector('#see-all')
seeAll.addEventListener('click',()=>{
     const Contact = document.querySelector('#Contact');
    const Help = document.querySelector('#Help');
    const Services = document.querySelector('#Services');
    const About = document.querySelector('#About');
    const Home = document.querySelector('#Home');
    const messege = document.querySelector('.welcoming')
    messege.style.display = 'none'
    Contact.style.display = 'flex'
    Services.style.display = 'flex'
    About.style.display = 'flex';
    Home.style.display = 'flex'
    Help.style.display = 'flex'
})
