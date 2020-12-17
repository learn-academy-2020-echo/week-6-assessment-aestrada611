// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."



//the function will take in an array of objects and returns a sentence about each person with their names capitlaized
//need to access the key name to extract the values  and extract occupation values in order to print job.
//will have to either split string and capitlize the firstName of each of the two items in the array by mapping through it


const firstName = (array) =>{
//I need to be able to access the values of name within the array
console.log(array);

  let name = array.map(value =>
value.name)


//now i have to capitalize the first letter of all names within the array of strings.
// name.map(value => value.toUpperCase)
// might have to split it and capitalize first letter!
console.log(name);



  let nameSplit = name.map(value => value.split(" "))

    //doign this has split them into sperate arrays within a larger array!! Perfect just what i wanted but i originally thought it was gonna return it as one big array but this makes the joining part much easier!
console.log(nameSplit);


//let nameCapital = nameSplit.charAt(0).toUpperCase

//console log is biggest help ever. i relized that nameSplit was an array of arrays so i would have to map in again in order to be able to use charAT for the string


//will make the varialbe below the frirst letter of each string.
// let  nameCapital = nameSplit.map(value => value.map(value => value.charAt(0)))

let  firstCapital = nameSplit.map(value => value.map(value => value.charAt(0).toUpperCase() + value.slice(1, value.length)))

//was trying to do them as two different variables and then combine them at the end but saw it was much better to use the plus sign here and combine the strings using string concatenation


// let restOfName = nameSplit.map(value => value.map(value => value.slice(1, value.length)))
// let combinedName = firstCapital + restOfName

//tried multiple ways to join it using an array but i found out if i mapped and then joined it would avoid the commas and keep the data type as an array or else it would be a string!!
let joinName = firstCapital.map((value,index) => value.join(" "))
let occupation = array.map((value,index) => value.occupation)


//return `${occupation}`


//might be a way to create a new statemnt through iteration or just have it filled out.
//I have to use the spread operator!!

//now i need to combine them some way using a for loop maybe
console.log(...joinName);

let finalArray = []

 for(let i = 0; i < array.length; i++ ) {
    finalArray.push(`"${joinName[i]} is ${occupation[i]}!" `)
   // array.forEach(function())
}









//I know there will be string interpoltation at the very end return


// return `${array.occupation}`


// console.log(restOfName);
// console.log(combinedName);
console.log(joinName);
console.log(occupation);

return finalArray.join("")
}


console.log(firstName(people))






// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//most likely will have nested if statement in which the decsion tree will continue to execute code if it is an number and just for that not strings


//create a funtion that takes in array and reuturns an array with only numbers divided by three
//most likely will be a filter method to get a subset of the original array

const numberFilter = (array) => {
  let filter = array.filter(value => {
    return typeof value == "number"
    })
    //second one will be a map because i need the same number in the subset
    let secondFilter = filter.map(value => {
      return value % 3
   // if (typeof value == string ){
   //   return value
   // } else {
   //
   // }
  })
  return secondFilter
}
console.log(numberFilter(testingArray1));
console.log(numberFilter(testingArray2));


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]



//function that takes in two arrays as arguments
//output = to arrray with no dupiclates
//will most likely use a filter method and filter through for uniquness of an item.


//
// //Just relaized that all this code is only taking in one array and i need to compare two arrays
//  const unique = (array) => {
//    let arrayFilter = array.filter((value, index, array) => {
//      return array.indexOf(value) === index
//    })
//    return arrayFilter
//  }

const unique = (array1, array2) => {
 //  let map1 = array1.map(value => value)
 // let map2 = array2.map(value => value)
 let newArray = array1.concat(array2)

  // console.log(map1);
  console.log(newArray);


//have to know that third argumnet is the array refrencing itself in order to get the first instance
//go through array and only return the frist instance of the index for the values so there are no dupicates
//also need to do more reserach to know exacltey why this works. Ive used it before but want more understanding!
let arrayFilter = newArray.filter((value, index, array) => {
  return array.indexOf(value) === index

})



// i need to do more research on why this one works
// let arrayFilter = [ ...new Set(newArray)]




return arrayFilter
}


 console.log(unique(testingArray3, testingArray4));
