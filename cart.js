
/*************Menu **************/
var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight="0px";
function menutoggle(){
    if(menuitems.style.maxHeight=="0px")
        {
            menuitems.style.maxHeight="200px"
        }
    else
        {
            menuitems.style.maxHeight="0px"
        }
}
/*************images **************/
var ProductImg = document.getElementById("Productimg");
var Smallimg = document.getElementsByClassName("small-img");

if (Smallimg.length > 0) {
  Smallimg[0].onclick = function() {
    ProductImg.src = Smallimg[0].src;
  }

  if (Smallimg.length > 1) {
    Smallimg[1].onclick = function() {
      ProductImg.src = Smallimg[1].src;
    }
  }

  if (Smallimg.length > 2) {
    Smallimg[2].onclick = function() {
      ProductImg.src = Smallimg[2].src;
    }
  }

  if (Smallimg.length > 3) {
    Smallimg[3].onclick = function() {
      ProductImg.src = Smallimg[3].src;
    }
  }
}
// Add product to local storage when add to cart button is clicked
const addToCartBtn = document.getElementById("add-to-cart-btn");
const sizeSelect = document.getElementById("size");
const numberInput = document.getElementById("number");
const itemName = document.getElementById("item-name").textContent;
const price = document.getElementById("price").textContent;

addToCartBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const size = sizeSelect.value;
  const number = numberInput.value;

  if (size === "Select Size") {
    alert("Please select a size");
    return;
  }

  const product = {
    itemName,
    size,
    number,
    price: parseFloat(price.slice(1))
  };

  let products = [];
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added to cart");
});

window.onload = function() {
  if (localStorage.getItem("products")) {
    let products = JSON.parse(localStorage.getItem("products"));
    const cartItemsContainer = document.getElementById("cart-items");

    let subtotal = 0;
    for (const product of products) {
      const tr = document.createElement("tr");
      const productSubtotal = product.price * product.number;
      subtotal += productSubtotal;
      tr.innerHTML = `
        <td>
          <div class="cart-info">
            <img src="images/shoe1.jpg">
            <div>
              <p>${product.itemName}</p>
              <small>Price: $${product.price}</small>
              <br>
              <a href="#">Remove</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="${product.number}"></td>
        <td>$${productSubtotal.toFixed(2)}</td>
      `;

      const removeBtn = tr.querySelector("a");
      removeBtn.addEventListener("click", function() {
        products = products.filter(function(p) {
          return p.itemName !== product.itemName;
        });

        localStorage.setItem("products", JSON.stringify(products));
        tr.remove();
      });

      cartItemsContainer.appendChild(tr);
    }

    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  }
};
const taxRate = 0.1; // 10% tax rate
let totalPrice = 0;
for (const product of products) {
  totalPrice += product.price * product.number;
}

const tax = totalPrice * taxRate;
const totalWithTax = totalPrice + tax;

document.getElementById("tax").innerHTML = `$${tax.toFixed(2)}`;
document.getElementById("total").innerHTML = `$${totalWithTax.toFixed(2)}`;
/************* */
