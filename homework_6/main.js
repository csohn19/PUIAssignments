var productArr = []
var productArr2 = []

class Product {
    constructor (number, glaze) {
        this.number=number
        this.glaze=glaze
    }
}

/** function that will load the shopping cart page with the items that had been added */
function checkoutPageLoaded() {
    var loadedProductArr = localStorage.getItem('order')
    productArr2 = JSON.parse(loadedProductArr)

    console.log('we are on the checkout page')
    console.log(productArr2)

    var listOfProducts = document.getElementById('listOfProducts')

    for(var i = 0; i < productArr2.length; i++) {
        var bun = productArr2 [i]
    
        var bunNumber = bun.number
        var bunGlaze = bun.glaze
        listOfProducts.innerHTML +=  '<div>' + bunNumber + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Glaze: ' + bunGlaze + '</div>'
        listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[Click to Delete]</span>'
        listOfProducts.innerHTML += '<br /><br /><br />'
    }   
}

/** function that deletes items from the shopping cart */
function deleteProduct() {
    delete productArr2.splice(i,1);
    listOfProducts.innerHTML = ' '

    for(var i = 0; i < productArr2.length; i++) {
        var bun = productArr2 [i]
        if (bun) {
       
            var bunNumber = bun.number
            var bunGlaze = bun.glaze
            listOfProducts.innerHTML += '<div>' + bunNumber + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Glaze: ' + bunGlaze + '</div>'
            listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[Click to Delete]</span>'
            listOfProducts.innerHTML += '<br /><br /><br />'
        }
        
    }   

}

/** function to add items to the cart page */
function addToCart() {

    var numbers = document.getElementsByName("number");
    var selectedNumber = 'blank';

    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i].checked) {
            selectedNumber = numbers[i].value;
        }     
    }
    
    var glaze = document.getElementById ('glaze').value;

    var bun = new Product (selectedNumber, glaze);
    productArr.push(bun)

    localStorage.setItem('cart', JSON.stringify(productArr));

    updateCartNumber(productArr.length)
}

/** function that will update the number of items inside the shopping cart */
function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num
}  

/** function that will switch the product image on the product details page based on the glaze selection */
function switchImage(){
    var img = document.getElementById("glaze");
    var id = img.options[img.selectedIndex].id;
    document.getElementById("glazeImage").src=id
}

/** function that will load the shoppingcart.html page once the 'shopping cart' is clicked */
function goToCheckoutPage() {
    localStorage.setItem('order', JSON.stringify(productArr));
    window.location.replace('shoppingcart.html')
}
