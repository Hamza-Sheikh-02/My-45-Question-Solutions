"use strict";
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`A ${size} shirt will be printed with the message: "${message}".`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Be Calm!');
