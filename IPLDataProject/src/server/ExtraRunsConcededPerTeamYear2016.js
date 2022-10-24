const fs = require("fs");
const matchesContent = fs.readFileSync("matches.json", "utf8");
const matches = JSON.parse(matchesContent);

const deliveriesContent = fs.readFileSync("deliveries.json", "utf8");
const deliveries = JSON.parse(deliveriesContent);

let result = {};
for (let i=0; i< matches.length; i++){
    let season = matches[i].season;
    let ID = matches[i].id;
    if (season === '2016'){

        for (let j=0; j < deliveries.length; j++){
            let match_id = deliveries[j].match_id;
            let bowling_team = deliveries[j].bowling_team;
            let extra_runs = deliveries[j].extra_runs;

            if(match_id === ID){
                if(result[bowling_team]){
                    result[bowling_team]+= parseInt(extra_runs);
                } else{
                    result[bowling_team]=parseInt(extra_runs);
                }
            }
        }
    }
}
console.log(result);

// let result = matches.reduce((acc, curr) => {
//   if (curr.season === "2016") {
//     deliveries.forEach((eachItem) => {
//       if (curr.id === eachItem.match_id) {
//         if (acc[eachItem.bowling_team]) {
//           acc[eachItem.bowling_team] += parseInt(eachItem.extra_runs);
//         }else {
//           acc[eachItem.bowling_team] = parseInt(eachItem.extra_runs);
//         }
//       }
//     });
//   }
//   return acc;
// }, {});
// console.log(result);

// let result = matches.reduce((acc,curr)=>{

//     if (curr.season === '2016') {

//         deliveries.forEach(each=>{

//             if (curr.id === each.match_id) {

//                 if (acc[each.bowling_team]) {

//                     acc[each.bowling_team] += parseInt(each.extra_runs);

//                 } else {
//                     acc[each.bowling_team] = parseInt(each.extra_runs)
//                 }
//             }
//         })
//     }

//     return acc;

// },{})

// console.log(result);

