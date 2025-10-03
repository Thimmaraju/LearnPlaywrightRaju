// function displayMessage(){
  
//   console.log("This is a simple function")
// }


//Normal

// function (){
  
//   console.log("This is a simple function")
// }

//arrow syntax 

// () => console.log("This is a simple function")



// function  greetM(){

//      console.log("good Morning")
// }

// function  greetA(){

//      console.log("good Afternoon")
// }

// function  greetE(){

//      console.log("good Evening")
// }

// function  greetN(){

//      console.log("good Night")
// }

// function SayGreetings(callback){
   
//     console.log("Hey Hi")

//     callback()

// }

// SayGreetings(greetN)

//Higher order function  - it is a function which will have call back function

//Ex: SayGreetings

// call back function - function called as an argument/Parameter inside another function is called as callback function 

// ex: greetN

// Why we need this is 
// to Make our code a asynchronous 

//synchronous - Executing the code line by line sequentially 

//by Default Js code is synchronous

// To Make Asynchronus we are using callback function


// console.log("Bharath")

// setTimeout( function (){
//     console.log("This is Anonymous function ")
// }, 5000)

// console.log("Raju")

// //setTimeout( function , time)

// //Here we using Anonymous function as a callback function 

// //closure function  - closure function is a callback function but when it is executing it will access some data from higher order function 

// function add(n1, n2){

//     console.log(n1+n2)
// }

// function displaymessage(n1){

//     console.log("this is simple callback" + n1)
// }

// function calculator(num1, num2, callback, callback2){

//     console.log(num1)
//     console.log(num2)

//     let x = 6

//     callback(x)

//     callback2(num1, num2)
// }

// calculator(4,7, displaymessage, add)

// //callback  - Promises 


// function step1(value, callback) {
//     callback(value + 10, false);
// }

// function step2(value, callback) {
//     callback(value + 10, false);
// }

// function step3(value, callback) {
//     callback(value + 10, false);  //40
// }

// step1(10, function (result1, boolvalue) {
//     if (!boolvalue) {
//         step2(result1, function (result2, boolvalue) {
//             if (!boolvalue) {
//                 step3(result2, function (result3, boolvalue) {
//                     if (!boolvalue) {
//                         console.log("Results " + result3);
//                     }
//                 })
//             }
//         })
//     }
// });



// Raju - i will take value and will have callback

// Bharth  -  will take value and will have callback

// Sumanth - will take value and will have callback


//Using Promises 



   function step1(value, error) {
    return new Promise((resolve, reject) => {
      if (error) { 
        reject('Something went wrong');
      } else {
         resolve(value + 10);
      }
    });
  }
  
  function step2(value, error) {
    return new Promise((resolve, reject) => {
      if (error) { 
        reject('Something went wrong');
      } else {
        resolve(value + 10); 
      }
    });
  }
  
  function step3(value, error) {
    return new Promise((resolve, reject) => {
      if (error) { 
        reject('Something went wrong');
      } else {
        resolve(value + 10);
      }
    });
  }
  
  // Usage:
   step1(10, false)
     .then((result1) => step2(result1, false))
     .then((result2) => step3(result2, false))
     .then((result3) => console.log(result3))
     .catch((error) => console.log(error));

     //all our Playwright commnads will return promise

    // page.goto("url")

    // to get the value inside Promise instead of .then  We can Use await 
    // Provided the condition the higer order function should be async 