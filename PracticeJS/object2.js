const data = [{ 
    id: 23243204,
    name: "Max",
    marks: {
        english: 52,
        maths: 26,
        science: 39
    }
},
{ 
    id: 88243204,
    name: "Trixie",
    marks: {
        english: 39,
        maths: 29,
        science: 49
    }
},{ 
    id: 78363204,
    name: "Spectre",
    marks: {
        english: 65,
        maths: 92,
        science: 79
    }
},
{ 
    id: 79363994,
    name: "Olivia",
    marks: {
        english: 75,
        maths: 75,
        science: 73
    }
},{ 
    id: 7930004,
    name: "Gerrard",
    marks: {
        english: 70,
        maths: 82,
        science: 93
    }
}]


/*
Note: Marks are given out of 100.
Marks < 33 = fail, Fail in any subject implies fail.


Q1. Generate following data structure using above data.
const result = { StudentID: Percentage, StudentID: Percentage ...}

Q2. Add additional field percentage to each object.

Q3. Group Students in terms of fail and pass.

const result = {
    fail: [{ // Student Details }, { // Student Details} ...],
    pass: [{ // Student Details}, { // Student Details} ...]
}


Q4. Add 5 Marks to each of the subjects and group them in terms of fail and pass in following manner.

const result = {
    fail : {
        studentId: {
            ...studentDetails
        },
        studentId2: {
            ...studentDetails
        }
    },

    pass: {
        studentId: {
            ...studentDetails,
        },
        studentId2: {
            ...studentDetails
        }
    }
}

Q.5 Sort data array in terms of percentage scored by each student.
Also sort the subject marks..(Show lowest subject marks for each candidate first).


*/