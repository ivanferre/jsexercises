# JSON notes

XML is not used anymore.

## Object definition

    const student = {
        first_name: "Oana",
        age: 22,
        favSubject: "JavaScript"
    }
    > student.first_name
    'Oana'

## JSON Data definition

    // data.js
    let json = '{
        "first_name": "Oana",
        "age": "22",
        "favSubject": "JavaScript"
    }';
    let jsonTicks = `{
        "first_name": "Oana",
        "age": "22",
        "favSubject": "JavaScript"
    }`;
    > json
    '{"fist_name": "Oana","age": "22","favSubject": "JavaScript"}
    > json.first_name
    undefined

## Create JSON Object

    const jsonObj = JSON.parse(json); // turns JSON into a JS object
    > jsonObj.age
    '22'
    > jsonObj.favSubject = 'CSS'
    'CSS'
    > jsonObj
    {first_name: 'Oana', age:'22',favSubject:'CSS'}
    > jsonObj.stringify // turns a JS object into JSON.
    "{...}"

    fetch("https://jsonplaceholder.typicode.com/photos")

    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json)

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => console.log(data))

    // returns only the photo with that id -- see documentation
    fetch("https://jsonplaceholder.typicode.com/photos/4256")
    .then(response => response.json())
    .then(data => console.log(data))
