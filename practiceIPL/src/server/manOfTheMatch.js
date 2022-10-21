//Find a player who has won the highest number of Player of the Match awards for each season.

const fs = require("fs");

const matchesContent = fs.readFileSync("matches.json", "utf-8");

const matches = JSON.parse(matchesContent);

result = {};

for (let i=0; i < matches.length; i++) {

    let season = matches[i].season;
    let player_of_match = matches[i].player_of_match;

    if (result[season]){
        if (result[season][player_of_match]){
            result[season][player_of_match] += 1
        } else {
            result[season][player_of_match] = 1
        }
    } else {
        result[season] = {};
        result[season][player_of_match] = 1
    }

}
console.log(result);

// let result = matches.reduce((acc,curr)=>{
//     if(acc[curr.season]){
//         if(acc[curr.season][curr.player_of_match]){
//             acc[curr.season][curr.player_of_match] += 1
//         } else {
//             acc[curr.season][curr.player_of_match] = 1
//         }

//     } else{
//         acc[curr.season] = {};
//         acc[curr.season][curr.player_of_match] = 1
//     }
//     return acc
// },{})

// console.log(result);