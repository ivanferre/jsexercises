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

## Online Resources

- [HTTP Status messages](https://www.w3schools.com/tags/ref_httpmessages.asp)
- [JSON placeholders](https://jsonplaceholder.typicode.com/)
- [JSON View Firefox extension](https://addons.mozilla.org/de/firefox/addon/jsonview/)
- [Using fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Fetch API and promises](https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444)
- [All you need to know about Promise.all](https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/)
- [Async await making icecream](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
- [Async await (ES8))](https://javascript.info/async-await)
- [Why Async await (ES8)(?))](https://nodejs.dev/en/learn/javascript-asynchronous-programming-and-callbacks/)
- [Web Workers API)](https://www.w3schools.com/js/js_api_web_workers.asp)
- [(Web workers vs Promises)](https://www.youtube.com/watch?v=DE2F_WTjWLs)
