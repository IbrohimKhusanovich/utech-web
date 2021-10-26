const hamburger =document.querySelector('.nav-hamburger')
const hamburgerMenu=document.querySelector('.menu-panel')
const closeMenuIcon=document.querySelector('.nav-close-menu')
const slideWrapper=document.querySelectorAll('.mySwiper')
const slideWrapper2=document.querySelectorAll('.mySwiper2')
const footer=document.querySelector('.footer-grid')
hamburger.addEventListener('click', ()=>{
hamburgerMenu.classList.add('doorMenu')
document.body.style.overflow='hidden'
})

closeMenuIcon.addEventListener('click', ()=>{
 hamburgerMenu.classList.remove('doorMenu')
 document.body.style.overflow='auto'
})

const data=[
 {img:'../assets/images/main/card-img1.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img2.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img3.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
]
const data2=[
  {img:'../assets/images/main/desteklirimiz1.png'},
  {img:'../assets/images/main/desteklerimiz2.png'},
  {img:'../assets/images/main/desteklirimiz3.png'},
  {img:'../assets/images/main/desteklirimiz4.png'},
  {img:'../assets/images/main/desteklirimiz5.png'},
  {img:'../assets/images/main/desteklerimiz6.png'}
]
const footerData=[
  {thead:'Hakkimizda',tbody:[
    {td:'Biz Kimiz ? '},
    {td:'Ekibimiz'},
    {td:'Koordinatörlüklerimiz'},
    {td:'İs Birlikcilerimiz'},
    {td:'İletisim'},
  ]},
  {thead:'Duyurular',tbody:[
    {td:'Duyurular'},
    {td:'Haberler'},
  ]},
  {thead:'Aktiviteler',tbody:[
    {td:'Etkinlikler '}
  ]},
  {thead:'Yayınlar',tbody:[
    {td:'Makaleler'},
    {td:'TechBilgi'},
    {td:'4N1K!'},
    {td:'Bölüm Tanıtımları'},
  ]},
  {thead:'Projeler',tbody:[
    {td:'Web Sitesi'},
    {td:'Mobil Uygulama'},
    {td:'Drone'},
    {td:'Teknofest'}
  ]},
]
slideWrapper.forEach(item=>{
 for(let i=0;i<data.length;i++){
  item.firstElementChild.innerHTML+=`
  <div class="swiper-slide">
 <div class="card-item">
<img class="card-item-img" src="${data[i].img}" alt="card-img">
<div class="card-item-texts">
<h4 class="card-item-title">${data[i].title}</h4>
 <p class="card-item-arrow"></p>
 <p class="card-item-description" >${data[i].description}</p>
 <div class="card-item-bottom">
    <button class="card-item-btn">Start free trial</button>
    <div class="card-item-date">
      <div class="time">
      <img src="../assets/images/main/Frame(4).svg" alt="time">
      <p>${data[i].time}</p>
      </div>

      <div class="adress">
        <img src="../assets/images/main/Frame(5).svg" alt="adress">
        <p>${data[i].adress}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
       }
      })
slideWrapper2.forEach(item=>{
 for(let i=0;i<data2.length;i++){
  item.firstElementChild.innerHTML+=`
  <div class="swiper-slide">
  <img class="partners-img" src="${data2[i].img}" alt="desteklerimiz">
</div>
        `
       }
      })
      for(let i=0;i<footerData.length;i++){
        footer.innerHTML+=`
        <div class='footer-item'>
        <h3>${footerData[i].thead}</h3>
        ${footerData[i].tbody.map(item=>(
          `<p><a href='#'>${item.td}</a></p>`
        )).join(' ')}
        </div>
        `
      }