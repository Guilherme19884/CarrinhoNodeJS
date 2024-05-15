// Quais ações meu carrinho pode fazer?


//=======CASOS DE USO=========
// Adicionar item do carrinho ✅
async function addItem(userCart, item){
    userCart.push(item)
}

// deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex( (item) => item.name === name)

    if (index != -1){
        userCart.splice(index, 1)
    }
}

// remover um item do carrinho (subtrair uma unidade)
async function removeItem(userCart, name){
    
}

// somar valores totais do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

//Mostrar os item que tem no carrinho
async function displayCart(userCart){
    console.log('Shopee cart list: ') 
    userCart.forEach((item, index) => {
         console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
         Quantidade  ${item.quantity} | Subtotal = ${item.subtotal()} `)
    });
    
}

export {
    addItem,
    calculateTotal, 
    deleteItem,
    removeItem, 
    displayCart
}