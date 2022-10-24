const fs = require("fs");

const content = fs.readFileSync("/home/lokesh/practiceIPL/src/server/matches.json", "utf8");
const matches = JSON.parse(content);



let result = {};
for (let i=0; i<matches.length; i++) {
    let season = matches[i].season;
    if (result[season]) {
        result[season] += 1
    } else {
        result[season] = 1
    }
} console.log(result);



// let result2 = matches.reduce((acc,curr)=>{
//     if(acc[curr.season]){
//         acc[curr.season]+=1
//     } else {
//         acc[curr.season]=1
//     }
//     return acc
// },{})
// console.log(result2);



// let result3 = {};
// matches.map(element=>{
//     if (result3[element.season]){
//         result3[element.season]+=1
//     } else{
//         result3[element.season]=1
//     }
// }) 
// console.log(result3);