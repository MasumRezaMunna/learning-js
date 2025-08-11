// const numbers = [300, 100, 700, 1200];


// const products = [
//     {name: 'sampoo', price: 300},
//     {name: 'chiruni', price: 100},
//     {name: 'shirt', price: 700},
//     {name: 'pant', price: 1200}
// ]

// function getShoppingTotal(products){
//     let total = 0;
//     for(const product of products){
//         total = total + product.price;
//     }
//     return total;
// }

// const total = getShoppingTotal(products);
// console.log('total ajke khosabe', total);







const products = [
    {name: 'sampoo', price: 300, quantity: 2},
    {name: 'chiruni', price:100, quantity: 3},
    {name: 'shirt', price: 700 , quantity: 5},
    {name: 'pant', price: 1200 , quantity: 1},
];

function cartTotal (products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);