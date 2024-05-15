import createItem from "./service/item.js"
import * as cartService from "./service/cart.js"



const myCart = []
const myWhishList = []

console.log('Bem vindo ao seu carrinho shopee!')

//async function addItemToCart() {

const item1 = await createItem("hotwhewls ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini ", 39.99, 3)


//adicionei 1 item no carrinho e 1 na lista de desejos
await cartService.addItem (myCart, item1)
await cartService.addItem (myWhishList, item2)


await cartService.removeItem(myCart, 1)
await cartService.displayCart(myCart)



//deletei no carrinho 1 item .
//await cartService.deleteItem(myCart, item1.name)
console.log("\n")
console.log('shopee cart Total is: ')
await cartService.calculateTotal(myCart)
