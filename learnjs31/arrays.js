
// arr = []  //JS  - emptybArray with out element s

// //arr = {} // JAVA 


// arr1 = [2,5,6,7,8,9,3,5,7,8,9,3,45,46]

// arr2 = ["Raju", 34, true , null , undefined].sort()

// console.log(arr2)

// //.length

// //elements index always starts from 0

// console.log(arr1.length  )


// console.log(arr1[5])


// console.log(arr2[0])

// console.log(arr1[arr1.length-2])

// //join 2 arrays 

// arr3 = arr1.concat(arr2)

// console.log(arr3)

// arr4 = ["raju", 'bharath', 'Sumanth', 'padma', 'Navya', 'lakshmi']

// //.sort()

// arr5 = arr4.sort()

// console.log(arr5)

// arr6 = [3,8,9,2,5,1].sort()

// console.log(arr6)

// ///reverse()

// arr7 =  [3,8,9,2,5,1]

// arr8 = arr7.reverse()

// console.log(arr8)

// //split() connvert string to array 

// str = "manjunath is from bangalore"

// arr9 =str.split(" ")

// console.log(arr9)

// //join() converts array to string 

// arr10 = [ 'manjunath', 'is', 'from', 'bangalore' ]

// str2 = arr10.join(" ")

// console.log(str2)

// str = "Javascript"

// revstr = str.split("").reverse().join("")

// console.log(revstr)

// prices = [ '$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99' ]

// let sortedAsc = prices.slice().sort((a, b) => parseFloat(a.slice(1)) - parseFloat(b.slice(1)));
// console.log("Ascending:", sortedAsc);


// // Push - to add elements at end of the Array

// //Unshift() - to add elements at beginning 

// ar1 = ["wakup", "eat", "sleep"]

// ar1.push("read", "Exersize")

// ar1.unshift("Raju", "bharath")

// console.log(ar1)

// //pop will remove the last element

// // shift will remobve the first element 

// ar1.pop()

// ar1.pop()

// ar1.pop()

// ar1.shift()


// console.log(ar1)
// ar2 = ["raju", "bharth", "padma"]

// ar2[2] = "Manju"

// console.log(ar2)

// console.log(ar2[5])

// //includes 


// ar3 = [ 'bharath', 'wakup', 'eat' ]

// console.log(ar3.includes("eat"))

// //indexOf

// console.log(ar3.indexOf("wakup"))



// array.forEach(element => {

// });


jobtitles = ["SDET1", "Account Assistant", "Content writer"]


//  jobtitles.forEach(element => {

//     console.log("loop starts")

//     console.log(element)

//       console.log("loop Ends")
//  });


for (let title of jobtitles) {

    console.log("loop starts")

    console.log(title)

    console.log("loop Ends")
}

//slice()
//splice()
//map()
//reduce()
//filter()

//arr = [1,3,4,5,6,7,8,9,22,34,55,66,77]

d= Date.now()