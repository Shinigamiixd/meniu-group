let cart = JSON.parse(localStorage.getItem("cart"))
if (cart === null) console.log("cart empty")
else {
    let currentcart = document.querySelector(".current-cart")
    let totalprice = 0
    cart.forEach(element => {
        totalprice += element.Price * element.Count
        itemPrice = element.Price * element.Count
        li = document.createElement("li")
        li.classList = "list-group-item d-flex justify-content-between lh-sm"

        div = document.createElement("div")

        h6 = document.createElement("h6")
        h6.classList = "my-0"
        h6.innerHTML = element.Title

        small = document.createElement("small")
        small.classList = "text-muted"
        small.innerHTML = "x" + element.Count

        span = document.createElement("span")
        span.classList = "text-muted"
        span.innerHTML = "$" + itemPrice.toFixed(2)

        total = document.createElement("li")
        total.classList = "list-group-item d-flex justify-content-between"

        totalspan = document.createElement("span")
        totalspan.innerHTML = "Total (USD)"

        totalstrong = document.createElement("strong")
        totalstrong.innerHTML = "$" + totalprice.toFixed(2)

        total.appendChild(totalspan)
        total.appendChild(totalstrong)

        div.appendChild(h6)
        div.appendChild(small)
        li.appendChild(div)
        li.appendChild(span)
        currentcart.appendChild(li)
    })

    let clearButton = document.createElement("button")
    clearButton.classList = "clearCartButton"
    clearButton.innerHTML = "Clear Cart"
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("cart")
        document.querySelector(".current-cart").innerHTML = ""
    })

    currentcart.appendChild(clearButton)
    currentcart.appendChild(total)
}

