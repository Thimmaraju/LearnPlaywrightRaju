

// // objectname = {

// //     key : "vjbfv"
// // }


// const credentials = {

//     username: "Admin",
//     password: "admin123",

//     data: {

//         fathername: "Abc",
//         mothername: "xyz"
//     }
// }

// // console.log(credentials.username)

// // console.log(credentials.password)

// // console.log(credentials.data.mothername)

// console.log(credentials['password'])

// console.log(credentials['data']['mothername'])

// credentials['username'] = "Raju"

// console.log(credentials.username)

// credentials['firstname'] = "Raju"

// console.log(credentials.firstname)

// delete credentials['password']

// console.log(credentials.password)



const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave"
}

 menuitems['menu4'] = "recruitment"

 for(let item in menuitems){

    console.log("Loops starts" )

    console.log(item +" :" + menuitems[item])

    console.log("Loop ends ")
}



