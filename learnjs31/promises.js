const p = new Promise((resolve, reject) => {
    let x =2;
  
    if (x === 2) {
      resolve(

        {
           firstname : "Raju",
           lastname : "G"
        }
      );
    } else {
      reject("Fail");
    }
  });

console.log(p) 



// Promise is an object 

// wich will have 3 states pending , resloved , rejected 

p.then((message) => console.log(message)) // resolve  
 .catch((message) => console.log(message)) // reject 
//   // .finally(()=> console.log("xyz"))

// p.then((message) => console.log(message), (error) => console.log(error))

// //     //or 
  
// // // .then - we have to use when promise resolved 

// // // .catch - we have to use when promise rejected  


//   p2 = Promise.resolve("Raju")  // Promise{ "Raju"}

//   p2.then((message) => console.log(message))  // Raju




//   p3 = Promise.reject("Ravi")

// //  console.log(p) // Promise { <rejected> 'Ravi' }
  
//    p3.catch((error) => console.log(error));


//     //  p4 = Promise.reject("Krishna")
//     //     p4.catch((error) => console.log(error));

//    p4 = "Krishna"


  //Ravi

 //   p.then((message) => console.log(message), (error) => console.log(error))


//===============================

// then() - to get the resolved value 

// catch - to get the rejected value 



//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promise will have 3 states 

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//The promise methods then(), catch(), and finally() 
// are used to associate further action with a promise that becomes settled.


//The catch() -The catch statement defines a code block to handle any error. 
// The finally() - The finally statement defines a code block to run regardless of the result.

// const task = new Promise((resolve, reject) => {
//     const sum  = 1+1;  // Change this to false to simulate rejection
  
//       if (sum === 2) {
//         resolve("Task completed successfully!");
//       } else {
//         reject("Task failed!");
//       }
  
//   });

  //console.log(task)
  
  //  task
  //    .then((message) => console.log(message))  // Will run if the promise is fulfilled
  //    .catch(errormsg => console.log(errormsg)); // Will run if the promise is rejected


//   //or

//task.then(message => console.log(message), errormsg => console.log(errormsg))

//===================================================

// //callback

  // function step1(value, callback) {
  //   callback(value + 10, false); // The callback is called with the result and error flag
  // }
  
  // step1(5, function(result, error) {
  //   if (error) {
  //     console.log("An error occurred");        
  //   } else {
  //     console.log("Result: " + result); // If no error, print the result
  //   }
  // });

  //Result: 15


// //Promise 


// function step1(value) {
//     return new Promise((resolve, reject) => {
//       // Simulating the callback behavior
//       resolve(value + 10); // Resolving the promise with the result
//     });
//   }
  
//   step1(5)
//     .then(result => {
//       console.log("Result: " + result); // If promise is resolved, print the result //15
//     })
//     .catch(error => {
//       console.log("An error occurred"); // If promise is rejected, handle error
//     });


//==================================================

  //  function step1(value, error) {
  //   return new Promise((resolve, reject) => {
  //     if (error) { 
  //       reject('Something went wrong');
  //     } else {
  //        resolve(value + 10);
  //     }
  //   });
  // }
  
  // function step2(value, error) {
  //   return new Promise((resolve, reject) => {
  //     if (error) { 
  //       reject('Something went wrong');
  //     } else {
  //       resolve(value + 10); 
  //     }
  //   });
  // }
  
  // function step3(value, error) {
  //   return new Promise((resolve, reject) => {
  //     if (error) { 
  //       reject('Something went wrong');
  //     } else {
  //       resolve(value + 10);
  //     }
  //   });
  // }
  
  // // Usage:
  //  step1(10, false)
  //    .then((result1) => step2(result1, false))
  //    .then((result2) => step3(result2, false))
  //    .then((result3) => console.log(result3))
  //    .catch((error) => console.log(error));

    

//===========================================================================


// Promise.all() - Returns a single Promise from a list of promises When all promises fulfill

// Promise.race() - Returns a single Promise from a list of promises When the faster promise settles

// Promise.any() - Returns a single Promise from a list of promises When any promise fulfills

// Promise.allSettled() - Returns a single Promise from a list of promises When all promises settle

// resolved 

// rejected 


//   const p1 = Promise.resolve('Like If you understood callbacks');
//   //const p2 = Promise.reject('Rejected');
//   const p3 = 100;
//   const p4 = new Promise((resolve, reject) => {
//       setTimeout(resolve, 500, 'Subscribe for more updates');
//   });

//  const p5 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 1000, 'Subscribe for less updates');
//  });


//to loop the promise 
//Promise.all([ p1, p3 ,p4, p5]).then((values) => console.log(values)); // resolved values 
//Promise.race([ p4, p5 ]).then((value) => console.log(value)); // whichever first resolved value 
//Promise.allSettled([ p1, p2, p3, p4, p5 ]).then((values) => console.log(values)); // resolved and rejected both 
//Promise.any([ p4, p5 ]).then((values) => console.log(values));

//prompt 

//working with Multiple window 


//async // await 

