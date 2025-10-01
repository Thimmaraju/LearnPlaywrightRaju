// const { StatementSync } = require("node:sqlite");


// const p = new Promise((resolve, reject) => {
//     let x =2;
  
//     if (x === 2) {
//       resolve(

//            "Raju"
//       );
//     } else {
//       reject("Fail");
//     }
//   });

//   //console.log(p)

//   p.then(message => console.log(message))

// const q = Promise.resolve("Raju")

//   q.then(message => console.log(message))

// //  console.log(q)

// const r = Promise.reject("Fail")

//   r.catch(message => console.log(message))
//    .finally(console.log("this is finally block"))

// //    .then 
// //    .catch
// //    .finally



// //==========================================

//    function step1(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//          resolve(value + 10);
//       }
//     });
//   } 


  
//   function step2(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10); 
//       }
//     });
//   }
  
//   function step3(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10);
//       }
//     });
//   }
  
//   // Usage:
//    step1(5, false)
//      .then((result1) => step2(result1, false))
//      .then((result2) => step3(result2, false))
//      .then((result3) => console.log(result3))
//      .catch((error) => console.log(error));


// promise will have 3 states 

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//The promise methods then(), catch(), and finally() 
// are used to associate further action with a promise that becomes settled.


//The catch() -The catch statement defines a code block to handle any error. 
// The finally() - The finally statement defines a code block to run regardless of the result.


// Promise.all() - Returns a single Promise from a list of promises When all promises fulfill

// Promise.race() - Returns a single Promise from a list of promises When the faster promise settles

// Promise.any() - Returns a single Promise from a list of promises When any promise fulfills

// Promise.allSettled() - Returns a single Promise from a list of promises When all promises settle

// resolved 

// rejected 


//    const p1 = Promise.resolve('Like If you understood callbacks');

//   // const p2 = Promise.reject('Rejected');
//    const p3 = 100;
//   const p4 = new Promise((resolve, reject) => {
//       setTimeout(resolve, 10000, 'Subscribe for more updates');
//   });

//  const p5 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 5000, 'Subscribe for less updates');
//  });

//  p1.then(message => console.log(message))
//  // p3.then(num => console.log(num))
//    p4.then(message => console.log(message))
//       p5.then(message => console.log(message))



//to loop the promise 
//Promise.all([ p1, p3 ,p4, p5]).then((values) => console.log(values)); // resolved values 
//Promise.race([ p4, p5 ]).then((value) => console.log(value)); // whichever first resolved value 
//Promise.allSettled([ p1, p2, p3, p4, p5 ]).then((values) => console.log(values)); // resolved and rejected both 
//Promise.any([ p4, p5 ]).then((values) => console.log(values));

//async await

async function printRaju() {
    console.log("Raju");
}

printRaju()