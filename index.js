const emailRegex =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const testEmail1 = `JohnWayne123`;


console.log(emailRegex.test(testEmail1));

const test = 'happytuesday';
const quantifers = /happy*/;
console.log(test.match(quantifers));
