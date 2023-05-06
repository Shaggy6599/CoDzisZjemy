const data = [
  /* Test array */
  {
    type: "fruit",
    name: "orange",
    img: "https://t4.ftcdn.net/jpg/01/02/31/01/240_F_102310122_TyKkml1yRFle2IGtD2fAUrZLtixIGJqa.jpg",
  },
  {
    type: "fruit",
    name: "apple",
    img: "https://t3.ftcdn.net/jpg/03/10/32/02/240_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg",
  },
  {
    type: "fruit",
    name: "banana",
    img: "https://t3.ftcdn.net/jpg/02/36/07/60/240_F_236076021_Lf2nHzSUcTxNGdG7hap6PjJNDwHT1VfC.jpg",
  },
  {
    type: "fruit",
    name: "mango",
    img: "https://t4.ftcdn.net/jpg/00/52/87/43/240_F_52874381_Ucxx67h9KLuxSXiNGcsmHfSjAuqRXqDr.jpg",
  },
  {
    type: "fruit",
    name: "kiwi",
    img: "https://t4.ftcdn.net/jpg/00/68/65/13/240_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg",
  },
  {
    type: "fruit",
    name: "strawberries",
    img: "https://t4.ftcdn.net/jpg/00/84/36/81/240_F_84368117_irN0O3akL7ALdMe17ZtxH6nya1cHiG5H.jpg",
  },
  {
    type: "fruit",
    name: "grape",
    img: "https://t4.ftcdn.net/jpg/00/70/94/63/240_F_70946377_VJXdpJqld6XOsOTO6lt95ieZSxGO0faM.jpg",
  },
  {
    type: "vegs",
    name: "mushroom",
    img: "https://t4.ftcdn.net/jpg/01/84/33/69/240_F_184336955_2uGLzE9Abe8dSAd97BcKhsEeTKCFUzAN.jpg",
  },
  {
    type: "vegs",
    name: "tomato",
    img: "https://t4.ftcdn.net/jpg/02/32/98/31/240_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg",
  },
  {
    type: "vegs",
    name: "potato",
    img: "https://t3.ftcdn.net/jpg/00/41/30/10/240_F_41301053_AbLi3hlosbLajBo7lQdNyfGz9eusxY1x.jpg",
  },
  {
    type: "vegs",
    name: "carrot",
    img: "https://t3.ftcdn.net/jpg/01/20/47/06/240_F_120470660_ha8n1vyrH0BVonoSjlod1GbualTYdPoA.jpg",
  },
  {
    type: "vegs",
    name: "cabbage",
    img: "https://t3.ftcdn.net/jpg/03/02/06/08/240_F_302060856_AZt9tspxvpi7n8FeRWFudsC8nX16pnUp.jpg",
  },
  {
    type: "vegs",
    name: "onion",
    img: "https://t3.ftcdn.net/jpg/01/78/81/46/240_F_178814653_Hyf3BjFqIzlzrmzY989xEp54RBr0EFzM.jpg",
  },

  {
    type: "fastFood",
    name: "burger",
    img: "https://t4.ftcdn.net/jpg/01/69/56/95/240_F_169569546_zaLG8x4tyIu3SDn1jYWXThVpMjCEbn8Q.jpg",
  },

  {
    type: "fastFood",
    name: "kebab",
    img: "https://t4.ftcdn.net/jpg/01/47/45/99/240_F_147459950_GRcOs10b393I0c1ycKwgVOQFGzmCmqxs.jpg",
  },
  {
    type: "fastFood",
    name: "french fries",
    img: "https://t4.ftcdn.net/jpg/01/26/02/33/240_F_126023380_C1VoNoSBkz0hJziJTVDUUFcOo9EgIfxL.jpg",
  },
  {
    type: "fastFood",
    name: "taco",
    img: "https://t3.ftcdn.net/jpg/00/64/13/26/240_F_64132606_qtv42q6e69iiM5LHyxreXFZ3daPT1NFh.jpg",
  },

  /* nowe dania */

  {
    type: "breakfast",
    name: "Sałatka z mozzarellą, nerkowcami i grzankami",
    img: "https://t4.ftcdn.net/jpg/05/59/08/21/240_F_559082128_4xbYxOxb2DXz8SgGeoO8kxvdZlPNvooH.jpg",
  },
  {
    type: "breakfast",
    name: "Kanapka z Mc z jajkiem, serem, szynką i sosem ",
    img: "https://cdn.mcdonalds.pl/uploads/20191017164040/02-04-mcmuffin-jajko.jpg",
  },
  {
    type: "breakfast",
    name: "Jajecznica z chlebem tostowym",
    img: "https://t4.ftcdn.net/jpg/01/20/15/03/240_F_120150373_faF5LAxEjbTw6mMJZgYkpvOWUW5b3EwY.jpg",
  },
  {
    type: "breakfast",
    name: "Hot dogi",
    img: "https://t4.ftcdn.net/jpg/02/11/50/15/240_F_211501506_JUlACnfOQh55MNbkVCh7BKMM2quuA3dJ.jpg",
  },
  {
    type: "breakfast",
    name: "Parówki z ketchupem i musztardą",
    img: "https://t3.ftcdn.net/jpg/00/61/75/18/240_F_61751818_kqigpLxE1WTOEgEas6JrUrLyxq78NIzy.jpg",
  },
  {
    type: "breakfast",
    name: "Jajka na twardo z kanapkami",
    img: "https://t4.ftcdn.net/jpg/02/15/94/07/240_F_215940737_HZNPF37lws9ZDgaAcqDZ3SqsyEldEQaM.jpg",
  },
  {
    type: "breakfast",
    name: 'Jajka na półtwardo z chlebem tostowym na "chrupko" z masłem',
    img: "https://t3.ftcdn.net/jpg/04/37/24/98/240_F_437249804_5zc4zIvSmaz28yHrhZk92B5hah9f1bhw.jpg",
  },
  {
    type: "breakfast",
    name: "Tortilla z pastą jajeczną",
    img: "https://t3.ftcdn.net/jpg/05/68/51/02/240_F_568510295_OY16Vm90tZ9P0h4lZ0huW5wnuFHufyXD.jpg",
  },
  {
    type: "breakfast",
    name: "Tortilla z jajecznicą",
    img: "https://t3.ftcdn.net/jpg/00/97/29/08/240_F_97290877_kzTQmPt4knzEdASbVKWJGqrgtaUwYsH8.jpg",
  },
  {
    type: "breakfast",
    name: "Pizza z tortilli z serem, jajkiem, pomidorem i roszponką",
    img: "https://t3.ftcdn.net/jpg/01/26/76/70/240_F_126767027_0DNnjJwDKAYXJP5xHJHIpu4lc2hBzYDq.jpg",
  },
  {
    type: "breakfast",
    name: "Płatki z mlekiem (miodowe)",
    img: "https://t3.ftcdn.net/jpg/05/10/85/36/240_F_510853684_vfZIm4CriWWI8oKdKVd1UCAF0deVoA4P.jpg",
  },
  {
    type: "breakfast",
    name: "Płatki z mlekiem (czekoladowe)",
    img: "https://t3.ftcdn.net/jpg/00/25/09/10/240_F_25091044_odCR1mvE4US4F3M39OeSd1v64nzsP9w3.jpg",
  },
  {
    type: "breakfast",
    name: "Granola w jogurcie",
    img: "https://t3.ftcdn.net/jpg/02/63/87/56/240_F_263875631_iAdCv1GzupUXa3KFM2t8HNkX0bi6KFZs.jpg",
  },
  {
    type: "breakfast",
    name: "Jogurt i bułka",
    img: "https://t4.ftcdn.net/jpg/00/54/20/67/240_F_54206760_c0pTc4LbD1AL7MWMHMNrFq6p7D8FvguO.jpg",
  },
  {
    type: "breakfast",
    name: "Chleb z szynką",
    img: "https://t4.ftcdn.net/jpg/01/23/55/53/240_F_123555365_8WfqtRbRFxPqWVX1S6fZdkrbmnSfiUah.jpg",
  },
  {
    type: "breakfast",
    name: "Bułka z serem i szynką",
    img: "https://t4.ftcdn.net/jpg/01/18/10/13/240_F_118101347_dmblgi7lltkSZxEM0td6mWgR624WESzh.jpg",
  },
  {
    type: "breakfast",
    name: "Bułka z pasztetem",
    img: "https://t4.ftcdn.net/jpg/03/26/74/05/240_F_326740547_0BKzLJ7JPq4veelmiJBpTz2Qc0RqMEKD.jpg",
  },
  {
    type: "breakfast",
    name: "Pancake z syropem/malinami/czekoladą/jogurtem",
    img: "https://t4.ftcdn.net/jpg/02/19/69/91/240_F_219699121_wPsqZWnExtVLbowqsJLcueqjr5pf0uZn.jpg",
  },
  {
    type: "breakfast",
    name: "Gofry z dodatkami",
    img: "https://t3.ftcdn.net/jpg/00/54/92/28/240_F_54922829_J4CeKfCys4vwtGhCPMS3imj3rQNYRrTa.jpg",
  },
];

const rand = () => {
  return Math.floor(Math.random() * newData.length);
};
var oldRand;
var newRand;
var buttons = document.querySelectorAll(".js-button");
buttons.forEach((button) => {
  const img = button.querySelector(".js-button-img");
  const imgSrc = button.querySelector(".js-img");
  const result = button.querySelector(".js-button-result");

  button.addEventListener("click", () => {
    newData = [];
    buttonData = button.getAttribute("data-value");
    data.map((el) => {
      if (el.type == buttonData) {
        newData.push(el);
      }
    });
    if (!button.classList.contains("button--active")) {
      button.classList.add("button--active");
      img.classList.add("button-img--active");
      result.classList.add("button-result--true");
      newRand = rand();
      while (newRand == oldRand) {
        newRand = rand();
        console.info("Reloading...");
      }
      result.innerHTML = newData[newRand].name;
      imgSrc.src = newData[newRand].img;
      oldRand = newRand;
    } else {
      button.classList.remove("button--active");
      img.classList.remove("button-img--active");
      result.classList.remove("button-result--true");
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target !== button) {
      button.classList.remove("button--active");
      img.classList.remove("button-img--active");
      result.classList.remove("button-result--true");
    }
  });
});
