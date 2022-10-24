/*

Q1. Convert the following object into an array.
 { Max: 32, Asta: 14, Yuno: 16 }
 to
 [{ name: "Max", age: 32}, { name: "Asta", age 14}, { name: "Yuno", age: 16}];

 Use both reduce and map.

 Q2.  Convert the following array into an object.
  [{ name: "Max", age: 32}, { name: "Asta", age 14}, { name: "Yuno", age: 16}];
  to 
   { Max: 32, Asta: 14, Yuno: 16 }

   Use reduce.


Q3. Add a new property to each element of the following array.
PropertyName -      [adult: true / false  ( age > 18 ? true : false)]

 const arr = [{ name: "Max", age: 32}, { name: "Asta", age 14}, { name: "Yuno", age: 16}];

    use both reduce and map.

Q4. const items = [
    { qty: 23, name: "Microphone", price: "34USD" }, 
    { qty: 4, name: "HeadSet", price: "14USD" }
    { qty: 2, name: "Camera", price: "48USD" }
]
A.  Use above `items` array to generate the below array
    Use reduce and map.
    const result = [
        { name: "Microphone", price: "34USD" }, 
        { name: "HeadSet", price: "14AUD" }
        { name: "Camera", price: "48EUR" }
    ]

B. Use above `items` array to generate the following object.
    const result = {
        Microphone: {
            price: {
                amount: 34,
                currency: "USD"
            }        
        },
        HeadSet: {
            price: {
                amount: 14
                currency: "AUD"
            }
        },
        Camera: {
            price: {
                amount: 48,
                currency: "EUR"
            }
        }
    }

*/


// Q1. Convert the following object into an array.
//  { Max: 32, Asta: 14, Yuno: 16 }
//  to
//  [{ name: "Max", age: 32}, { name: "Asta", age 14}, { name: "Yuno", age: 16}];


// let obj = { Max: 32, Asta: 14, Yuno: 16 };

// let result = [
//   { name: "Max", age: 32},
//   { name: "Asta", age: 14 },
//   { name: "Yuno", age: 16 },
// ];
// let resObj = {}
// for (let key = 0; key < result.length; key++) {
//   resObj[result[key]["name"]] = result[key]['age']
// }

// console.log(resObj)
