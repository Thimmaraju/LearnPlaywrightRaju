// async makes a function return a Promise 

// await makes a function wait for a Promise

//The await keyword is used to wait for a promise to resolve

//Pauses the execution of the async function until the Promise is resolved or rejected.

//await must be used inside an async function.
//=========================================================

// async function functionName() {
//     try {
//       const result = await someAsyncFunction();
//       console.log(result);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   }

// // //=====================================================

// async function myFunction() {
//     return "Hello";
//   }


// // // //or
// function myFunction() {
//     return Promise.resolve("Hello");
//   }


//   async function  main(){

//     const x = await myFunction()
//     console.log(x)
//   }


// main()
//===============================================

// const getData = async () => {
//     let y = "Hello World";
//     console.log(y);
// }

//  getData();


//=======================================================================

// function step1(value) {
//     return new Promise((resolve, reject) => {
//       // Simulating the callback behavior
//       resolve(value + 10); // Resolving the promise with the result
//     });
//   }


//    step1(5)
//     .then(result => {
//       console.log("Result: " + result); // If promise is resolved, print the result //15
//     })
//     .catch(error => {
//       console.log("An error occurred"); // If promise is rejected, handle error
//     });

 // ====================================

async function step1(value) {
    return value + 10;
  }

// async  function execute (){

//   let result1 = await step1(10)

//   console.log(result1)
// }

// execute()
  //Promise{ 15}
  
  async function step2(value) {
    return value + 10;
  }

  //Promise{ 25}
  
  async function step3(value) {
    return value + 10;
  }

//   //Promise{ 35}
  
  async function run() {

      let result1 = await step1(5);    //15
      let result2 = await step2(result1);  //25
      let result3 = await step3(result2); //35
      console.log("Results " + result3);
   
  }
  
   run();
  

//   //=====================================================

 // Advantages of Async and Await
      //Improved Readability: Async and Await allow asynchronous code to be written 
      // in a synchronous style, making it easier to read and understand.


    //Error Handling: Using try/catch blocks with async/await simplifies error handling.
    
    //Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, 
    // making the code more linear and readable.


    //Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.

    // ===============================

    // // Regular Expression

      

    // //Sets 

    // //Maps 

    // ===========================

    //5 to 7 yrs 

    // Javascript 

    // Cypress 
    // Playwright 
    // WDIO 

    // Web Application JS 

//Maps 

// sets 

// regular Expression 

// 5 to 7 yrs 

//JS based tools 

// Web application 
// JS 

// Cypress 

// WDIO 

// Playwright 

// Selenium - JS 

// Agent AI 

// chat gpt 
// github copilot 





  
