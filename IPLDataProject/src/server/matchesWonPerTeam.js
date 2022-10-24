//Number of matches won per team per year in IPL.
const fs = require("fs");
const content = fs.readFileSync("matches.json", "utf8");
const matches = JSON.parse(content);

let result = {};

for (let i =0; i < matches.length; i++){
    let season = matches[i].season;
    let winner = matches[i].winner;
    if (result[season]){
        if (result[season][winner]){
            result[season][winner]+=1
        } else {
            result[season][winner]=1
        }
    } else {
        result[season] = {};
        result[season][winner] = 1
    }
}
console.log(result);

// result2 = matches.reduce((acc,curr)=>{
//     if (acc[curr.season]){
//         if (acc[curr.season][curr.winner]){
//             acc[curr.season][curr.winner]+=1
//         } else {
//             acc[curr.season][curr.winner]=1
//         }
//     } else {
//         acc[curr.season]={}
//         acc[curr.season][curr.winner] = 1
//     }
//     return acc
// },{});
// console.log(result2);


// result2 = {};

// matches.map(element=>{
//     if(result2[element.season]){
//         if(result2[element.season][element.winner]){
//             result2[element.season][element.winner]+=1;
//         } else {
//             result2[element.season][element.winner]=1;
//         }
//     } else {
//         result2[element.season]={};
//         result2[element.season][element.winner]=1;
//     }
// })
// console.log(result2)



