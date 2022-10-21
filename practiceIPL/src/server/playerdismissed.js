//Find the highest number of times one player has been dismissed by another player.
const fs = require("fs");
const content = fs.readFileSync("deliveries.json","utf8")
const deliveries = JSON.parse(content);
// console.log(deliveries);


// function numberOfTimesDismissed(deliveries) {

//     let result = {}

//     for (let i = 0; i < deliveries.length; i++) {

//         if (deliveries[i].fielder != "" && deliveries[i].player_dismissed != "") {

//             if (result[deliveries[i].player_dismissed]) {
//                 result[deliveries[i].player_dismissed]++
//             } else {

//                 result[deliveries[i].player_dismissed] = 1;


//             }
//         }
//     }
//     //console.log(result);
// }

let result = {};
for (let i =0; i < deliveries.length; i++){
    let player_dismissed = deliveries[i].player_dismissed;
    let fielder = deliveries[i].fielder;

    if (fielder != "" && player_dismissed != "") {
        if(result[player_dismissed]){
            result[player_dismissed] += 1;
        } else {
            result[player_dismissed] = 1;
        }
    }
    
}
console.log(result);

// function playerDismissed(deliveries){

// let result = {};

// for (let i=0; i< deliveries.length; i++){
//     let player_dismissed = deliveries[i].player_dismissed;
//     if (result[player_dismissed]){
//         result[player_dismissed] += 1
//     } else {
//         result[player_dismissed] = 1
//     }
//  }
//  return result;
// }
// let playerdismissed = playerDismissed(deliveries);
// console.log(playerdismissed)

// function playerDismissed(deliveries){

// let result = deliveries.reduce((acc,curr)=>{
//     if(acc[curr.player_dismissed]){
//         acc[curr.player_dismissed] += 1
//     } else {
//         acc[curr.player_dismissed] = 1
//     }
//     return acc
//  },{})
//     return result;
// }
// console.log(playerDismissed(deliveries));