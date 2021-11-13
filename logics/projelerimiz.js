const projelerimiz = document.querySelector(".projelerimiz-cards-box");

const data = [
  {
    img: "../assets/images/main/card-img1.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img2.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img3.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img1.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img2.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img3.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img1.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img2.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
  {
    img: "../assets/images/main/card-img3.png",
    title: "Lorem Ipsum",
    time: "12:00",
    adress: "Zoom",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco",
  },
];

for (let i = 0; i < data.length; i++) {
  projelerimiz.innerHTML += `
  <div class="swiper-slide">
 <div class="card-item">
<img class="card-item-img" src="${data[i].img}" alt="card-img">
<div class="card-item-texts">
<h4 class="card-item-title">${data[i].title}</h4>
 <p class="card-item-arrow"></p>
 <p class="card-item-description" >${data[i].description}</p>
 <div class="card-item-bottom">
    <button class="card-item-btn">Start free trial</button>

        </div>
        </div>
        </div>
        </div>
        `;
}
