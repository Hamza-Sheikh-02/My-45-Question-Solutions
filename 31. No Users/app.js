"use strict";
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username === 'Admin') {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
