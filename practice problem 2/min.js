// const prices = [ 20000, 16000, 50000, 100000, 12000, 30000];

// function getMin(numbers){
//     let min = numbers[0];
//     for(const num of numbers){
//         if(num < min){
//             min = num;
//         }
//     }
//     return min;
// }

// const cheap = getMin(prices);
// console.log('cheapest one is', cheap);












const phones = [
    {name: 'samsung', price: 29000, camera: '12 mp', color: 'black'},
    {name: 'xaomi', price: 20000, camera: '12 mp', color: 'black'},
    {name: 'oppo', price: 21500, camera: '12 mp', color: 'black'},
    {name: 'iphone', price: 100000, camera: '12 mp', color: 'black'},
    {name: 'walton', price: 10000, camera: '12 mp', color: 'black'},
    {name: 'vivo', price: 18000, camera: '12 mp', color: 'black'}
];

function getCheapestPhone(phones){
    let min = phones[0];
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('cheapest phone is:', cheap);