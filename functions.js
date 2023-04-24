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
