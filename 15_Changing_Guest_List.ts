// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.



let Guest_List = ["Hussain", "Atif", "Faizan", "Usman", "Junaid", "Sikander", "Jazib", "Raheel", "Zeeshan",];
for (let i = 0; i < Guest_List.length; i++) {
    console.log("\n\Respect Sir/Madam " + Guest_List[i] + ",\n\n\we invited you on Dinner Tomorrow.\n\nThank you\n\n");
}
let not_Present = "Atif";
let new_guest = "Ghazanfar Ali";
Guest_List[1] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Respect Sir/Madam " + Guest_List[i] + ",\n\n\we invited you on Dinner Tomorrow.\n\nThank you\n\n");
}
console.log("Mr. ".concat(not_Present, " will not coming tomorrow dinner."));
