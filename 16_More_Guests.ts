// More Guests: You just found a bigger dinner table, so now more space isavailable. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.




let Guest_List = ["Hussain", "Atif", "Faizan", "Usman", "Junaid", "Sikander", "Jazib", "Raheel", "Zeeshan",];
// for (var i = 0; i < Guest_List.length; i++) {
//     console.log("Dear Sir/Madam " + Guest_List[i] + ",\n\nwe invited you on Dinner Tomorrow.\n\nThank you\n\n");
// }
let not_Present = "Junaid";
let new_guest = "Ghazanfar Ali";
Guest_List[4] = new_guest;
for (let i=0; i<Guest_List.length; i++) {
    console.log(`Dear Sir/Madam ` + Guest_List[i] + ",\n\nwe invited you on Dinner Tomorrow.\n\nThank you\n\n");
// console.log("Mr. ".concat(not_Present, " will not coming tomorrow dinner.\n\n"));
}
Guest_List.unshift(`Azeem`,`Noman`,`Kamran`);
for (let i = 0; i<Guest_List.length; i++){
    console.log(`Dear Sir/Madam `  + Guest_List[i] + `,\n\nwe invited you on Dinner Tomorrow.\nwe are found a bigger dinner table,\nso now more space is available.\nwe decide to invite three more guests invite to dinner \n\nThank you\n\n`);
}