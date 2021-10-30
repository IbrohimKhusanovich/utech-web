const hamburger =document.querySelector('.nav-hamburger')
const hamburgerMenu=document.querySelector('.menu-panel')
const closeMenuIcon=document.querySelector('.nav-close-menu')
hamburger.addEventListener('click', ()=>{
hamburgerMenu.classList.add('doorMenu')
document.body.style.overflow='hidden'
})

closeMenuIcon.addEventListener('click', ()=>{
 hamburgerMenu.classList.remove('doorMenu')
 document.body.style.overflow='auto'
})