import menu from "./data/data.js";

let myMainDiv = document.getElementById("mainDiv");
myMainDiv.classList.add("container");

for (let i = 0; menu.length > i; i++) {
  let oneCardInfo = document.createElement("div");
  oneCardInfo.classList.add("card");

//   //kategorijos
//   let category = document.createElement("p");
//   category.innerText = menu[i].category;
//   oneCardInfo.appendChild(category);

  //img
  let cardImg = document.createElement("img");
  let imgContainer = document.createElement("div")
  imgContainer.classList = "img-container"
  cardImg.classList.add('img')
  cardImg.src = menu[i].img;
  imgContainer.appendChild(cardImg)
  oneCardInfo.appendChild(imgContainer);

  //Preke
  let cardName = document.createElement("p");
  cardName.classList = "cardName"
  let title = menu[i].title;
  cardName.innerHTML = title;

  //price
  let cardPrice = document.createElement("p");
  cardPrice.classList = "cardPrice"
  let price = menu[i].price;
  cardPrice.innerHTML = price;

  //headeris title ir price
  let header = document.createElement("header");
  header.classList.add('itemInfo')
  header.appendChild(cardName);
  header.appendChild(cardPrice);
  oneCardInfo.appendChild(header);

// //card info
// let cardInfo = document.createElement('article').classList.add('div')
// cardInfo.classList.add('div')


  //description
  let cardDesc = document.createElement("p");
  cardDesc.classList.add("cardDesc");
  let desc = menu[i].desc;
  cardDesc.innerHTML = desc;
  oneCardInfo.appendChild(cardDesc);

  // keliam viska i main div
  myMainDiv.appendChild(oneCardInfo);
  console.log(menu[i].title);

  console.log(menu[i]);

  
}