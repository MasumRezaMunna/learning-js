console.log("one");
console.log("Two");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("Four");
console.log("Five");
function callThreee() {
  console.log("three");
}
