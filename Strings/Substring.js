// There are 3 methods to get a substring: substring,substr and slice
// Syntax   str.slice(start [, end])
// start-- starting of the index
// end ---- excluding the end

let str="Anknit"
console.log(str.slice(0,4)) //Ankn

// If we do not specify the second argument then it will continue to the last
console.log(str.slice(2)) // knit

// Negative values are also possible for slice method
console.log(str.slice(-3,-1))  //ni

// Syntax  str.substring(start [,end])
// It returns the part of the string between start and end
// This is almost the same as slice, but it allows start to be greater than end.

console.log( str.substring(2, 4) ); //kn
console.log( str.substring(4, 2) ); //kn

// Negative arguments are treated as zero nad not supported by substring method

//slice(start, end)	           from start to end (not including end)	        allows negatives
//substring(start, end)	       between start and end	                        negative values mean 0
//substr(start, length)	       from start get length characters	                allows negative start