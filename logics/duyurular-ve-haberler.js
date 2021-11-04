const duyurularCards=document.querySelector('.duyurular-cards')
const haberlerCards=document.querySelector('.haberler-cards')


const data=[
 {img:'../assets/images/main/card-img1.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img2.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img3.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
]


const data2=[
 {img:'../assets/images/main/card-img1.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img2.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img3.png',title:'Lorem Ipsum',time:'12:00',adress:'Zoom',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
]




 for(let i=0;i<data.length;i++){
  duyurularCards.innerHTML+=`
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


       for(let i=0;i<data2.length;i++){
  haberlerCards.innerHTML+=`
  <div class="swiper-slide">
 <div class="card-item">
<img class="card-item-img" src="${data2[i].img}" alt="card-img">
<div class="card-item-texts">
<h4 class="card-item-title">${data2[i].title}</h4>
 <p class="card-item-arrow"></p>
 <p class="card-item-description" >${data2[i].description}</p>
 <div class="card-item-bottom">
    <button class="card-item-btn">Start free trial</button>
    <div class="card-item-date">
      <div class="time">
      <img src="../assets/images/main/Frame(4).svg" alt="time">
      <p>${data2[i].time}</p>
      </div>

      <div class="adress">
        <img src="../assets/images/main/Frame(5).svg" alt="adress">
        <p>${data2[i].adress}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
       }