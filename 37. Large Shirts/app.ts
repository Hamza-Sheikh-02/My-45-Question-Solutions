function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`A ${size} shirt will be printed with the message: "${message}".`);
}

make_shirt();
make_shirt('medium');

make_shirt('small', 'Be Calm!');
