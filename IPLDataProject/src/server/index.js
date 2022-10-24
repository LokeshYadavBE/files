const fs = require("fs");
const csv = require("csvtojson");

const matchesFilePath = '/home/lokesh/practiceIPL/src/data/matches.csv';
const deliveriesFilePath = "/home/lokesh/practiceIPL/src/data/deliveries.csv";

csv()
.fromFile(matchesFilePath)
.then((matches)=>
{
fs.writeFileSync("matches.json", JSON.stringify(matches), "utf8")
});

csv()
.fromFile(deliveriesFilePath)
.then((deliveries)=>
{fs.writeFileSync("deliveries.json", JSON.stringify(deliveries), "utf8")});



// Q1.Number of matches played per year for all the years in IPL.

// const content = fs.readFileSync("matches.json","utf8");

// const matches = JSON.parse(content);

// let res = {};

// for (let i =0; i < matches.length; i++) {

//     let season = matches[i].season;
//     if (res[season]){
//         res[season] += 1;
//     } else {
//         res[season] = 1;
//     }
// };
// console.log(res);

// let result1 = matches.reduce((res,index)=>{
//     if (res[index.season]){
//         res[index.season]+=1
//     } else {
//         res[index.season]=1
//     }
//     return res
// },{})
// console.log(result1);


// let result2 = {};

// matches.map(res=>{
//     if (result2[res.season]){
//         result2[res.season]+=1
//     } else {
//         result2[res.season]=1
//     }
// })
// console.log(result2);



