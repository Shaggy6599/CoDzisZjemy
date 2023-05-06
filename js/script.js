
data = [
  {
  type: "fruit",
  name: "orange",
img:"https://t4.ftcdn.net/jpg/01/02/31/01/240_F_102310122_TyKkml1yRFle2IGtD2fAUrZLtixIGJqa.jpg"
},
{
  type: "fruit",
  name: "apple",
  img:
    "https://t3.ftcdn.net/jpg/03/10/32/02/240_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg"
},
{
  type: "fruit",
  name: "banana",
  img:
    "https://t3.ftcdn.net/jpg/02/36/07/60/240_F_236076021_Lf2nHzSUcTxNGdG7hap6PjJNDwHT1VfC.jpg"
},
{
  type: "fruit",
  name: "mango",
  img:
    "https://t4.ftcdn.net/jpg/00/52/87/43/240_F_52874381_Ucxx67h9KLuxSXiNGcsmHfSjAuqRXqDr.jpg"
},
{
  type: "fruit",
  name: "kiwi",
  img:
    "https://t4.ftcdn.net/jpg/00/68/65/13/240_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg"
},
{
  type: "fruit",
  name: "strawberries",
  img:
    "https://t4.ftcdn.net/jpg/00/84/36/81/240_F_84368117_irN0O3akL7ALdMe17ZtxH6nya1cHiG5H.jpg"
},
{
  type: "fruit",
  name: "grape",
  img:
    "https://t4.ftcdn.net/jpg/00/70/94/63/240_F_70946377_VJXdpJqld6XOsOTO6lt95ieZSxGO0faM.jpg"
},
{
  type: "vegs",
  name: "mushroom",
  img:
    "https://t4.ftcdn.net/jpg/01/84/33/69/240_F_184336955_2uGLzE9Abe8dSAd97BcKhsEeTKCFUzAN.jpg"
},
{
  type: "vegs",
  name: "tomato",
  img:
    "https://t4.ftcdn.net/jpg/02/32/98/31/240_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg"
},
{
  type: "vegs",
  name: "potato",
  img:
    "https://t3.ftcdn.net/jpg/00/41/30/10/240_F_41301053_AbLi3hlosbLajBo7lQdNyfGz9eusxY1x.jpg"
},
{
  type: "vegs",
  name: "carrot",
  img:
    "https://t3.ftcdn.net/jpg/01/20/47/06/240_F_120470660_ha8n1vyrH0BVonoSjlod1GbualTYdPoA.jpg"
},
{
  type: "vegs",
  name: "cabbage",
  img:
    "https://t3.ftcdn.net/jpg/03/02/06/08/240_F_302060856_AZt9tspxvpi7n8FeRWFudsC8nX16pnUp.jpg"
},
{
  type: "vegs",
  name: "onion",
  img:
    "https://t3.ftcdn.net/jpg/01/78/81/46/240_F_178814653_Hyf3BjFqIzlzrmzY989xEp54RBr0EFzM.jpg"
},
  
  {
  type: "fastFood",
  name: "burger",
  img:
    "https://t4.ftcdn.net/jpg/01/69/56/95/240_F_169569546_zaLG8x4tyIu3SDn1jYWXThVpMjCEbn8Q.jpg"
},

{
  type: "fastFood",
  name: "kebab",
  img:
    "https://t4.ftcdn.net/jpg/01/47/45/99/240_F_147459950_GRcOs10b393I0c1ycKwgVOQFGzmCmqxs.jpg"
},
{
  type: "fastFood",
  name: "french fries",
  img:
    "https://t4.ftcdn.net/jpg/01/26/02/33/240_F_126023380_C1VoNoSBkz0hJziJTVDUUFcOo9EgIfxL.jpg"
},
{
  type: "fastFood",
  name: "taco",
  img:
    "https://t3.ftcdn.net/jpg/00/64/13/26/240_F_64132606_qtv42q6e69iiM5LHyxreXFZ3daPT1NFh.jpg"
}
]
const rand = () => {
  return(Math.floor(Math.random() * newData.length))
} 
var buttons = document.querySelectorAll('.js-button');
buttons.forEach((button) => {
const img = button.querySelector('.js-button-img');
const imgSrc = button.querySelector('.js-img');
const result = button.querySelector('.js-button-result');

button.addEventListener('click', () => {
newData = []
  buttonData = button.getAttribute('data-value');
  data.map((el) => {
    if(el.type == buttonData){
      newData.push(el)
    }
  })
  if(!button.classList.contains('button--active')){
    button.classList.add('button--active')
    img.classList.add("button-img--active");
    result.classList.add("button-result--true");

    result.innerHTML = newData[rand()].name;
    imgSrc.src = newData[rand()].img ;
  } 
  else {
  button.classList.remove("button--active");
  img.classList.remove("button-img--active");
  result.classList.remove("button-result--true");
}
})
window.addEventListener('click', (e) => {
if (e.target !== button ) {
  button.classList.remove("button--active");
  img.classList.remove("button-img--active");
  result.classList.remove("button-result--true");
}
})
})
