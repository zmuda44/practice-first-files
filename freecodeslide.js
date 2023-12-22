const reviews = [
  {
    id: 1,
    name: "susant smith",
    job: "web developer",
    img: "https://placehold.jp/150x150.png",
    text: "this is the text for the first personalbar. aasdfsadtype something here",
  },
  {
    id: 2,
    name: "anna johnston",
    job: "web designer",
    img: "https://placehold.jp/3d4070/ffffff/150x150.png",
    text: "this is the text for the second asdfas personalbar. aasdfsadf",    
  },
  {
    id: 3,
    name: "agregb aileyn",
    job: "web fae de ",
    img: "https://placehold.jp/878787/982a2a/150x150.png",
    text: "this is the text for the third asdfas personalbar. aasdfsadf",
  },
  {
    id: 4,
    name: "greg laciyz",
    job: "web asdfasdf",
    img: "https://placehold.jp/6b89ff/00ff40/150x150.png",
    text: "asdfasdf asdfasdfasdf asdfasdf",
  },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;


// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
  /* const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent - item.text; */
})

//show person based on item

function showPerson(n) {
  const item = reviews[n];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text; 
}

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++
  if(currentItem >= reviews.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
  console.log("show next button");
})

//show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
  
})