const footer=document.querySelector('.footer-grid')

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