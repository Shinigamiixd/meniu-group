import menu from './data/data.js'
console.log(menu)

let myMainDiv = document.getElementById('mainDiv')
myMainDiv.classList.add('container')

const patiekalai = ['All'];
for (let i = 0; menu.length > i; i++){
    console.log(menu[i].category);

    if (!patiekalai.includes(menu[i].category))
    patiekalai.push(menu[i].category);

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
    let category = document.createElement('h3');
    category.classList.add('p')
    category.innerText = menu[i].category;
    oneCardInfo.appendChild(category)

    // keliam viska i main div
    myMainDiv.appendChild(oneCardInfo);
    // console.log(menu[i].title)
    
    // console.log(menu[i])
}
console.log(patiekalai)

const filter_buttons = document.getElementById('filter');



patiekalai.forEach(patiekalai => {
    const menuButton = document.createElement('button');
    menuButton.innerText = patiekalai;
    menuButton.className = "menub";
    filter_buttons.appendChild(menuButton);
})

const navbuttons = document.getElementsByClassName('menub');
const card_title = document.getElementsByTagName('h3');


for (let one_category of navbuttons) {

                one_category.addEventListener('click',
                    () => { getresult(one_category.innerText) })
            }
    

            const getresult = (patiekalai) => {
            
                for (let item of card_title) {
                    if (item.innerText === patiekalai || patiekalai === 'all') {
                        item.parentElement.style.display = "block";
                        
                    }
                    else {
                        item.parentElement.style.display = "none"
                        
                    }
                }
            }

