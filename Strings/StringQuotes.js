//Textual data is stored s strings in the form of UTF-16
//There are three types of quotes we use in Javascript Strings

// 1. Single quotes
let x='Ankit in single quotes'
// 2. Double Quotes
let y="Ankit in double quotes"
// 3. Backticks
let z=`Ankit in backticks`

//Backticks allow us to embed expression into it using ${}

const printName=()=>{
    return "Ankit"
}
console.log(` My name is ${printName()}`)

//backtick also allow to use print names on the new line but it is not possible to do so with
//single and double quotes as it will throw error

let names=`name:
Ankit
Peter
Ashutosh
Parker
MJ`;

console.log(names)