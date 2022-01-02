// To access the character we need to use [] charAt(position)

let position="Ankit"
console.log(position[0])
console.log(position.charAt(0))

// if we try to access character which is not present then [] will throw undefined whereas charAt return empty string

console.log(position[100])
console.log("Empty String---"+position.charAt(100))

// Another way of iterating is for..of

for(let pos of position){
    console.log(pos)
}