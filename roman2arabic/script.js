const conversion = [
    {char: "M", value: 1000}, {char: "D", value: 500},
    {char: "C", value: 100}, {char: "L", value: 50},
    {char: "X", value: 10}, {char: "V", value: 5},
    {char: "I", value: 1}
];

function arabicToRoman(arab) {
    let roman = "";
    let div = 0;
    let prevChar = "M";
    
    conversion.forEach(e => {
        div = Math.floor(arab / e.value);
        let str = "";
        if (div < 4) {
            for (let i = 0; i < div; i++) {
                str.concat(e.char);
            }
        }
        else {
            // div == 4
            str.concat(e.char);
            // include the previous char!

        }
        roman.concat(str);
        arab -= div * e.value;
    })
    return roman;
}

// TODO: we still haven't tested anything!
let a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 4; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 5; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 7; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
a = 1; r = arabicToRoman(a); console.log(`${a} = ${r}`);
