let cart=[];
const TAX=0.15;
var discount=false


function AddToCart(name,price,quantity){
    let defaultQuantity=1
    quantity=quantity || defaultQuantity
    cart.push({name,price,quantity})
}

function Discount(code){
    discount=code==="HUGE10"?true:false
}
function Total(){
    let subtotal=0
    for (item of cart){
        subtotal+= item.price*item.quantity
    }
    if(discount){
        subtotal*=0.9
    }
    return subtotal + (subtotal *TAX)
}
function checkout() {
    console.log("Processing your order...");
    
    setTimeout(() => {
        console.log("Order processed successfully!");
        console.log("Final Total:",Total().toFixed(2));
    }, 2000); 
}
AddToCart("Shirt",450)
Discount("HUGE10")
checkout()

