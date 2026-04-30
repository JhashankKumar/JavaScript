//how to take input from user in nodejs
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});

//how to read a file in nodejs
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

//how to write to a file in nodejs
const content = 'This is some content to write to the file.';

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written successfully.');
});

//how to append to a file in nodejs
const additionalContent = '\nThis is some additional content to append to the file.';

fs.appendFile('output.txt', additionalContent, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content has been appended successfully.');
});