var productArr = []

class Product {
    constructor (glaze, number) {
        this.number=number
        this.glaze=glaze
    }
}

function addToCart() {
    var numbers = document.getElementsByName("numbers");
    var selectedNumber;
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i].checked)
            selectedNumber = numbers[i].value;
    }
    var glaze = document.getElementById ('glaze').value
    var bun = new Product (selectedNumber, glaze)
    productArr.push(bun)
    updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = num
}  


function switchImage(){
    var img = document.getElementById("glaze");
    var value = img.options[img.selectedIndex].value;
    document.getElementById("glazeImage").src=value
}
