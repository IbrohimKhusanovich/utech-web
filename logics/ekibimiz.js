const ekibimizBox=document.querySelector('.ekibimiz-box')
const data=[
 {img:"../assets/images/ekibimiz/ekibimiz1.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz2.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz3.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz4.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz5.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz6.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz7.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
 {img:"../assets/images/ekibimiz/ekibimiz8.png",name:'Nurullah Guguk',job:'Yonetim kurulu baskani',mail:'#',linkedin:'#'},
]

for(let i=0; i<data.length;i++){
ekibimizBox.innerHTML+=`
<div class="ekibimiz-item">
    <img class="person-avatar" src="${data[i].img}" alt="ekibimiz">
    <h4 class="person-name">${data[i].name}</h4>
    <p class="person-job">${data[i].job}</p>
    <div class="person-mail-box">
    <a href='${data[i].mail}'><img src="../assets/images/ekibimiz/mail.svg" alt="mail"> </a>
    <a href='${data[i].linkedin}'><img src="../assets/images/ekibimiz/linkedin.svg" alt="linkedin"></a>
    </div>
   </div>
`

}