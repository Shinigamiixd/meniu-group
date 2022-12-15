let currentcart = document.querySelector(".current-cart")
let totalprice = 0

let cart = JSON.parse(localStorage.getItem("cart"))
cart.forEach(element => {
    totalprice += element.Price
    li = document.createElement("li")
    li.classList = "list-group-item d-flex justify-content-between lh-sm"
    
    div = document.createElement("div")
    
    h6 = document.createElement("h6")
    h6.classList = "my-0"
    h6.innerHTML = element.Title

    small = document.createElement("small")
    small.classList = "text-muted"
    small.innerHTML = "x1"

    span = document.createElement("span")
    span.classList = "text-muted"
    span.innerHTML = "$" + element.Price

    total = document.createElement("li")
    total.classList = "list-group-item d-flex justify-content-between"
    
    totalspan = document.createElement("span")
    totalspan.innerHTML = "Total (USD)"

    totalstrong = document.createElement("strong")
    totalstrong.innerHTML = "$" + totalprice.toFixed()

    total.appendChild(totalspan)
    total.appendChild(totalstrong)

    div.appendChild(h6)
    div.appendChild(small)
    li.appendChild(div)
    li.appendChild(span)
    currentcart.appendChild(li)
});

currentcart.appendChild(total)