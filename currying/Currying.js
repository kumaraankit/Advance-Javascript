// Currying is an advanced technique of working with functions.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.

// Syntax
   function curry(f){
       return function(a){
           return function(b){
               return f(a,b)
           }
       }
   }

function sum(a,b){
    return a+b;
}

let curriedSum=curry(sum)
console.log(curriedSum(2)(3))

// The result of curry(func) is a wrapper function(a).
// When it is called like curriedSum(2), the argument is saved in the Lexical Environment, and a new wrapper is returned function(b).
// Then this wrapper is called with 3 as an argument, and it passes the call to the original sum.

// _.curry- loadash library to call the curry functions normally and partially


// Why do we need curry
// For sending the logs over the network in real projects we can implement easily\
// Currying allows us to easily get partials. for log after currying the three argument universal function 
// log(date, importance, message) gives us partials when called with one argument (like log(date)) or two arguments (like log(date, importance)).


// Advance implementation of the curry
function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6, still callable normally
  alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  alert( curriedSum(1)(2)(3) ); // 6, full currying