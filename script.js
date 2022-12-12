import menu from './data/data.js'


let myMainDiv = document.getElementById('mainDiv')
myMainDiv.classList.add('container')
for (let i = 0; menu.length > i; i++){
    let oneCardInfo = document.createElement('div')
    oneCardInfo.classList.add('card')
    
    //img
    let cardImg = document.createElement('img') 
    cardImg.src = menu[i].img
    
    oneCardInfo.appendChild(cardImg)

    //Preke
    let cardName = document.createElement('p')
    cardName.classList.add('p')
    let title = menu[i].title;
    cardName.innerHTML = title
    oneCardInfo.appendChild(cardName)

    //kategorijos
    let category = document.createElement('p');
    category.classList.add('p')
    category.innerText = menu[i].category;
    oneCardInfo.appendChild(category)

    // keliam viska i main div
    myMainDiv.appendChild(oneCardInfo);
    console.log(menu[i].title)
    
    console.log(menu[i])
}

