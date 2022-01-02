// Strings cannot be changed , it can only be replaced or append to the next string
let x="Ankit"
let y="a"+x[1]
console.log(y)

// If we try to change the string the it will throw error

let a="Ank"
a[0]="a"
console.log(a[0])

// It is also possible to change the case using some built in methods

let name="aNkit"
console.log("name in Uppercase----"+name.toUpperCase())
console.log("name in Lowercase----"+name.toLowerCase())
console.log("name in first letter as Uppercase----"+name[0].toUpperCase())