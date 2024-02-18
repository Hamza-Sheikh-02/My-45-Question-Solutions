let usernames: string[] = ['Admin', 'Hamza', 'Kabeer', 'Usman', 'Zayan'];

for (let username of usernames) {
    if (username === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    } 
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
