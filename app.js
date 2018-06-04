const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())

const instructors = [
    {
        id: 1,
        fullName: "Kyle Coberly",
        title: "Faculty Director",
        numberOfDogs: 0
    }, {
        id: 2,
        fullName: "Danny Fritz",
        title: "Lead Instructor",
        numberOfDogs: 0
    }, {
        id: 3,
        fullName: "CJ Reynolds",
        title: "Lead Instructor",
        numberOfDogs: 0
    }, {
        id: 4,
        fullName: "Brooks Patton",
        title: "Lead Instructor",
        numberOfDogs: 0
    }, {
        id: 5,
        fullName: "Roberto Ortega",
        title: "Lead Instructor",
        numberOfDogs: 1
    }, {
        id: 6,
        fullName: "Chad Drummond",
        title: "Instructor",
        numberOfDogs: 0
    }, {
        id: 7,
        fullName: "Kim Schlesinger",
        title: "Instructor",
        numberOfDogs: 0
    }, {
        id: 8,
        fullName: "Peter Ostiguy",
        title: "Associate Instructor",
        numberOfDogs: 1
    }, {
        id: 9,
        fullName: "Cass Torske",
        title: "Resident",
        numberOfDogs: 1
    }, {
        id: 10,
        fullName: "Matt Winzer",
        title: "Resident",
        numberOfDogs: 2
    }, {
        id: 11,
        fullName: "Aaron Goodman",
        title: "Resident",
        numberOfDogs: 0
    }, {
        id: 12,
        fullName: "Michelle Bergquist",
        title: "Resident",
        numberOfDogs: 1
    }, 
]

function findById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

app.get("/", (request, response) => {
    response.json({ data: instructors })
})

app.get("/:id", (request, response) => {
    var instructorId = findById(instructors, request.params.id);
    if (!instructorId) {
        response.status = 404
        response.json({
            error: {
                message: "No record found!"
            }
        })
    }

    response.json({ data: instructorId })
})

app.listen(port)