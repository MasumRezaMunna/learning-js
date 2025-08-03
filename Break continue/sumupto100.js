let numbers = 1;
let sum = 0;
while (true){
    sum += numbers;
    console.log(numbers)
    
    if(sum >= 100){
        console.log(sum);
        break;
    }
    numbers++;
}