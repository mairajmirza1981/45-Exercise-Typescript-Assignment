

//Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

//Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

//Tests Using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

//Numerical tests Involving equality , 
console.log("Equality test with numbers: ", 24 === 24);

//Numerical tests Involving Inequality, 
console.log("Inequality test with numbers: ", (22 as number) != 35);

//greater than test,
console.log ("Greater than test: ", 20 > 10);

// less than test,
console.log ("less than test: ", 10 < 20);

 //greater than or equal to
 console.log("greater than or equal to test: ", 15 >= 15);

// less than or equal to
console.log("less than or equal to test: ", 10 <= 15);

//Tests using "and" operators
console.log ("And operators test: ", 10===10 && 10 > 5);

//Tests using "or" operators
console.log ("or operators test: ", 5 === 5 || false);

// Test whether an item is in a array
const fruits :string[] = [`Banana`,`Apple`,`Cherry`];
console.log(`Test "Banana" in the arry:`, fruits.includes("Banana"));

// Test whether an item is not in a array
console.log(`Testing "Apricot" is not in array:`, !fruits.includes(`Apricot`));



