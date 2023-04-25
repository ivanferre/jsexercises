// @param strNumber string that represents a number, maybe containing dots, dashes, whitespaces and parentheses.
// returns a nine-digit string with a valid phone number if the input contains a valid phone number; otherwise, returns false.
function parsePhoneNumber()
{
    let result = false;
    let strNumber = document.getElementById("telnumber").value;
    // console.log(`strNumber = /${strNumber}/`);
    let dbg = document.getElementById("debugtelnumber"); dbg.textContent = "";
    let msg = document.getElementById("resulttelnumber"); msg.textContent = "";
    
    //let str = strNumber.trim();
    let str = strNumber.replace(/ /g, '');
    str = str.replace(/\./g, '');
    str = str.replace(/-/g, '');
    // TODO: Check for BALANCED parentheses.
    str = str.replace(/\(|\)/g, '');

    // * Check for initial number 0 because it's the Swiss local.
    result = ('0' == str[0]);
    console.log(result);

    dbg.textContent = `str = /${str}/.`; // ! DEBUG

    let num = Number(str);
    console.log(`Number(${str}) = ${num}`); // ! DEBUG

    result = (result && !isNaN(num));
    console.log(result); // ! DEBUG

    result = result && str.length == 10;
    console.log(result); // ! DEBUG

    if ( !result ) {
        msg.textContent = `Sorry, I cannot recognize a phone number in <${strNumber}>.`;
        return false;
    } else {
        msg.textContent = `${strNumber} is a valid telephone number.`;
        return str;
    }

}

// https://www.freecodecamp.org/news/javascript-replace-how-to-replace-a-string-or-substring-in-js/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

// https://www.freecodecamp.org/news/4-methods-to-search-an-array/
// https://love2dev.com/blog/javascript-remove-from-array/
// https://www.tutorialspoint.com/javascript/array_reverse.htm
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function testArrayFunctions() {
    
    let array = ["Banana", "Apples", "Oranges", "Blueberries"];
    console.log(`The original array is: ${array}`);
    console.log(array);
    const art = document.getElementById("articlearrayfunctions");
    let p1 = document.createElement("p");
    p1.textContent = "The original array is: ";
    let p2 = document.createElement("p");
    p2.innerHTML = "<pre>array = [\"Banana\", \"Apples\", \"Oranges\", \"Blueberries\"]</pre>";
    art.appendChild(p1);
    art.appendChild(p2);

    // Access and output Oranges.
    // console.log(`We got some ${array[2]}! in ${array}.`);
    let item = "no oranges :-(";
    item = array.find(element => (element == "Oranges"));
    console.log(`We got ${item}! in ${array}.`);
    let p3 = document.createElement("p");
    p3.textContent = `We got ${item}! in ${array}.`;
    art.appendChild(p3);

    // Remove the Banana from the array.
    console.log(`We remove the ${array.shift()} from the array.`);
    let p34 = document.createElement("p");
    p34.innerHTML = `We have removed Banana from the array:`;
    art.appendChild(p34);
    let p35 = document.createElement("p");
    p35.innerHTML = `<pre>${array}</pre>`;
    art.appendChild(p35);


    // Sort the array in order.
    array.sort();
    console.log("We sort the array in alphabetical order:");
    let p4 = document.createElement("p");
    p4.textContent = `We sort the array alphabetically:`;
    art.appendChild(p4);
    console.table(array);

    let p5 = document.createElement("p");
    p5.innerHTML = `The sorted array is <pre> [ ${array} ]</pre>`;
    art.appendChild(p5);


    // Put "Kiwi" at the end of the array.
    array.push("Kiwi");
    console.log("We've included kiwis:");
    console.table(array);
    let p6 = document.createElement("p");
    p6.innerHTML = `We've included kiwis.<br/> The array now is <pre> [ ${array} ]</pre>`;
    art.appendChild(p6);

    // Remove "Apples" from the array.
    let i = array.indexOf("Apples");
    if (-1 != i) {
        const deleted = array.splice(i, 1);
    }
    console.log("We've deleted the apples (if any):");
    console.table(array);
    let p7 = document.createElement("p");
    p7.textContent = "We have deleted the first apple we've found:";
    art.appendChild(p7);
    let p8 = document.createElement("p");
    p8.innerHTML = `<pre> [ ${array} ]</pre>`;
    art.appendChild(p8);

    // Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a']
    console.log("We've sorted the array in reverse order:");
    console.log("Sorted: " + array);
    console.log("And now reversed:");
    array = array.reverse(array.sort());
    console.table(array);
    let p9 = document.createElement("p");
    p9.textContent = "We've sorted the array in reverse order:";
    art.appendChild(p9);
    let p10 = document.createElement("p");
    p10.innerHTML = `<pre> [ ${array} ]</pre>`;
    art.appendChild(p10);

    // You should at the end have
    // ["Kiwi", "Oranges", "Blueberries"]
    console.log(`array should be ["Kiwi", "Oranges", "Blueberries"]`);
    let p11 = document.createElement("p");
    p11.textContent = "We should now have:";
    art.appendChild(p11);
    let p12 = document.createElement("p");
    p12.innerHTML = `<pre> [ Kiwi, Oranges, Blueberries ]</pre>`;
    art.appendChild(p12);
}


/*
Exercise: Your top choices

    Create an array to hold your top choices (colors, presidents, whatever).
    For each choice, log to the screen a string like: "My #1 choice is blue."
    Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

Exercise: Recipe card

    Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
    On separate lines (one console.log statement for each), log the recipe information so it looks like:
        Soup
        Serves: 2
        Ingredients: cinnamon, cumin, cocoa

*/
