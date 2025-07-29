let age = 19;
let fare = 800;
let isStudent = true;
if (age < 10){
    console.log("free");
}
else if (isStudent){
    console.log(fare * (50 / 100));
}
else if (age >= 60){
    console.log(fare * ( 15 / 100));
}
else{
    console.log(fare);
}