"use strict";
let Guest_List = ['Cristiano Ronaldo', 'Lionel Messi', 'Erling Haaland'];
// for(let j = 0; j < Guest_List.length; j++){
//     console.log(`Dear, `+ Guest_List[j] +`\n\nIt would be a pleasure to host you for dinner. I'm a big admirer of your achievements and would love to chat and learn more about you.\nThank You!\n\n`);
// }
let absent_guest = 'Erling Haaland';
let new_guest = 'Neymar';
Guest_List[2] = new_guest;
// for(let i = 0; i < Guest_List.length; i++){
//     console.log(`Dear, `+ Guest_List[i] +`\n\nIt would be a pleasure to host you for dinner. I'm a big admirer of your achievements and would love to chat and learn more about you.\nThank You!\n\n`);
// }
console.log(`Mr. ${absent_guest} is not coming to the party`);
console.log('Good news, I found a bigger dinner table so I am inviting 3 more guests.');
Guest_List.unshift('Kylian Mbappe');
Guest_List.splice(2, 0, 'Mohamed Salah');
Guest_List.push('Lautaro Martinez');
for (let k = 0; k < Guest_List.length; k++) {
    console.log(`Dear, ` + Guest_List[k] + `\n\nIt would be a pleasure to host you for dinner. I'm a big admirer of your achievements and would love to chat and learn more about you.\nThank You!\n\n`);
}
console.log("\nSorry we can't arrang the big table, So only two peoples will be invited.");
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner.`);
}
for (let l = 0; l < Guest_List.length; l++) {
    console.log(`Dear, ` + Guest_List[l] + `\n\nYou are still invited.\nThank You!\n\n`);
}
Guest_List.splice(0, 2);
console.log(Guest_List);
