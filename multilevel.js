const price = 4000;

if(price >= 5000){
    const discount = price *10/100;
    const pay = price - discount;
    console.log(pay);
}

else if(price > 2500){
    const discount = price * 5/100;
    const pay = price - discount;
    console.log(pay);
}

else{
    console.log(price);
}