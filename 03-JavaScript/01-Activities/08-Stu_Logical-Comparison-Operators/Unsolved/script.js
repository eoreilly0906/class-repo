const a = '50'; //string
const b = 50; //number
const c = 100; //number
const d = c % b; //0
const e = c / 2; //50

const expression1 = (b === e); //true
const expression2 = (e < d); //false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b); 
console.log(b === e);
console.log(c > b); 
console.log(d >= 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);
console.log(expression1 || !expression2);
  
