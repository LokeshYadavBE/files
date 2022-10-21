//Find the strike rate of a batsman for each season.
//Strike Rate = (Runs Scored / Balls faced) * 100


/* matches
[
  {
    id: '1',
    season: '2017',
    city: 'Hyderabad',
    date: '2017-04-05',
    team1: 'Sunrisers Hyderabad',
    team2: 'Royal Challengers Bangalore',
    toss_winner: 'Royal Challengers Bangalore',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Sunrisers Hyderabad',
    win_by_runs: '35',
    win_by_wickets: '0',
    player_of_match: 'Yuvraj Singh',
    venue: 'Rajiv Gandhi International Stadium, Uppal',
    umpire1: 'AY Dandekar',
    umpire2: 'NJ Llong',
    umpire3: ''
  }
] */


/* deliveries
[
  {
    match_id: '1',
    inning: '1',
    batting_team: 'Sunrisers Hyderabad',
    bowling_team: 'Royal Challengers Bangalore',
    over: '1',
    ball: '1',
    batsman: 'DA Warner',
    non_striker: 'S Dhawan',
    bowler: 'TS Mills',
    is_super_over: '0',
    wide_runs: '0',
    bye_runs: '0',
    legbye_runs: '0',
    noball_runs: '0',
    penalty_runs: '0',
    batsman_runs: '0',
    extra_runs: '0',
    total_runs: '0',
    player_dismissed: '',
    dismissal_kind: '',
    fielder: ''
  }
] */

/* from deliveries batsman
batsman runs
balls*/

/* from matches season*/

const fs = require("fs");

const matchContent = fs.readFileSync("matches.json", "utf-8");

const matches = JSON.parse(matchContent);

//console.log(matches.slice(0,1));

const deliveriesContent = fs.readFileSync("deliveries.json", "utf-8");
const deliveries = JSON.parse(deliveriesContent);
//console.log(deliveries.slice(0,1));

// let result = {};

// let runs = {};

// let ballsFaced = {};

// for (let i =0; i< matches.length; i++){
//     let season = matches[i].season;
//     if (result[season]){

//         for (let j=0; i < deliveries.length; j++){
//             let batsman_runs = deliveries[j].batsman_runs;
//             let balls = deliveries[j].balls;

//             if(runs[batsman_runs]){
//                 runs[batsman_runs] += 1
                
//             }else {
//                 runs[batsman_runs]=1
//             }

//             if(ballsFaced[balls]){
//                 ballsFaced[balls] += 1
//             } else {
//                 ballsFaced[balls] = 1
//             }
//         }
//     } else {
//         result[season] = {};
//         result[season] = 1
//     }

// }
// console.log(result);



// Javascript program to calculate strike
// rate of a batsman


// function strikerate(bowls, runs)
// {
// 	let z;
// 	z = (runs / bowls) * 100;
// 	return z.toFixed(3);
// }

// console.log(strikerate(300, 200));




const getDetailsOfEachMatch = (id, seasonData) => {
    deliveries.reduce((result, eachValue) => {
        const { match_id, batsman, wide_runs, bye_runs, legbye_runs, batsman_runs } = eachValue
        if (match_id === id && wide_runs === "0" && bye_runs === "0" && legbye_runs === "0") {
            if (result[batsman]) {
                result[batsman]["runs"] += parseInt(batsman_runs)
                result[batsman]["ballsFaced"] += 1
            } else {
                result[batsman] = { runs: parseInt(batsman_runs), ballsFaced: 1 }
            }
        }
        return result
    }, seasonData)
    return seasonData
}

const batsmanDetailsSeasonWise = matches.reduce((result, eachValue) => {
    const { season, id } = eachValue
    if (result[season]) {
        let seasonData = result[season]
        result[season] = getDetailsOfEachMatch(id, seasonData)

    } else {

        let output = getDetailsOfEachMatch(id, {})
        result[season] = output
    }
    return result
}, {})

const getStikeRateOfEveryPlayer = seasonwiseData => {
    return Object.keys(seasonwiseData).reduce((result, currentValue) => {
        const { runs, ballsFaced } = seasonwiseData[currentValue]
        result[currentValue] = { strikeRate: (runs / ballsFaced * 100).toFixed(2) }
        return result
    }, {})
}

const strikeRateofBatsmenEachSeason = Object.keys(batsmanDetailsSeasonWise).reduce((result, currentValue) => {
    const seasonwiseData = batsmanDetailsSeasonWise[currentValue]
    result[currentValue] = getStikeRateOfEveryPlayer(seasonwiseData)
    return result
}, {})

console.log(strikeRateofBatsmenEachSeason);










