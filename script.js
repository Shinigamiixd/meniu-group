import menu from "./data/data.js";

let myMainDiv = document.getElementById("mainDiv");
myMainDiv.classList.add("container");

let totalItemsInCart = 0

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

  //favorite
  let fav = document.createElement('button')
  fav.setAttribute('id', 'fav_button')
  let fov_icon = document.createElement('i')
  fov_icon.classList.add('bi', 'bi-bookmark-heart')
  fav.appendChild(fov_icon)
  cardName.appendChild(fav)

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

  //knopkes sudeti ir atiimti
  let btnMinus = document.createElement('button');
  btnMinus.classList = 'btn-minus btn-plus-minus'
  oneCardInfo.appendChild(btnMinus);
  btnMinus.innerHTML = '-';

  let printinimas = document.createElement('p');
  printinimas.classList.add('print');
  printinimas.innerHTML = "0"
  oneCardInfo.appendChild(printinimas);

  let btnPlius = document.createElement('button');
  btnPlius.classList = 'btn-plus btn-plus-minus'
  oneCardInfo.appendChild(btnPlius);
  btnPlius.innerHTML = '+';

  btnPlius.addEventListener('click', pliusuojam);
  btnMinus.addEventListener('click', minusuojam);

  let btnDiv = document.createElement('div');
  btnDiv.classList.add('btnDiv');
  btnDiv.appendChild(btnMinus);
  btnDiv.appendChild(printinimas);
  btnDiv.appendChild(btnPlius);
  oneCardInfo.appendChild(btnDiv)

  //kintamieji funkcijom
  let naujaKaina;
  let kiekis = 0;

  //mygtuku funkcijos
  function minusuojam() {
    if (kiekis <= 0) return
    totalItemsInCart--
    kiekis--
    printinimas.innerHTML = kiekis
    
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.some(element => {
      let index = cart.indexOf(element)
      console.log(index)
      if (element.ID == menu[i].id){
        cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        return true
      }
    })
  }

  function pliusuojam() {
    totalItemsInCart++
    kiekis++
    printinimas.innerHTML = kiekis
    
    const cart = (() => {
      const fieldValue = localStorage.getItem("cart");
      return fieldValue === null
          ? []
          : JSON.parse(fieldValue);
    })();

    cart.push({
      "ID": menu[i].id,
      "Title": menu[i].title,
      "Price": menu[i].price
    })
    localStorage.setItem("cart", JSON.stringify(cart))
  }


  //fav button
  fav.addEventListener('click', favorite)
  function favorite() {
    const favorites = (() => {
      const fieldValue = localStorage.getItem("favorite");
      return fieldValue === null
          ? []
          : JSON.parse(fieldValue);
    })();

    const inside_fav = localStorage.getItem('favorite')

      if (localStorage.getItem('favorite') == null) {
        favorites.push({
          "id": menu[i].id,
          "title": menu[i].title,
        })
        localStorage.setItem("favorite", JSON.stringify(favorites))
      }else{
        if (inside_fav.includes(menu[i].id)) {
          favorites.some(element => {
            let index = favorites.indexOf(element)
            console.log(index)
            if (element.ID == menu[i].id){
              favorites.splice(index, 1)
              localStorage.setItem('favorite', JSON.stringify(favorites))
              return true
            }
          })
        } else {
          favorites.push({
            "id": menu[i].id,
            "Title": menu[i].title,
          })
          localStorage.setItem("favorite", JSON.stringify(favorites))
        }
      }
  }

  


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