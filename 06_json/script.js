/* load photos and display title as caption and alt.
 * fetch the data and loop through the data 10 times.
 * create Element img tag to display the image.
 * create 2nd element for the title - either h-tag or figcaption.
 * we use figure as wrapper element for img and figcaption.
 * append the figure to the DOM, to the main,
 * or to an unordered list is also possible.
 */

fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
  .then(response => response.json())
    .then(data => displayData(data));

const main = document.querySelector("main");
if (main) { // !debug
    console.log("main is truthy.");
} else {
    console.log("main is falsy.");
}
// let img = document.createElement("img");

function displayData(data) {
    data = data.slice(0, 10);
    data.forEach(photoObj => {
//        console.log(photoObj);
        let img = document.createElement("img");
        img.src = photoObj.url;
        img.alt = photoObj.title;
        console.log(`${img.alt} - ${img.src}`);
        str = "main "+ (typeof (main) ? " is defined." : "is not defined.");
        if (main) { // !debug
            console.log("main is truthy.");
        } else {
            console.log("main is falsy.");
        }
        main.appendChild(img);
    } )
}