const fs = require("fs");
const content = fs.readFileSync("deliveries.json","utf8")
const deliveries = JSON.parse(content);

// Find the bowler with the best economy in super overs

// function bestInSuperOver(deliveries) {
//     let alldata = {}
//     for (let i = 0; i < deliveries.length; i++) {
//         if (deliveries[i].is_super_over != 0) {
//             if (alldata[deliveries[i].bowler]) {
//                 alldata[deliveries[i].bowler].balls++
//                 alldata[deliveries[i].bowler].runs = parseInt(deliveries[i].total_runs)

//             } else {
//                 let obj = {}
//                 obj.balls = 1
//                 obj.runs = parseInt(deliveries[i].total_runs)
//                 alldata[deliveries[i].bowler] = obj
//             }
//         }
//     }
//     //console.log(alldata);
//     let newobj = {}
//     for (key in alldata) {
//         let c = Math.floor([alldata[key].runs] / [alldata[key].balls / 6] * 10) / 10
//         newobj[key] = c
//     }
//     //console.log(newobj)
//     let d = Object.entries(newobj).sort((a, b) => a[1] - b[1])
//     return d[0]

// }
// console.log(bestInSuperOver(deliveries));

// function bestInSuperOver(deliveries) {
//     let alldata = {}
//     for (let i = 0; i < deliveries.length; i++) {
//         if (deliveries[i].is_super_over != 0) {
//             if (alldata[deliveries[i].bowler]) {
//                 alldata[deliveries[i].bowler].balls++
//                 alldata[deliveries[i].bowler].runs = parseInt(deliveries[i].total_runs)

//             } else {
//                 let obj = {}
//                 obj.balls = 1
//                 obj.runs = parseInt(deliveries[i].total_runs)
//                 alldata[deliveries[i].bowler] = obj
//             }
//         }
//     }
//     //console.log(alldata);
//     let newobj = {}
//     for (key in alldata) {
//         let c = Math.floor([alldata[key].runs] / [alldata[key].balls / 6] * 10) / 10
//         newobj[key] = c
//     }
//     //console.log(newobj)
//     let d = Object.entries(newobj).sort((a, b) => a[1] - b[1])
//     return d[0];

// }

// console.log(bestInSuperOver(deliveries));


// function bestEconomyInSuperOvers(deliveries) {
//     let dataObj = {}
//     for(let i=0;i<deliveries.length;i++){
//        if(deliveries[i].is_super_over != 0){
//         if(dataObj[deliveries[i].bowler]){
//            dataObj[deliveries[i].bowler].ball += 1 
//            dataObj[deliveries[i].bowler].runs += parseInt(deliveries[i].total_runs)
//         }else{
//           let obj = {}
//           obj.ball = 1 
//           obj.runs = parseInt(deliveries[i].total_runs)
//           dataObj[deliveries[i].bowler] = obj
//         }
//        }
//     }
    
//     let b = {}
//     for (key in dataObj) {
//       let total = Math.floor([dataObj[key].runs] / [dataObj[key].ball / 6] * 10) / 10
//       b[key] = total
      
      
//     }
//     let a=Object.entries(b).sort((a,b)=> a[1]-b[1])
//   return a[0]
//   }

//   console.log(bestEconomyInSuperOvers(deliveries));


let result = {};

for (let i=0; i < deliveries.length; i++){
    let is_super_over = deliveries[i].is_super_over;
    let bowler = deliveries[i].bowler;
    let total_runs = deliveries[i].total_runs;

    if (is_super_over !=0) {
        if (result[bowler]) {
            result[bowler].balls += 1
            result[bowler].runs += parseInt(total_runs)
        } else {
            let data = {};
            data.balls = 1
            data.runs = parseInt(total_runs)
            result[bowler] = data

        }
    }
}

let newData = {}

for (key in result){

    result[key] = (result[key].runs / (result[key].balls/6))
    newData[key] = result[key]
}

let output = Object.entries(newData).sort((a,b) => a[1]-b[1]);

console.log(output[0]);


// let res = deliveries.reduce((acc,curr,data)=>{
//     if(curr.is_super_over) {
//         if(acc[curr.bowler]){
//             acc[curr.bowler].balls += 1
//             acc[curr.bowler].runs += parseInt(curr.total_runs)
//         } else {
//             data = {}
//             data.balls = 1
//             data.runs = parseInt(curr.total_runs)
//             acc[curr.bowler] = data
//         }
//     }
//     return acc
// },{});

// let newData = {}

// for (key in res){

//     res[key] = (res[key].runs / (res[key].balls/6))
//     newData[key] = res[key]
// }

// let output = Object.entries(newData).sort((a,b) => a[1]-b[1]);

// console.log(output[0]);
