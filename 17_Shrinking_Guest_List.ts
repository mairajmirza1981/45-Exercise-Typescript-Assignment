// . Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.






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
console.log(`\nunfortunately we can not arrange big table, only two people allow, `)

while(Guest_List.length>2){
    let remove_guest = Guest_List.pop();
    console.log(`\nsorry Sir/Madam, ${remove_guest} you are not invited for dinner. `);
 }
 for(let i=0; i<Guest_List.length;i++){
console.log(`\n Respected Sir/Madam ` + Guest_List[i] + `,\n yes you are still invited on tomorrow dinner\n Thank you\n`)
}
Guest_List.splice(0,2)
console.log (Guest_List)