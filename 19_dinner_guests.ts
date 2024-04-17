let Guest_List = ["Hussain", "Atif", "Faizan", "Usman", "Junaid", "Sikander", "Jazib", "Raheel", "Zeeshan",];
// for (var i = 0; i < Guest_List.length; i++) {
//     console.log("Dear Sir/Madam " + Guest_List[i] + ",\n\nwe invited you on Dinner Tomorrow.\n\nThank you\n\n");
// }
let not_Present = "Junaid";
let new_guest = "Ghazanfar Ali";
Guest_List[4] = new_guest;
//for (let i=0; i<Guest_List.length; i++) {
  //  console.log(`Dear Sir/Madam ` + Guest_List[i] + ",\n\nwe invited you on Dinner Tomorrow.\n\nThank you\n\n");
// console.log("Mr. ".concat(not_Present, " will not coming tomorrow dinner.\n\n"));
//}
Guest_List.unshift(`Azeem`,`Noman`,`Kamran`);
//for (let i = 0; i<Guest_List.length; i++){
  //  console.log(`Dear Sir/Madam `  + Guest_List[i] + `,\n\nwe invited you on Dinner Tomorrow.\nwe are found a bigger dinner table,\nso now more space is available.\nwe decide to invite three more guests invite to dinner \n\nThank you\n\n`);
//}
// console.log(`\nunfortunately we can not arrange big table, only two people allow, `)

while(Guest_List.length>2){
    let remove_guest = Guest_List.pop();
    // console.log(`\nsorry Sir/Madam, ${remove_guest} you are not invited for dinner. `);
 }

 //for(let i=0; i<Guest_List.length;i++){
//console.log(`\n Respected Sir/Madam ` + Guest_List[i] + `,\n yes you are still invited on tomorrow dinner\n Thank you\n`)
//}

Guest_List.splice(0, 2);
console.log (Guest_List);

//Exercise 19
//print a message indicating the numberof people you are inviting to dinner

console.log(`Total number of Guest Are:${Guest_List.length}`);