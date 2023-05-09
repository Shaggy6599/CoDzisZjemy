const data = [
  /* ---------------------------------------------    Breakfast    -------------------------------------------------- */

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
    name: "Pancake z",
    ads: ["syropem", "malinami", "czekoladą", "jogurtem"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    img: "https://t4.ftcdn.net/jpg/02/19/69/91/240_F_219699121_wPsqZWnExtVLbowqsJLcueqjr5pf0uZn.jpg",
  },
  {
    type: "breakfast",
    name: "Gofry z",
    ads: ["syropem", "malinami", "czekoladą", "jogurtem"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/00/54/92/28/240_F_54922829_J4CeKfCys4vwtGhCPMS3imj3rQNYRrTa.jpg",
  },

  /* -------------------------------------------    Dinner    -------------------------------------------------- */

  {
    type: "dinner",
    name: "Kotlet z kurczaka z ziemniakami",
    ads: ["gotowanymi", "pieczonymi", "puree"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    ads2: ["buraczkami", "ogórkiem"],
    add2: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads2.length);
      while (newRandAdd == oldRandAdd) {
        add2();
      }
      oldRandAdd = newRandAdd;
      return this.ads2[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/02/48/22/66/240_F_248226642_3fe9HsxHh2jF1hOVXLwTDLNqCbj19MS2.jpg",
  },
  {
    type: "dinner",
    name: "Kotlet schabowy z ziemiakami",
    ads: ["gotowanymi", "pieczonymi", "puree"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    ads2: [
      "buraczkami",
      "ogórkiem kiszonym",
      "surówką",
      "mizerią",
      "sosem na ziemniaki",
      "sosem na mięso",
    ],
    add2: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads2.length);
      while (newRandAdd == oldRandAdd) {
        add2();
      }
      oldRandAdd = newRandAdd;
      return this.ads2[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/02/48/22/66/240_F_248226642_3fe9HsxHh2jF1hOVXLwTDLNqCbj19MS2.jpg",
  },
  {
    type: "dinner",
    name: "Klopsy mielone z ziemniakami",
    ads: ["gotowanymi", "pieczonymi", "puree"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    ads2: [
      "buraczkami",
      "ogórkiem kiszonym",
      "surówką",
      "mizerią",
      "sosem na ziemniaki",
      "sosem na mięso",
    ],
    add2: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads2.length);
      while (newRandAdd == oldRandAdd) {
        add2();
      }
      oldRandAdd = newRandAdd;
      return this.ads2[newRandAdd];
    },
    img: "https://t4.ftcdn.net/jpg/00/21/77/77/240_F_21777749_lmTv1ZGuRRPNOKjCaVQJTX2zCpR2XwJ8.jpg",
  },
  {
    type: "dinner",
    name: "Kotlet devolay z ziemniakami",
    ads: ["gotowanymi", "pieczonymi", "puree"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    ads2: [
      "buraczkami",
      "ogórkiem kiszonym",
      "surówką",
      "mizerią",
      "sosem na ziemniaki",
      "sosem na mięso",
    ],
    add2: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads2.length);
      while (newRandAdd == oldRandAdd) {
        add2();
      }
      oldRandAdd = newRandAdd;
      return this.ads2[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/05/00/16/74/240_F_500167497_YyyIGkWygk4MJ3nW2Cp77sEXWvqtVNAN.jpg",
  },
  {
    type: "dinner",
    name: "Cordon bleu z ziemniakami",
    ads: ["gotowanymi", "pieczonymi", "puree"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    ads2: [
      "buraczkami",
      "ogórkiem kiszonym",
      "surówką",
      "mizerią",
      "sosem na ziemniaki",
      "sosem na mięso",
    ],
    add2: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads2.length);
      while (newRandAdd == oldRandAdd) {
        add2();
      }
      oldRandAdd = newRandAdd;
      return this.ads2[newRandAdd];
    },
    img: "https://t4.ftcdn.net/jpg/04/69/27/37/240_F_469273746_2ZAu3LACBwOuIwVZQDKl7RvNHXIRKJvw.jpg",
  },
  {
    type: "dinner",
    name: "Pierogi",
    ads: ["z mięsem", "z owocami", "ruskie"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    img: "https://t4.ftcdn.net/jpg/02/51/79/11/240_F_251791194_n9nDUCsadhuNn1Js9ElGU8L66kvUtzsX.jpg",
  },
  {
    type: "dinner",
    name: "Spaghetti z",
    ads: ["mielonym", "szpinakiem", "pieczarkami"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/05/50/36/16/240_F_550361624_tVUrJ64LPbkTCLZdEQE6z0HFSoALvENl.jpg",
  },
  {
    type: "dinner",
    name: "Kopytka",
    img: "https://t4.ftcdn.net/jpg/02/70/62/19/240_F_270621904_MgEQNLLkyOiJRQ3JMS6ieytVQbhYQ04d.jpg",
  },
  {
    type: "dinner",
    name: "Pieczona kiełbasa z pieczonymi ziemniakami",
    img: "https://t4.ftcdn.net/jpg/02/84/53/01/240_F_284530179_gqvLJMcZRm17bhD52seUJ2nCmQ97eF8B.jpg",
  },
  {
    type: "dinner",
    name: "Leniwe",
    img: "https://t4.ftcdn.net/jpg/00/31/07/31/240_F_31073102_OEqp6632KcqYL77w3uUC8zy1GWXdv3W9.jpg",
  },
  {
    type: "dinner",
    name: "Gołąbki",
    img: "https://t3.ftcdn.net/jpg/01/64/12/44/240_F_164124483_rsSAscPJysZc756081nSoDUZtCwGqnfY.jpg",
  },
  {
    type: "dinner",
    name: "Klopsy mielone z ryżem w sosie pomidorowym i ziemniakami",
    img: "https://t3.ftcdn.net/jpg/00/56/94/00/240_F_56940096_sOnaSc4W0ArMFJSk1EvnLK2oV7CT6hLo.jpg",
  },
  {
    type: "dinner",
    name: "Nalesniki",
    img: "https://t3.ftcdn.net/jpg/00/91/36/66/240_F_91366640_ncdzDWYtJ0S8szdHo0fkiB2uZgfFKmey.jpg",
  },
  {
    type: "dinner",
    name: "Kluski ziemniaczane z twarogiem",
    img: "https://t3.ftcdn.net/jpg/00/84/63/34/240_F_84633410_UsJb8MOLfcBn8kW3RR0n3GCZGgWgAVIV.jpg",
  },
  {
    type: "dinner",
    name: "Zupa ogórkowa z pierogami",
    img: "https://t3.ftcdn.net/jpg/04/03/30/28/240_F_403302817_Vl5gpXqhR5KwdM0yi4QVnQJsTIFnGdkc.jpg",
  },
  {
    type: "dinner",
    name: "Zupa pomidorowa pierogami lub pyzami",
    img: "https://t4.ftcdn.net/jpg/00/85/59/29/240_F_85592966_lbQLo2KyvpVEBfOQDsL35U2hvBj8aYJC.jpg",
  },
  {
    type: "dinner",
    name: "Pyzy z sosem lub smietana",
    img: "https://t4.ftcdn.net/jpg/02/12/79/23/240_F_212792321_gYHG6V7g4kKcH6iKjISusUrDhLBm2j5Y.jpg",
  },
  {
    type: "dinner",
    name: "Zupa z kurczaka z kluseczkami",
    img: "https://t4.ftcdn.net/jpg/02/94/56/81/240_F_294568148_FgWf8lObnDBEApSPZ5SgrJfyfBCd2Dz7.jpg",
  },
  {
    type: "dinner",
    name: "Chłopski garnek",
    img: "https://t3.ftcdn.net/jpg/01/57/27/98/240_F_157279806_UU3e4JKIAmX2MMlKlk8bPgJ7FLKGiKU2.jpg",
  },
  {
    type: "dinner",
    name: "Grochówka",
    img: "https://t4.ftcdn.net/jpg/03/54/60/59/240_F_354605943_kWmYm3PQxAonvKayNJ6x4X2v3pIJMFKx.jpg",
  },
  {
    type: "dinner",
    name: "Krem z dyni",
    img: "https://t3.ftcdn.net/jpg/02/26/87/64/240_F_226876455_Kx2Ead6GmdQVnylDdV4tivj2q4gPbWym.jpg",
  },
  {
    type: "dinner",
    name: "Zupa cebulowo porowa",
    img: "https://t3.ftcdn.net/jpg/00/91/07/34/240_F_91073495_4Comy8jyDNMcahbQVVaSG3nxjgYhLIhF.jpg",
  },
  {
    type: "dinner",
    name: "Kurczaka w sosie serowym",
    img: "https://t3.ftcdn.net/jpg/04/64/91/12/240_F_464911281_AtXGY9y7Jr0PopaqcGWfLciHmZ6mgo0d.jpg",
  },
  {
    type: "dinner",
    name: "Kurczaka w sosie pomidorowym z ryzem",
    img: "https://t3.ftcdn.net/jpg/05/94/10/96/240_F_594109688_7uyx5PC6A1VligV1UqKY6HU4kvVjJmt8.jpg",
  },
  {
    type: "dinner",
    name: "Kurczak gyros w tortilli domowy kebab",
    img: "https://t3.ftcdn.net/jpg/02/55/42/50/240_F_255425048_hOPyqIaNojuxnviBpbakNjLggxa52MeZ.jpg",
  },
  {
    type: "dinner",
    name: "Pieczone ziemniaki z przyprawami",
    img: "https://t3.ftcdn.net/jpg/05/91/41/90/240_F_591419075_HcaujCRZcfmd2Kn7edpjfoVzV2KCgV0S.jpg",
  },
  {
    type: "dinner",
    name: "Udka pieczone w piekarniku",
    img: "https://t4.ftcdn.net/jpg/00/40/69/19/240_F_40691916_SNKA6TAInsZg1aHnAPvydblPoQ0mmi14.jpg",
  },
  {
    type: "dinner",
    name: "Zapiekanka",
    ads: ["makaronowa", "ziemniaczana"],
    add: function () {
      var oldRandAdd;
      newRandAdd = Math.floor(rando() * this.ads.length);
      while (newRandAdd == oldRandAdd) {
        add();
      }
      oldRandAdd = newRandAdd;
      return this.ads[newRandAdd];
    },
    img: "https://t3.ftcdn.net/jpg/01/90/09/58/240_F_190095899_jvCpXT8LNfkjehptU3l7QfVWwR3hVJw5.jpg",
  },
  {
    type: "dinner",
    name: "Lasagne",
    img: "https://t3.ftcdn.net/jpg/00/51/02/64/240_F_51026477_U5FfyNhpgfpDyfeNyWmDHbJo1CVVErwZ.jpg",
  },
  {
    type: "dinner",
    name: "Pizza Misia",
    img: "https://t3.ftcdn.net/jpg/01/33/61/72/240_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg",
  },
  {
    type: "dinner",
    name: "Kurczak w panco zapieczonego z serem na to pomidor i pieczone ziemniaki",
    img: "https://t3.ftcdn.net/jpg/03/73/24/88/240_F_373248818_1ZNNaPHxXVkmNUbKOvU3cjYgTjoSTw7L.jpg",
  },

  /* -------------------------------------------    Dessert    -------------------------------------------------- */

  {
    type: "dessert",
    name: "Lody",
    img: "https://t4.ftcdn.net/jpg/02/78/24/67/240_F_278246702_MldsVxnuUNJE7cyQ5QmVTCOm3h9H4oBG.jpg",
  },
  {
    type: "dessert",
    name: "Czekolada",
    img: "https://t4.ftcdn.net/jpg/02/04/31/93/240_F_204319311_NwspQuun2GWdO5KnA8Grgg5CpPczQXPd.jpg",
  },
  {
    type: "dessert",
    name: "Batoniki",
    img: "https://t3.ftcdn.net/jpg/01/93/41/84/240_F_193418419_l0r3Rn3eUMgtfhDeaDMQgtL7e1GuusXW.jpg",
  },
  {
    type: "dessert",
    name: "Żelki",
    img: "https://t3.ftcdn.net/jpg/05/66/42/70/240_F_566427067_JwuKVqt9sH78pScIzbSyja55L320IFrU.jpg",
  },
  {
    type: "dessert",
    name: "Chipsy",
    img: "https://t4.ftcdn.net/jpg/01/07/19/99/240_F_107199932_swDni95HIOZpXsUdLCyVwM4lC3seSPtB.jpg",
  },
  {
    type: "dessert",
    name: "Czekolada że smietana",
    img: "https://t3.ftcdn.net/jpg/03/01/42/62/240_F_301426240_359RglcW4Uke7lbMFSzMpgxukH8AFPF9.jpg",
  },
  {
    type: "dessert",
    name: "Budyń",
    img: "https://t3.ftcdn.net/jpg/01/15/23/32/240_F_115233265_mnVGUvospIf9e188Ci6oXnxjh1HdKT9x.jpg",
  },
  {
    type: "dessert",
    name: "Kisiel",
    img: "https://t4.ftcdn.net/jpg/01/86/32/51/240_F_186325193_0irVaxq0RSBiWoYMiSd4mPNZ0Cw1epDU.jpg",
  },
  {
    type: "dessert",
    name: "Ciasto",
    img: "https://t4.ftcdn.net/jpg/00/75/43/03/240_F_75430323_PaBwezntw5lXGe3QuafQHa6k1UIuQLlg.jpg",
  },
  {
    type: "dessert",
    name: "Cisteczka z nutelli mąki i jaja",
    img: "https://t3.ftcdn.net/jpg/00/27/99/22/240_F_27992215_ZhzP1V2k6Zks8QbBqt2oKNL3mxTWk3T9.jpg",
  },
  {
    type: "dessert",
    name: "Domowa czekolada",
    img: "https://t4.ftcdn.net/jpg/02/52/59/65/240_F_252596556_hr69Rni17qMBYl3xPBQ39yiyNbesAaQh.jpg",
  },
  {
    type: "dessert",
    name: "Kaszka manna z masłem",
    img: "https://d-art.ppstatic.pl/kadry/k/r/1/02/95/63c1204fe0ec7_o_medium.jpg",
  },
  {
    type: "dessert",
    name: "Galaretka",
    img: "https://t3.ftcdn.net/jpg/00/15/84/66/240_F_15846680_pdGzbCy2bKgf49TEYGVz73HxriaejPbP.jpg",
  },
  {
    type: "dessert",
    name: "Herbatniki z czekoladowa kaszka manna",
    img: "https://t4.ftcdn.net/jpg/00/79/23/65/240_F_79236526_5p2aqO8V9PbtlcUeqM7ZsIveETLyZYvV.jpg",
  },
  {
    type: "dessert",
    name: "Pączki z twarogiem",
    img: "https://t3.ftcdn.net/jpg/01/38/26/46/240_F_138264627_3zTYH4se5OlSBAlKbpvSubwogxptElE8.jpg",
  },
  {
    type: "dessert",
    name: "Pączki tradycyjne",
    img: "https://t3.ftcdn.net/jpg/04/13/80/40/240_F_413804076_CNHUdKaYuzXtaYlGWqPX8gcK4qgQLLIO.jpg",
  },
  {
    type: "dessert",
    name: "Donut",
    img: "https://t4.ftcdn.net/jpg/01/76/76/01/240_F_176760120_22UWdrZMJdtYRbLCp7XvcTwdqKz0It1A.jpg",
  },
  {
    type: "dessert",
    name: "Drożdżówka",
    img: "https://t4.ftcdn.net/jpg/00/78/70/53/240_F_78705315_rnGlHjgwWsXJ5Io07Qpe9kNadHGe2Ick.jpg",
  },
  {
    type: "dessert",
    name: "Muller milch",
    img: "https://esklep.spolembialystok.pl/659-large_default/mullermilch-o-smaku-slonego-karmelu-400g-muller-.jpg",
  },
  {
    type: "dessert",
    name: "Sałatka owocowa",
    img: "https://t4.ftcdn.net/jpg/00/34/51/41/240_F_34514156_qgEQY76Ea8byM08ii5pZR7ernQIA7fjo.jpg",
  },
  {
    type: "dessert",
    name: "Arbuz",
    img: "https://t3.ftcdn.net/jpg/02/56/30/64/240_F_256306410_bcsJPQ4qfMrQuInrt85UpAQQaSZjd7A5.jpg",
  },
  {
    type: "dessert",
    name: "Jabłko",
    img: "https://t4.ftcdn.net/jpg/05/37/26/81/240_F_537268114_5xbomIvkCRMH50QraQwYkOoxj1TwTU3j.jpg",
  },
  {
    type: "dessert",
    name: "Winogrona",
    img: "https://t3.ftcdn.net/jpg/05/52/15/56/240_F_552155695_zpy7UPaG46fN80uJHVYtL7tn3Ex0vIHG.jpg",
  },
  {
    type: "dessert",
    name: "Mus jabłko marchew",
    img: "https://t4.ftcdn.net/jpg/02/20/57/27/360_F_220572726_y1R1jqLwsM6l07XYNPuf2AFmrljYEce3.jpg",
  },
  {
    type: "dessert",
    name: "Banan",
    img: "https://t4.ftcdn.net/jpg/01/02/55/07/240_F_102550751_LOsUEhMAtTDQI3Od2ZIyO51ol9SsIiyU.jpg",
  },
  {
    type: "dessert",
    name: "Kaki",
    img: "https://t4.ftcdn.net/jpg/05/93/49/29/240_F_593492999_ufEkpffNPYwQxeWm7QaaO9DUqzP7NYPU.jpg",
  },
  {
    type: "dessert",
    name: "Maliny",
    img: "https://t3.ftcdn.net/jpg/02/82/12/16/240_F_282121618_r1rjDTmg2Wj5Qp6lIefx3rVdZUt0Kha1.jpg",
  },
  {
    type: "dessert",
    name: "Agrest",
    img: "https://t4.ftcdn.net/jpg/02/04/91/79/240_F_204917902_3IxbM9V6UV9j2yZN0kOBSAASWUY5Beu5.jpg",
  },
  {
    type: "dessert",
    name: "Sałatka z mozarellą i nerkowcami",
    img: "https://t4.ftcdn.net/jpg/03/37/60/23/240_F_337602376_XO8bZFEe2aFsasgrIIvcSk4v8RcZqdCD.jpg",
  },
  {
    type: "dessert",
    name: "Pieczone jabłko",
    img: "https://t3.ftcdn.net/jpg/01/75/73/72/240_F_175737225_IlLOw7VVMMCyqsPiJ6iqpDVXOlq6mCQu.jpg",
  },
  {
    type: "dessert",
    name: "Pieczarki zapiekane w serze z boczkiem",
    img: "https://t4.ftcdn.net/jpg/01/46/40/95/240_F_146409574_POtkFv7ajM8fkFcvCZO7W26wM2q2AeBP.jpg",
  },
  {
    type: "dessert",
    name: "Ciasto marchewkowe",
    img: "https://t3.ftcdn.net/jpg/01/38/81/62/240_F_138816209_xWoJbxehSb2navNdkr5el0BnGbQXPiQC.jpg",
  },
  {
    type: "dessert",
    name: "Ciasto na kubki",
    img: "https://t4.ftcdn.net/jpg/01/12/56/03/240_F_112560328_IZIHesehVhzVvilbl2waDlQh37rziqGq.jpg",
  },
  {
    type: "dessert",
    name: "Jabłecznik",
    img: "https://t4.ftcdn.net/jpg/02/62/36/15/240_F_262361542_EMcnFXIptLgUwdeXoD46AzL6hLV5MWsR.jpg",
  },

  /* -------------------------------------------    Fast Food    ------------------------------------------------ */
  {
    type: "fastFood",
    name: "McDonald's",
    img: "https://t4.ftcdn.net/jpg/05/92/54/59/240_F_592545968_dv77MQsF0H8uDIKAs3Pac09nsEt3WWeE.jpg",
  },
  {
    type: "fastFood",
    name: "KFC",
    img: "https://t4.ftcdn.net/jpg/05/51/17/79/240_F_551177904_MSQRgTsYvKJX37OrpnNwTxSbVfSxk8Yd.jpg",
  },
  {
    type: "fastFood",
    name: "Burger King",
    img: "https://t4.ftcdn.net/jpg/02/67/31/75/240_F_267317518_C1r0JD0vllzshSSXzx108r4DlSokhVpk.jpg",
  },
  {
    type: "fastFood",
    name: "Kebab",
    img: "https://t4.ftcdn.net/jpg/01/47/45/99/240_F_147459950_GRcOs10b393I0c1ycKwgVOQFGzmCmqxs.jpg",
  },
  {
    type: "fastFood",
    name: "Burger",
    img: "https://t3.ftcdn.net/jpg/01/57/74/36/240_F_157743662_YKJEVXytEgPz08DgswRMPQMgv4D6cKL0.jpg",
  },
  {
    type: "fastFood",
    name: "Chińczyk",
    img: "https://t3.ftcdn.net/jpg/02/60/12/88/240_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg",
  },
  {
    type: "fastFood",
    name: "Manekin",
    img: "https://t4.ftcdn.net/jpg/02/55/82/39/240_F_255823924_olzFTKLNiNhOFr9lsBMzZnSXocab85fn.jpg",
  },
  {
    type: "fastFood",
    name: "Hot dog Ikea",
    img: "https://t4.ftcdn.net/jpg/02/03/91/05/240_F_203910513_jC9kM3fv8IwHgyMB0zGA7Ru1sNYMmmUM.jpg",
  },
  {
    type: "fastFood",
    name: "Hot dog Orlen",
    img: "https://t3.ftcdn.net/jpg/02/75/59/18/240_F_275591867_BTK0BoG0lBQLjfh6mxDXrfRNVF7bqKJr.jpg",
  },
  {
    type: "fastFood",
    name: "Shake Burger King",
    img: "https://t3.ftcdn.net/jpg/05/51/88/38/240_F_551883880_9QOSUuGop0RUTVFYkJSdpvjP6O9lqr89.jpg",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
  {
    type: "fastFood",
    name: "",
    img: "",
  },
];

const rand = () => {
  return Math.floor(rando() * newData.length);
};
var oldRand;
var newRand;
var body = document.querySelector(".js-body");
var buttons = document.querySelectorAll(".js-button");
buttons.forEach((button) => {
  const img = button.querySelector(".js-button-img");
  const imgSrc = button.querySelector(".js-img");
  const result = button.querySelector(".js-button-result");

  button.addEventListener("click", () => {
    newData = [];
    newAdd = [];
    buttonData = button.getAttribute("data-value");
    data.map((el) => {
      if (el.type == buttonData) {
        newData.push(el);
      }
    });
    if (!button.classList.contains("button--active")) {
      button.classList.add("button--active");
      img.classList.add("button__img--active");
      result.classList.add("button__result--true");
      body.classList.add("body--active");
      newRand = rand();
      while (newRand == oldRand) {
        newRand = rand();
        console.info("Reloading...");
      }
      result.innerHTML = newData[newRand].name;
      imgSrc.src = newData[newRand].img;
      if (newData[newRand].add != undefined && newData[newRand].add != null) {
        result.innerHTML += " ";
        result.innerHTML += newData[newRand].add();
      }
      if (newData[newRand].add2 != undefined && newData[newRand].add2 != null) {
        result.innerHTML += " i ";
        result.innerHTML += newData[newRand].add2();
      }
      oldRand = newRand;
    } else {
      button.classList.remove("button--active");
      img.classList.remove("button__img--active");
      result.classList.remove("button__result--true");
      body.classList.remove("body--active");
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target !== button) {
      button.classList.remove("button--active");
      img.classList.remove("button__img--active");
      result.classList.remove("button__result--true");
    }
  });
});
