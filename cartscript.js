let currentcart = document.querySelector(".current-cart")

let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
cart.forEach(element => {
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

    div.appendChild(h6)
    div.appendChild(small)
    li.appendChild(div)
    li.appendChild(span)
    currentcart.appendChild(li)
});