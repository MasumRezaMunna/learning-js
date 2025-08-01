const country = 'bangladesh';
const division = "newkhale";
const district =  `b-baria`;
// const thana = new String('demra');

// console.log(typeof thana);

const numbers = [54, 98, 78, 22, 65];
// console.log(numbers.length);
// console.log(numbers[1]);
console.log(numbers);
numbers[1] = 11;
console.log(numbers);

const capital = "dhaka";
console.log(capital.length);
console.log(capital[0]);
console.log(capital[2]);
capital[0] = 'f';    //string is immutable --> not changeable
                     //array is mutable --> changeable