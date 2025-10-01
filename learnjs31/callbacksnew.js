

// JS - Synchronous 

// it will execute statements sequentially 


// console.log("Raju")
// setTimeout(()=> console.log("Yamuna"), 3000)
// console.log("Narayan")

//test("title", function)


// callback functions 

// Promises 

//function without name 

//setTimeout(function, 3000)


// function displayname(){

//     console.log("Raju")
// }


// function displayGreeting(callback){

//     console.log("Hey Hi")

//     callback
// }

// displayGreeting(displayname())



// function add(n1,n2){

//     console.log(n1+n2)
// }


// function substract(n1, n2){

//     console.log(n1-n2)
// }


// function multiply(n1, n2){

//     console.log(n1*n2)
// }

// function devide(n1, n2){

//     console.log(n1/n2)
// }


// function calculate(callback){

//    let n1 = 25
//    let n2 = 34
//     callback(n1,n2)
// }

 
// calculate( add)

// calculate(multiply)

// calculate(devide)

// calculate(substract)

//calculate -- Higher order function 

//callback function is function we will send as an argument to the another function 
//closure function  - if a callback is accessing the data from Higher order function 


// function  printnameShasi(){

//     console.log("Shashi")
// }

// function  printnameLingaraj(){

//     console.log("Lingraj")
// }

// function Greetings( callback){

//     console.log("Good Morning")

//     callback()
// }

// Greetings(printnameLingaraj)

// callback 

// Higher Order - Its main function which take callback function as argument 

//closure function - 

// Many times we will use anonymoius function as callback function

// B 
// C
// D

// function  A(callback)

// function adduser()

// function  edituser()

// function deleteuser()

// function ProcessUser(callback){

//     // several statements
//     callback()
// }

//callback hell

  function step1(value, callback) {   
    callback(value + 10, false);
  }

  function step2(value, callback) {   
    callback(value + 10, false);
  }

  function step3(value, callback) {   
    callback(value + 10, false);  //40
  }

  step1(10, function (result1, boolvalue) {
    if (!boolvalue) {
      step2(result1, function (result2, boolvalue) {
        if (!boolvalue) {
          step3(result2, function (result3, boolvalue) {
            if (!boolvalue) {
              console.log("Results " + result3);
            }
          })
        }
      })
    }
  });

  // Promises 