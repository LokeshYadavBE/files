// let obj = { Max: 32, Asta: 14, Yuno: 16 };

// let result = [
//   { name: "Max", age: 32},
//   { name: "Asta", age: 14 },
//   { name: "Yuno", age: 16 },
// ];
// let resObj = {}
// for (let key = 0; key < result.length; key++) {
//   resObj[result[key]["name"]] = result[key]['age']
// }

// console.log(resObj)

// // console.log(result[0]["age"])
// // //console.log(result[1])



const data = [
  { 
      place: "Melbourne", 
      country: "Australia", 
      location: {
          lat: '99',
          lng: '88'
      },
      temperature: '38 Degree Celsius'
  },{ 
      place: "New Delhi", 
      country: "India", 
      location: {
          lat: '84',
          lng: '44'
      },
      temperature: '42 Degree Celsius'
  },{ 
      place: "Pretoria", 
      country: "SouthAfrica", 
      location: {
          lat: '35',
          lng: '24'
      },
      temperature: '39 Degree Celsius'
  },{ 
      place: "Mexico City", 
      country: "Mexico", 
      location: {
          lat: '34',
          lng: '38'
      },
      temperature: '43 Degree Celsius'
  },
  { 
      place: "London", 
      country: "England", 
      location: {
          lat: '57',
          lng: '34'
      },
      temperature: '26 Degree Celsius'
  }
]

// Q3.Rearrange data in the following format
// [{ country:
// { place: 
//   {location: 
//     {lat, lng }
//     temperature }}}]


// const set = require('lodash.set');

// const [country, place, location] = fs.split('.');

// set (data, [country, place, location],temperature);

// console.log(data);

// const set = require('lodash.set');

// const p = {};
// const [type, lang, name] = f.split('.');
// set(p, [lang, type, name], '');
// { lang: { 'type': { 'name': '' }}}

// console.log(p);
// let obj = {}

// _.set(obj, 'country.place.location.{lat, lng }','temperature')

// console.log(obj);

let result = {};

for (let i =0; i < data.length; i++){
    let place = data[i].place;
    let location = data[i].location
    let lat = data[i].location.lat;
    let lng = data[i].location.lng;

    
    if(!result[data[i].country]){
        result[data[i].country] = []
    }
    result[data[i].country].push({place,location:{lat,lng}},data[i].temperature)
}
console.log(result);


