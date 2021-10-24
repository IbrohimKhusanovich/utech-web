const hamburger =document.querySelector('.nav-hamburger')
const hamburgerMenu=document.querySelector('.menu-panel')
const closeMenuIcon=document.querySelector('.nav-close-menu')
hamburger.addEventListener('click', ()=>{
hamburgerMenu.classList.add('doorMenu')
})
closeMenuIcon.addEventListener('click', ()=>{
 hamburgerMenu.classList.remove('doorMenu')
})