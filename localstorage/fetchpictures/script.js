// This code (HTML, CSS and JS files) is a refactoring of the original solution for the JSON exercise.

/** load photos via fetch and display 10 of them as images with title (as caption and as alt)
 * 
 * fetch the data and turning json to object list
 * loop through the array 10 times
 * create element img tag to display the image
 * create 2nd element for title - either h-tag or figcaption
 * we use figure as wrapper element for img and figcaption
 * we append the figure elements to the DOM, to the main
 * we add figures in unordered list instead
 */

localStorage.setItem("key-omer", "data-omer");
localStorage.clear();
const main = document.querySelector("main");

// Check if data is already downloaded.
if (localStorage.getItem("burak")) {
    displayData(JSON.parse(localStorage.getItem("burak")));
} else {
    // At the beginning, fetch gets only a promise. When the promise
    // is fullfilled (we've got the data), then we translate it to json.
    // And when the translation is completed, then we display it.
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(response => response.json())
        .then((data)=>localStorage.setItem("burak", JSON.stringify(data)))
        .then(json => displayData(json))
}



function displayData(data){
    const ul = document.createElement("ul");
    main.appendChild(ul);

    //data = data.slice(0, 10);
    data.slice(0, 10).forEach(photoObj => {
        let li = document.createElement("li");
        ul.appendChild(li);

        let figure = document.createElement("figure");
        li.appendChild(figure);

        let img = document.createElement("img");
        img.src = photoObj.url;
        img.alt = photoObj.title;
        figure.appendChild(img);

        let figcaption = document.createElement("figcaption");
        figcaption.textContent = photoObj.title;
        figure.appendChild(figcaption);
    });
}