
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
/*************cart **************/


window.onload = function() {
    const addToCartBtn = document.querySelector('.btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function() {
        const size = document.getElementById('size').value;
        const price = parseFloat(document.getElementById('price').textContent);
        const itemName = document.getElementById('item-name').textContent;
        const number = document.getElementById('number').value;
  
        const product = {
          size: size,
          price: price,
          itemName: itemName,
          number: number
        };
  
        let products = [];
        if (localStorage.getItem('products')) {
          products = JSON.parse(localStorage.getItem('products'));
        }
  
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        alert('Product added to cart!');
      });
    }
  };
  /*************************test */