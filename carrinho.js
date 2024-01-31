const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index,1) 
    }
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Your shopping Cart is empty!") 
    }else{
        console.log("Itens in your shopping Cart: ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length = 0
    console.log("Your shopping Cart has been cleared!")
}

addItemToCart("Shorts")
addItemToCart("Shirt")
addItemToCart("CD")
addItemToCart("Vinyl")
addItemToCart("Mouse pad")  
addItemToCart("Tennis") 

viewCart()

removeItemFromCart("Mouse pad")

viewCart() 

clearCart()

viewCart() 