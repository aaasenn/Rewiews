// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//Elements that will be changing
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
const img = document.getElementById("person-img")

//buttons
const bLeft = document.getElementById('bL')
const bRight = document.getElementById('bR')

let i = 0;
let max = 3;

let currentItem = 0;
//load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src= item.img;
  author.textContent = item.name;
  job.textContent = item.job
  info.textContent = item.text
})

//show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src= item.img;
  author.textContent = item.name;
  job.textContent = item.job
  info.textContent = item.text
}

//show next person
bRight.addEventListener('click', function() {
  currentItem++
  if (currentItem > reviews.length - 1) {
currentItem = 0
  }
  showPerson(currentItem)
});

bLeft.addEventListener('click', () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
























// bRight.addEventListener('click', () => {
//   if (initial.id === 'author') {
//     let start = reviews[i]
//     initial.id = start.id
//     initial.textContent = start.name
//     job.textContent = start.job
//     info.textContent = start.text
//     img.textContent = start.img
//   }   else {
//     let start = reviews[i++]
//     initial.id = start.id
//     initial.id = start.id
//     initial.textContent = start.name
//     job.textContent = start.job
//     info.textContent = start.text
//     img.textContent = start.img
//   }
// })

// bLeft.addEventListener('click', () => {
//   let start = reviews[i--]
//     initial.id = start.id
//     initial.id = start.id
//     initial.textContent = start.name
//     job.textContent = start.job
//     info.textContent = start.text
//     img.textContent = start.img
// })



// bRight.addEventListener('click', () => {

//   job.textContent = reviews[0].job
// })



