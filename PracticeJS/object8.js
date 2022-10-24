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




//Q1

    for (let i = 0; i < data.length; i++){

        let newData = { [data[i]['place']]:[data[i]["location"]]
    }

    console.log(newData);

    }



//Q2

    let newData2 = data.sort(function(a,b){

        if (a.temperature < b.temperature){

            return -1;

        } if (a.temperature > b.temperature){

            return 1;
        }
    })

    console.log(newData2)


//Q3

    let result = [];

    for (let i = 0; i < data.length; i++){

        let location1={};

        location1.lat=data[i].location.lat;

        location1.lng=data[i].location.lng;

        let place1 ={};

        place1.location = location1;

        place1.temperature=data[i].temperature;

        let country1={};

        country1[data[i].place]=place1;

        let result1={};

        result1[data[i].country]=country1;

        result[i]=result1;

        console.log(result1);
    };



//Q4

    data[2].temperature = "49 Degree Celsius";

    console.log(data);



//Q5

    Object.assign(data[3],{place: "Bangalore",

    country: "India",

    location: {lat: '84',lng: '47'},

    temperature: '29 Degree Celsius'} )

    console.log(data)



//Q6

    delete data[2]

    console.log(data)



//Q7

    let swapingElement = data[1];

    data[1] = data[3]

    data[3] = swapingElement

    console.log(data);






    























