const slideWrapper2=document.querySelectorAll('.kordinator-cards')

const data=[
 {img:'../assets/images/main/card-img1.png',title:'Social media management',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img2.png',title:'Social growth campaign',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img3.png',title:'Branding and media',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img1.png',title:'Influencer marketing',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img2.png',title:'Social media',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
 {img:'../assets/images/main/card-img3.png',title:'Content marketing',description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco'},
]

slideWrapper2.forEach(item=>{
 for(let i=0;i<data.length;i++){
  item.innerHTML+=`
  <div class="swiper-slide">
 <div class="card-item">
<img class="card-item-img" src="${data[i].img}" alt="card-img">
<div class="card-item-texts">
<h4 class="card-item-title">${data[i].title}</h4>
 <p class="card-item-arrow"></p>
 <p class="card-item-description" >${data[i].description}</p>
 <div class="card-item-bottom">
    <button class="card-item-btn">Get More <i class="fas fa-arrow-right"></i></button>
        </div>
        </div>
        </div>
        </div>
        `
       }
      })