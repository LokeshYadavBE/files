const fs = require("fs");

const matchesContent = fs.readFileSync("matches.json", "utf-8");

const matches = JSON.parse(matchesContent);

const deliveriesContent = fs.readFileSync("deliveries.json", "utf-8");

const deliveries = JSON.parse(deliveriesContent);

let result = {};

    let runsOfBowlers = {};
  
    let DeliveriesOfBowler = {};

    let ID = 0;

    for(let index = 0; index < matches.length; index++){

        let season = matches[index].season;

        if(season === "2015"){
                ID = matches[index].id
        }
        for(let index2 = 0; index2 < deliveries.length; index2++){

            let match_id = deliveries[index2].match_id;

            let bowler = deliveries[index2].bowler;

            let total_runs = deliveries[index2].total_runs


            if(match_id === ID){

                if(runsOfBowlers[bowler]){

                    runsOfBowlers[bowler] += parseInt(total_runs);

                } else {

                    runsOfBowlers[bowler] = parseInt(total_runs);
                }


                if (DeliveriesOfBowler[bowler]) {

                    

                    DeliveriesOfBowler[bowler]+=1;

                } else {

                    DeliveriesOfBowler[bowler]=1;

                }
            }
        }
    }

    for (key in runsOfBowlers){

        runsOfBowlers[key] = (runsOfBowlers[key]*6/DeliveriesOfBowler[key]).toFixed(2);
    }
  
    result = Object.entries(runsOfBowlers).sort((a,b) => a[1]-b[1]).slice(0,10);
  
    console.log(result);











