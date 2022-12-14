import menu from "./data/data.js";

let myMainDiv = document.getElementById("mainDiv");
myMainDiv.classList.add("container");

const patiekalai = ['All'];
for (let i = 0; menu.length > i; i++) {
  let oneCardInfo = document.createElement("div");
  oneCardInfo.classList.add("card");

  if (!patiekalai.includes(menu[i].category))
    patiekalai.push(menu[i].category);

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
  cardPrice.innerHTML = "$" + price;

  //title ir price
  let title_price = document.createElement("div");
  title_price.classList.add('title-price')
  title_price.appendChild(cardName);
  title_price.appendChild(cardPrice);
  oneCardInfo.appendChild(title_price);

  //kategorijos
  let category = document.createElement('h5');
  category.classList = "cardCategory"
  category.innerText = menu[i].category;
  oneCardInfo.appendChild(category)


  //description
  let cardDesc = document.createElement("p");
  cardDesc.classList.add("cardDesc");
  let desc = menu[i].desc;
  cardDesc.innerHTML = desc;
  oneCardInfo.appendChild(cardDesc);

  // keliam viska i main div
  myMainDiv.appendChild(oneCardInfo);
}


const filter_buttons = document.getElementById('filter');
patiekalai.forEach(patiekalai => {
    const menuButton = document.createElement('button');
    menuButton.innerText = patiekalai;
    menuButton.className = "menub";
    filter_buttons.appendChild(menuButton);
})

const navbuttons = document.getElementsByClassName('menub');
const card_title = document.getElementsByTagName('h5');


for (let one_category of navbuttons) {
  one_category.addEventListener('click', () => { getresult(one_category.innerText) })}
  const getresult = (patiekalai) => {
    for (let item of card_title) {
      if (item.innerText == patiekalai || patiekalai === 'All') {
        item.parentElement.style.display = "block";
      }
      else {
        item.parentElement.style.display = "none"
    }
  }
}