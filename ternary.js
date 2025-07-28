const age = 102;
// if(age >= 18){
//     console.log('you can vote')
// }
// else{
//     console.log('jao ghumao')
// }

age >= 18 ? console.log('vote dao') : console.log('ghumai thako')

let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 50;
}
// console.log(price)
price = isLeader === true ? console.log(0) : console.log(price + 100)