// let salary= require("./module1.js")
// console.log(salary)


// let add= require("./module1.js")
// console.log(add(3,4))

let {add, sub, salary} = require ("./module1.js")
console.log(sub(8,9))
console.log(salary)
console.log(add(8,9))


add = (a,b)=>{return (a+b)}

sub = (a,b)=>{return (a-b)}
let salary = "30Lac"

// module.exports = salary

// module.exports.add = add

// module.exports.sub = sub

module.exports = {add, sub, salary}