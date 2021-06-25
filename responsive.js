burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})
function myfunction(){
  let login = document.getElementById('login');
  let ayurveda = document.getElementById('ayurveda');
  login.style.display = "none";
  ayurveda.style.display = "block";
  
};

function secondfunction(){
    let login = document.getElementById('login');
    let ayurveda = document.getElementById('ayurveda');
    login.style.display = "block";
    ayurveda.style.display = "none";
    
  };