
let shop = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
},

{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
},
{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]


let cart = []

function drawShop(){
    let shopElem = document.getElementById('product-cards')
    let template = ''

    shop.forEach(product => {
        template +=  `
        <div class="col-md-6 col-lg-4 my-3">
        <div class="card product-card">
            <img src="${product.image}"alt"${product.name}"
                alt="${shop.name}">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <p><b>${product.name}</b></p>
                    <p>$${product.price}</p>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-secondary " title="Add item to cone!"
                        onclick="addItemToCart('${product.name}')">
                        <i class="mdi mdi-cart "></i>ADD</button>
                </div>
            </div>

        </div>

    </div>
</div>`
        
      shopElem.innerHTML = template    

console.log('drawShop')
    })

}   

function drawCart(){

let cartElem = document.getElementById('cart')
let cartTotalElem = document.getElementById('cart-total')
let template=''

    cart.forEach(item => {
    template += `
    <div>(${item.name} - ${item.quantity})
    <button onclick= "removeItem('${item.name}')"
    class= "btn btn-danger"> <i class = "mdi mdi-delete"</i> </button></div>`
})
let total = calculateCartTotal()
cartElem.innerHTML = template
debugger
cartTotalElem.innerText = total.toFixed(2)

}
function addItemToCart(name){

let itemToAdd = shop.find(p=> p.name == name)

let flavorsFoundInCart = cart.find(p => p.name == name)

if(flavorsFoundInCart){
    flavorsFoundInCart.quantity++
} else {
    cart.push({
        name: itemToAdd.name,
        price:itemToAdd.price,
        quantity:1
    })
    }
    drawCart()
}



function calculateCartTotal() {

let total = 0
cart.forEach(p => {
total += p.price * p.quantity
})

return total
}
function checkout() {
    cart =[]
    drawCart()
}


function removeItem(name){

    let index = cart.findIndex(p => p.name == name)
    cart.splice(index, 1)
    drawCart()

}



drawShop()