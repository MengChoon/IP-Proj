
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
/*product-gallery */
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
/*******cart************* */
// Store the item in the local storage
localStorage.setItem("itemName", JSON.stringify(item));

// Retrieve the item from the local storage
let retrievedItem = JSON.parse(localStorage.getItem("itemName"));

// Loop through the retrieved items and create HTML elements to display the information
for (let i = 0; i < retrievedItem.length; i++) {
let itemName = retrievedItem[i].name;
let itemPrice = retrievedItem[i].price;
let itemImage = retrievedItem[i].image;

// Create the HTML elements and set their properties
let itemContainer = document.createElement("div");
itemContainer.className = "cart-item";

let itemImageElement = document.createElement("img");
itemImageElement.src = itemImage;
itemImageElement.alt = itemName;
itemContainer.appendChild(itemImageElement);

let itemNameElement = document.createElement("p");
itemNameElement.innerHTML = itemName;
itemContainer.appendChild(itemNameElement);

let itemPriceElement = document.createElement("p");
itemPriceElement.innerHTML = "$" + itemPrice;
itemContainer.appendChild(itemPriceElement);

// Add the HTML elements to the page
document.getElementById("cart-container").appendChild(itemContainer);
}