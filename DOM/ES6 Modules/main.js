const { calculateTax,rate }  = require('./taxUtils');

let amount = calculateTax(200);
console.log("Total tax amount is:",amount);
console.log("Tax rate is",rate);