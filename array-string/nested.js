const college = {
    name: 'vnc',
    class: ['one', 'two', 'three'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college.unique.color)
college.unique.result.merit = 'top top top most'
console.log(college.unique.result.merit)
college.events[1] = '16 december'
console.log(college.events[1])
delete college.class
console.log(college)