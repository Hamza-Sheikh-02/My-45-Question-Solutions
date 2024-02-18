"use strict";
let Guest_List = ['Cristiano Ronaldo', 'Lionel Messi', 'Erling Haaland'];
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear, ` + Guest_List[j] + `\n\nIt would be a pleasure to host you for dinner. I'm a big admirer of your achievements and would love to chat and learn more about you.\nThank You!\n\n`);
}
let absent_guest = 'Erling Haaland';
let new_guest = 'Neymar';
Guest_List[2] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear, ` + Guest_List[i] + `\n\nIt would be a pleasure to host you for dinner. I'm a big admirer of your achievements and would love to chat and learn more about you.\nThank You!\n\n`);
}
console.log(`Mr. ${absent_guest} is not coming to the party`);
