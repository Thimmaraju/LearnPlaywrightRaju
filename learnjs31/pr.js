
// const p = new Promise((resolve, reject) => {
//     let x =7;
  
//     if (x === 2) {
//       resolve(

//            "Raju"
//       );
//     } else {
//       reject("Fail");
//     }
//   });

  //console.log(p)


  //Promise { 'Raju' }  

 // Promise is object which contain some data 

//  .then  - if its resolved Promise we need used then 
//  .catch - if its reject Promise we need used catch 

// p.then((message) => console.log(message) )

// p.catch((message) => console.log(message))

// 3 states 

// Pending - 

// resolved 

// rejected 

const x = Promise.resolve("")

x.then((data) => {console.log(data)} )
 .catch((message) => console.log(message))

//callbacks

//  function step1(value, callback) {
//     callback(value + 10, false); // The callback is called with the result and error flag
//   }
  
//   step1(5, function(result, value) {
//     if (value) {
//       console.log("An error occurred");        
//     } else {
//       console.log("Result: " + result); // If no error, print the result
//     }
//   });

 // Result: 15

function step1(value) {
    return new Promise((resolve, reject) => {
      // Simulating the callback behavior
      resolve(value + 10); // Resolving the promise with the result
    });
  }
  
  step1(5)
    .then(result => {
      console.log("Result: " + result); // If promise is resolved, print the result //15
    })
    .catch(error => {
      console.log("An error occurred"); // If promise is rejected, handle error
    });