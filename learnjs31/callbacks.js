// Synchronous vs Asynchronous 

// Synchronous - Sequential 

// Asynchronous - not in  a Sequential order 



// setTimeout(() => {
    
// }, timeout);



// setTimeout( () => {

//     console.log("Mohan")

// }, 3000);

//  console.log("Raju")


// call backs 

// callback  hell 

// promises 

// aysnc and await


//========================================================================================


//   A callback is a function passed as an argument to another function.

//   How Callbacks Work

// Passing the Function: The function you want to run after some operation is passed as an argument to another function.

// Executing the Callback: The main function executes the callback function at the appropriate time. 
// // This can be after a delay, once a task is complete, or when an event occurs.


// function myDisplayer(some) {
//     console.log(some)
// }



//   function squrethenum(num1){

//     console.log(num1*num1)
//   }

//   function numbytwo(num1){

//     console.log(num1/2)
//   }


//   function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2; //50
//      callback(sum) // closure function 
//   }

//   myCalculator(5, 5, numbytwo)

// //  Manoj 
// //  (callback)

// //  Manoj - Krishna 

// //  Manoj - Uday

// //    myCalculator(5, 5, squrethesum); //100


// //    myCalculator(30, 20, numbytwo); //25


// // function add(num1, num2, Raju ){
// // let sum = num1+num2 // 12 
// // Raju(sum)
// // }

// // add(4,8,numbytwo ) // 6


// //   // In the example above, myDisplayer is a called a callback function.

// //   // It is passed to myCalculator() as an argument.


// //   //=================================================================

  //  let numbers = [1, 2, 3, 4, 5];

  // function processArray(arr, callback) {
  //   for (let i = 0; i < arr.length; i++) {
  //     callback(arr[i]); 
  //   }
  // }

  // function devidewith2(number) {
  //   console.log(number / 2);
  // }

  // function doubleAndPrint(number) {
  //   console.log(number * 2);
  // }

  //   processArray(numbers, doubleAndPrint ) // 0.5, 1,

    //processArray(numbers, doubleAndPrint)

//processArray(numbers, devidewith2)

//higher-order function


// The main Function in the examples above is a higher-order function because it takes a callback function as an argument.


// Higher 

// Call back 


//   //============================================

//   //Anonymous functions

//   //Anonymous functions are functions that are not named and are often used as callbacks. 
//    The function passed to setTimeout in the first code example is an anonymous function

//   //setTimeout(code, delay)

//   setTimeout(function() {
//     console.log("This is an anonymous callback function!");
//   },  8000);

//  map(), filter(), reduce() these methods will use anonymous functions (or arrow functions) as callbacks.

//   arr2 = [1, 2, 3, 4, 5];

// doubled = arr2.map(function(number) {
//   return number / 3 
// })
// console.log(doubled)

// function(number) {
//   return number / 2 
// }

// (number) => number/2

// // or from es6 arrow functions 

//let doubled = arr2.map(number => number * 2);
// console.log(doubled)

// // filter

  //  let arr2 = [1, 2, 3, 4, 5];

//   let arr3 = ["Yamuna","Raju", "Shashi", "Yamuna","Yamuna"]

//   let filterednames = arr3.filter(name => name=="Yamuna" || name == "Raju" )
 
//   console.log(filterednames)

//  // numbers.filter(function)

//   //number => number % 2 === 0

//  let evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); 

// //reduce 

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

// // closure 

// // call back will become closure function when it is accessing varibales for higher order function

// function inner(name) {
//     console.log(name); // Inner function has access to the "name" variable

// };

// function outer(callback) {

//     let name = "Alice"; // Outer variable

//     callback(name)
// }

// outer(inner)


//In a different way

// function outer() {
//   let name = "Alice"; // Outer variable
//   return function inner() { 
//     console.log(name); // Inner function has access to the "name" variable
//   };
// }

//  const greet = outer(); // outer() runs, but doesn't log yet

//  greet()



// // 1. Passing 10 as the initial value to Step1
// // 2. If there is no error, then passing the result to Step2
// // 3. If there is no error again, then passing the result to Step3
// // 4. Finally, printing the result.

// step1(10, function (result1, boolvalue) {
//     if (!boolvalue) {
//       step2(result1, function (result2, boolvalue) {
//         if (!boolvalue) {
//           step3(result2, function (result3, boolvalue) {
//             if (!boolvalue) {
//               console.log("Results " + result3);
//             }
//           })
//         }
//       })
//     }
//   });

//   function step1(value, callback) {   
//     callback(value + 10, false);
//   }

//   function step2(value, callback) {   
//     callback(value + 10, false);
//   }

//   function step3(value, callback) {   
//     callback(value + 10, false);  //40
//   }


  //Promises 

// //Using multiple nested callbacks can become complex and hard to manage, often referred to as "callback hell."

// //Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead

// let p = new Promise((resolve, reject) => {

//     let x = 2

//     if (x == 2) {

//         resolve("Raju")
//     }
//     else {

//         reject("Ravi")
//     }
// })



// function step1(value, callback) {
//     callback(value + 10, false); // The callback is called with the result and error flag
//   }
  
//   step1(5, function(result, error) {
//     if (error) {
//       console.log("An error occurred");        
//     } else {
//       console.log("Result: " + result); // If no error, print the result
//     }
//   });


//   Promise is object  

//   x and y 

//   resolve promise x 

//   reject promise y 