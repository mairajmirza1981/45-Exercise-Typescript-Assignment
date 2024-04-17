

//write a series of conditional tests.
let car :string = `subaru` ;

//Test No 1
console.log("is car === `subaru'? I predict True.");
console.log(car ===`subaru`);

//Test No 2
console.log("is car == `subaru'? I predict True.");
console.log(car ==`subaru`);

//Test No 3
console.log("is car != `Honda'? I predict True.");
console.log(car !=`Honda`);

//Test No 4
console.log("is car !== `ford'? I predict True.");
console.log(car !==`ford`);

//Test No 5
console.log("is car.Upper case ==`SUBARU'? I predict True.");
console.log(car.toUpperCase() == `SUBARU`);

//Test No 6
console.log("is car ==`SUBARU'? I predict False");
console.log(car == `SUBARU`);

//Test No 7
console.log("is car ===`SUBARU'? I predict False");
console.log(car === `SUBARU`);

//Test No 8
console.log("is car ===`Train'? I predict False");
console.log(car === `Train`);

//Test No 9
console.log("is car ===`BUS'? I predict False");
console.log(car === `Bus`);

//Test No 10
console.log("is car ===`Cycle'? I predict False");
console.log(car === `Cycle`);