// Different methods involved to check if a substring is present or not
// if found the substriung from the position return the position otherwise return -1 on not found
// Syntax     -------    str.indexOf(substr, pos).

let str="Widget with id"
console.log(str.indexOf("Widget")) // OP-0
console.log(str.indexOf("widget"))  //OP- -1
console.log(str.indexOf("w"))  // 7
console.log(str.indexOf("id")) //1

// Second parameter of the alllow us to use the position and check for next occurence
console.log(str.indexOf("id",2)) //12

// For all the occurences we can run indexOf in a loop
let str1="hey Ankit hey Ashutosh hey Anubhabh"
let pos=0;
let target="hey"
while(true){
    position=str1.indexOf(target,pos);
    if(position===-1) break;
    console.log(position)
    pos=position+1
}

// if we put indexOf method in if and if we get the position value as zero then it will not work
// because o means false in if condition instead we can check for -1

if (str.indexOf("Widget") != -1) {
    console.log("We found it"); // works now!x
}

//  The bitwise NOT trick for old codes, we dont use nowadays as we hav .includes 
console.log( ~2 ); // -3, the same as -(2+1)
console.log( ~1 ); // -2, the same as -(1+1)
console.log( ~0 ); // -1, the same as -(0+1)
console.log( ~-1 ); // 0, the same as -(-1+1)

if (~str.indexOf("Widget")) {
  console.log( 'Found it!' ); // works
}

//  includes, startsWith, endsWith
//  method str.includes(substr, pos) returns true/false depending on whether str contains substr within.

// It’s the right choice if we need to test for the match, but don’t need its position:

console.log(str.includes("Widget")) //true
console.log(str.includes("Wid"))    // true
console.log(str.includes("id",20))  //false
console.log(str.startsWith("Wid")) //true
console.log(str.endsWith("id"))    //true