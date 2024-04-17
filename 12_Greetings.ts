// . Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each messageshould be the same, but each message should be personalized with the person’s name.


let numbers: string[] =[`Hussain`,`Atif`,`Faizan`,`Usman`,`Junaid`,`Sikander`,`Jazib`,`Raheel`,`Zeeshan`,];
let message = "Happy Friendship Day  ";
for(let i=0; i<numbers.length; i++){
    console.log(message + numbers[i]);
}