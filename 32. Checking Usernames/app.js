"use strict";
let current_users = ['hamza', 'kabeer', 'usman', 'zayan', 'admin'];
let new_users = ['asif', 'KABEER', 'aliyan', 'murtaza', 'HAMZA'];
for (let new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();
    let username_exists = false;
    for (let current_user of current_users) {
        if (current_user.toLowerCase() === lowercase_new_user) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log(`Sorry, ${new_user}, that username is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations, ${new_user}, the username is available!`);
    }
}
