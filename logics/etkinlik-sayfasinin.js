const relatedPost=document.querySelector('.duyurular-top-right-item')
const slideWrapper=document.querySelector('.swiper-wrapper')
const openClose=document.querySelector('.next-icon')
const postMenu=document.querySelector('.duyurular-top-box-right')
const duyurularBottomImages=document.querySelector('.images-content')

const data =[
 {img:'https://media.istockphoto.com/photos/tokyo-cityscape-aerial-view-picture-id1278304139?b=1&k=20&m=1278304139&s=170667a&w=0&h=Zj3AqlA67R9saNsuJGXHuj6ROqSn0gc_mtiVbd5BBAo='},
 {img:'https://media.istockphoto.com/photos/tokyo-cityscape-aerial-view-picture-id1278304139?b=1&k=20&m=1278304139&s=170667a&w=0&h=Zj3AqlA67R9saNsuJGXHuj6ROqSn0gc_mtiVbd5BBAo='},
 {img:'https://media.istockphoto.com/photos/tokyo-cityscape-aerial-view-picture-id1278304139?b=1&k=20&m=1278304139&s=170667a&w=0&h=Zj3AqlA67R9saNsuJGXHuj6ROqSn0gc_mtiVbd5BBAo='},
]
     for(let i=0;i<data.length;i++){
      slideWrapper.innerHTML+=`
      <div class="swiper-slide">
      <img class="duyurular-img" src="${data[i].img}" alt="desteklerimiz">
    </div>
            `
           }

const data2=[
  {contentName:'RELATED POSTS',postTitle:[
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  ]},
  {contentName:'RELATED POSTS',postTitle:[
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  ]},
  {contentName:'RELATED POSTS',postTitle:[
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {title:'TITLE OF POST',img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  ]},
]
let post=''
for(let i=0; i<data2.length;i++){
  for (let a=0;a<data2[i].postTitle.length;a++){
    post+=`
    <div class="post-title-box">
    <img class="post-img" src="${data2[i].postTitle[a].img}" alt="post img"/>
    <p class="post-title">TITLE OF POST</p>
    </div>
    `
  }
  relatedPost.innerHTML+=`
  <div class="post-item">
    <h4>${data2[i].contentName}</h4>
      ${post}
  </div>
  `
  post=''
}
openClose.addEventListener('click', ()=>{
  postMenu.classList.toggle('active')
  openClose.classList.toggle('transformIcon')
})

const data3=[
  {img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {img:'https://images.unsplash.com/photo-1542642839-83adadcbe645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
]
for(let i=0;i<data3.length;i++){
  duyurularBottomImages.innerHTML+=`
  <img src='${data3[i].img}' alt="duyurular img"/>
  `
}