const dishes = [{
    type: 'fruit',
    name: 'orange',
    img: 'https://t4.ftcdn.net/jpg/01/02/31/01/240_F_102310122_TyKkml1yRFle2IGtD2fAUrZLtixIGJqa.jpg'
  },
  {
    type: 'fruit',
    name: 'apple',
    img: 'https://t3.ftcdn.net/jpg/03/10/32/02/240_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg'
  },
  {
    type: 'fruit',
    name: 'banana',
    img: 'https://t3.ftcdn.net/jpg/02/36/07/60/240_F_236076021_Lf2nHzSUcTxNGdG7hap6PjJNDwHT1VfC.jpg'
  },
  {
    type: 'fruit',
    name: 'mango',
    img: 'https://t4.ftcdn.net/jpg/00/52/87/43/240_F_52874381_Ucxx67h9KLuxSXiNGcsmHfSjAuqRXqDr.jpg'
  },
  {
    type: 'fruit',
    name: 'kiwi',
    img: 'https://t4.ftcdn.net/jpg/00/68/65/13/240_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg'
  },
  {
    type: 'fruit',
    name: 'strawberries',
    img: 'https://t4.ftcdn.net/jpg/00/84/36/81/240_F_84368117_irN0O3akL7ALdMe17ZtxH6nya1cHiG5H.jpg'
  },
  {
    type: 'fruit',
    name: 'grape',
    img: 'https://t4.ftcdn.net/jpg/00/70/94/63/240_F_70946377_VJXdpJqld6XOsOTO6lt95ieZSxGO0faM.jpg'
  },
  {
    type: 'fruit',
    name: 'pear',
    img: ''
  },
];

var isOpen = false;
var result = document.querySelector(".js-button-result");
var draw = document.querySelector(".js-draw");
var img = document.querySelector(".js-button-img");
var element = document.querySelector(".js-button");
var imgSrc = document.querySelector(".js-img");

element.addEventListener('click', () => {


  if (!isOpen) {
    element.classList.add("main-block__button--active");
    img.classList.add("main-block__button-img--active");
    result.classList.add("main-block__button-result--true");
    draw.classList.add("draw--open")
    isOpen = true;

    const rand = Math.floor(Math.random() * dishes.length);
    result.innerHTML = (dishes[rand].name);
    imgSrc.src = (dishes[rand].img);

  } else {
    element.classList.remove("main-block__button--active");
    img.classList.remove("main-block__button-img--active");
    result.classList.remove("main-block__button-result--true");
    draw.classList.remove("draw--open")
    isOpen = false;

  }


})
window.addEventListener('click', (e) => {


  if (e.target !== element && e.target !== draw) {
    element.classList.remove("main-block__button--active");
    img.classList.remove("main-block__button-img--active");
    result.classList.remove("main-block__button-result--true");
    draw.classList.remove("draw--open")
    isOpen = false;

  }

})


draw.addEventListener('click', () => {
  if (isOpen == true) {
    const rand = Math.floor(Math.random() * dishes.length);
    result.innerHTML = (dishes[rand].name);
    imgSrc.src = (dishes[rand].img);
  }
})

console.log(imgSrc);
