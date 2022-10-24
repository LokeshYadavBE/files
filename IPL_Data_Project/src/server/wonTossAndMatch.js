
const fs = require("fs");

const matchContent = fs.readFileSync("matches.json", "utf-8");

const matches = JSON.parse(matchContent);

let result = {};

for (let i =0; i < matches.length; i++){

    let winner = matches[i].winner;
    let toss_winner = matches[i].toss_winner;

    if (winner === toss_winner){

        if(result[toss_winner]){

            result[toss_winner]+=1;
        } else {

            result[toss_winner] = 1
        }
    }
}
console.log(result);






