const renderBox=document.querySelector('.destekcilerimiz-box')
const data=[
 {img:'../assets/images/main/desteklirimiz1.png'},
 {img:'../assets/images/main/desteklerimiz2.png'},
 {img:'../assets/images/main/desteklirimiz3.png'},
 {img:'../assets/images/main/desteklirimiz4.png'},
 {img:'../assets/images/main/desteklirimiz5.png'},
 {img:'../assets/images/main/desteklerimiz6.png'}
]
for(let i=0;i<data.length;i++){
 renderBox.innerHTML+=`
<div class="destekcilerimiz-item">
<img src="${data[i].img}" alt="destekcilerimiz"/>
</div>
 `
}