const createCounter = () =>{

    let count = 0;
    const increment = () =>{
        return ++count;
    }

    return increment;
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());