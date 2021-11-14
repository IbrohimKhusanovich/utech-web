const renderBox=document.querySelector('.destekcilerimiz-box')
const data=[
 {img:'../assets/images/main/desteklirimiz1.png',link:'#'},
 {img:'../assets/images/main/desteklerimiz2.png',link:'#'},
 {img:'../assets/images/main/desteklirimiz3.png',link:'#'},
 {img:'../assets/images/main/desteklirimiz4.png',link:'#'},
 {img:'../assets/images/main/desteklirimiz5.png',link:'#'},
 {img:'../assets/images/main/desteklerimiz6.png',link:'#'}
]
for(let i=0;i<data.length;i++){
 renderBox.innerHTML+=`
<div class="destekcilerimiz-item">
<a href="${data[i].link}"><img src="${data[i].img}" alt="destekcilerimiz"/></a>
</div>
 `
}