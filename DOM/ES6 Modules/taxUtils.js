 let rate = 0.5;

calculateTax = (price) =>{
    return price*rate;
}

module.exports = {calculateTax,rate}; 