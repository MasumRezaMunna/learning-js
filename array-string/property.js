const person ={
    name: 'sodor uddin',
    age: 25,
    proffesion: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person);

// (dot notation)
// console.log(person.proffesion);
// const income =person.salary;
// console.log(income)

// (bracket notation)
// console.log(person['age'])
// const boyos = person['age']
// console.log(boyos)

// console.log(person.'fav places')  --> error

// console.log(person['fav places'])


person.salary = 30000;
person['age'] = 26;
console.log(person)