
// Write a program that creates Objects containing these items.

// Datatype of Person object
interface person {
    Name : string,
    Age : number,
    Student : Boolean,
    Nationality : string,
}
//person object
let person: person = {
    Name : `Mairaj Mirza`,
    Age : 42,
    Student : true,
    Nationality : `Pakistani`,
}
// print person
console.log (person);

// Datatype of car object
interface car {
    Maker : string,
    Color : string,
    Automatic : boolean,
}
//car object
let car: car = {
    Maker : `Toyota`,
    Color : `Black`,
    Automatic : true,
}
// print car
console.log (car);