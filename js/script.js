function activeBtn1() {
  var element = document.getElementById('btn-1');
  element.classList.toggle('main-block__button--active');
  var result = document.getElementById('result');
 setTimeout(){};
  const breakfast = ["Chleb", "Jogurt", "Bułka"];
  const random = Math.floor(Math.random() * breakfast.length);
  result.innerHTML = (random, breakfast[random]);

};
function activeBtn2() {
    var element = document.getElementById('btn-2');
    element.classList.toggle('main-block__button--active');
};
function activeBtn3() {
    var element = document.getElementById('btn-3');
    element.classList.toggle('main-block__button--active');
};
function activeBtn4() {
    var element = document.getElementById('btn-4');
    element.classList.toggle('main-block__button--active');
};
  
