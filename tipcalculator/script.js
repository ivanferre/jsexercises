// Tip Calculator

let defaultTaxRate = 0.18;
let defaultTipRate = 0.10;

// Check if there are default values in local storage
// if (localStorage.getItem("taxRate")) {
//     taxRate = JSON.parse(localStorage.getItem("defaults"));
// } else {
//     taxRate = defaultTaxRate;
// }

// get default taxRate
tr = localStorage.getItem("taxRate");
taxRateValue = ( tr ? JSON.parse(tr) : defaultTaxRate );
taxRateField = document.getElementById("taxrate");
taxRateField.setAttribute("value", taxRateValue);

// get default taxRate
tr = localStorage.getItem("tipRate");
tipRateValue = (tr ? JSON.parse(tr) : defaultTipRate);
tipRateField = document.getElementById("tiprate");
tipRateField.setAttribute("value", tipRateValue);

// input billAmount
billField = document.getElementById("bill");
billField.setAttribute("value", "0.00");

// input t "Include taxRate to compute tipAmount?"

// if t
//     tip <- billAmount * (1+taxRate) * (1+usualTipRate)
// else
//     tip <- billAmount * (1+usualTipRate)

// round tip to Rappen

// Display rounded tip
