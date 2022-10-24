const data = {
    person_info_1: {
        profile: {
            fullName: "Javier Hernandez",
            nationality: {
                country: "Mexico",
            },
            tel: 904902394
        },
        current_address: {
            current_city: {
                value: "Bangalore",
                zip: '399993'
            }
        }
    },

    person_info_2: {
        profile: {
            fullName: "Emily Spade",
            nationality: {
                country: "Norway",
            },
            tel: 309320239
        },
        current_address: {
            current_city: {
                value: "Oslo",
                zip: '239292'
            }
        }
    },
    person_info_3: {
        profile: {
            fullName: "John Cigan",
            nationality: {
                country: "Turkey",
            },
            tel: 932483988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    },
    person_info_4: {
        profile: {
            fullName: "Marsh Hobbs",
            nationality: {
                country: "USA",
            },
            tel: 32043988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    }


}


/*
 Q1. Use reduce to generate following data.. 

 const result = [{
    profile: {
        fullName: "Javier Hernandez",
        nationality: {
            country: "Mexico",
        },
        tel: 904902394
    },
    current_address: {
        current_city: {
            value: "Bangalore",
            zip: '399993'
        }
    }
},
{
    profile: {
        fullName: "Emily Spade",
        nationality: {
            country: "Norway",
        },
        tel: 309320239
    },
    current_address: {
        current_city: {
            value: "Oslo",
            zip: '239292'
        }
    }
},
    ... // Rest other objects
]



Q2.Get data in following format using reduce

[[fullName, country], [fullName, country] ... for all objects]


Q3.Restructure data and bring tel 'key' outside person .

const result = {
    person_info_1: {
        profile: {
            fullName: "Javier Hernandez",
            nationality: {
                country: "Mexico",
            },
        },
        tel: 904902394,          // Moved outside
        current_address: {
            current_city: {
                value: "Bangalore",
                zip: '399993'
            }
        }
    },
    ... rest other objects
    
}

*/