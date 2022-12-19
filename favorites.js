import menu from "./data/data.js";

let myMainDiv = document.getElementById("mainDiv");
myMainDiv.classList.add("container");

for (let i = 0; menu.length > i; i++) {
    let favss = JSON.parse(localStorage.getItem("favorite")) || [];
    favss.forEach(item => {
        if (menu[i].id == item.id) {
            const cart = (() => {
                const fieldValue = localStorage.getItem("cart");
                return fieldValue === null
                    ? []
                    : JSON.parse(fieldValue);
            })();

            let oneCardInfo = document.createElement("div");
            oneCardInfo.classList.add("card");

            //img
            let cardImg = document.createElement("img");
            let imgContainer = document.createElement("div")
            imgContainer.classList = "img-container"
            cardImg.classList.add('img')
            cardImg.src = menu[i].img;
            imgContainer.appendChild(cardImg)
            oneCardInfo.appendChild(imgContainer);

            //favorite button
            let favoriteBtn = document.createElement("button")
            favoriteBtn.classList = "favorite-btn"
            const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
            const isInFav = favorites.findIndex(fav => fav.id === menu[i].id);
            if (isInFav >= 0) {
                favoriteBtn.classList = "favorite-btn bg-danger"
            } else {
                favoriteBtn.classList = "favorite-btn bg-light"
            }
            imgContainer.appendChild(favoriteBtn)

            favoriteBtn.addEventListener('click', toggleFavorite);

            function toggleFavorite() {
                const favorites = JSON.parse(localStorage.getItem("favorite")) || [];

                // check if the current item is already in the favorites list
                const index = favorites.findIndex(fav => fav.id === menu[i].id);
                if (index === -1) {
                    favorites.push({
                        "id": menu[i].id,
                        "title": menu[i].title
                    });
                    favoriteBtn.classList = "favorite-btn bg-danger"
                } else {
                    favorites.splice(index, 1);
                    favoriteBtn.classList = "favorite-btn bg-light"
                    myMainDiv.removeChild(oneCardInfo)
                }

                localStorage.setItem("favorite", JSON.stringify(favorites));
            }

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

            //knopkes sudeti, printinimas ir atiimti
            let btnMinus = document.createElement('button');
            btnMinus.classList = 'btn-minus btn-plus-minus'
            oneCardInfo.appendChild(btnMinus);
            btnMinus.innerHTML = '-';

            let printinimas = document.createElement('p');
            printinimas.classList.add('print');
            const itemCount = cart.find(item => item.ID === menu[i].id)
            if (itemCount) {
                printinimas.innerHTML = itemCount.Count
            } else {
                printinimas.innerHTML = 0
            }
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

            //mygtuku funkcijos
            function pliusuojam() {
                const cart = (() => {
                    const fieldValue = localStorage.getItem("cart");
                    return fieldValue === null
                        ? []
                        : JSON.parse(fieldValue);
                })();

                const existingItem = cart.find(item => item.ID === menu[i].id)
                if (existingItem) {
                    existingItem.Count += 1
                } else {
                    cart.push({
                        "ID": menu[i].id,
                        "Title": menu[i].title,
                        "Price": menu[i].price,
                        "Count": 1
                    })
                }

                localStorage.setItem("cart", JSON.stringify(cart))

                printinimas.innerHTML = cart.find(item => item.ID === menu[i].id).Count
            }

            function minusuojam() {
                const cart = (() => {
                    const fieldValue = localStorage.getItem("cart");
                    return fieldValue === null
                        ? []
                        : JSON.parse(fieldValue);
                })();


                let kiekis = cart.find(item => item.ID === menu[i].id).Count
                if (kiekis <= 0) return
                printinimas.innerHTML = kiekis

                const existingItem = cart.find(item => item.ID === menu[i].id)
                if (existingItem) {
                    existingItem.Count -= 1
                    if (existingItem.Count === 0) {
                        const index = cart.indexOf(existingItem)
                        cart.splice(index, 1)
                    }
                }

                localStorage.setItem("cart", JSON.stringify(cart))

                if (existingItem) {
                    printinimas.innerHTML = existingItem.Count
                } else {
                    printinimas.innerHTML = 0
                }
            }

            // keliam viska i main div
            myMainDiv.appendChild(oneCardInfo);
        }
    });
}