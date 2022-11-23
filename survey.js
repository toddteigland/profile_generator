// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What"s your name? Nicknames are also acceptable :)', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// // rl.question('What"s an activity you like doing?', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
// //   rl.close();
// // rl.question('What do you listen to while doing that?', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
// //   rl.close();
// // rl.question('What is your favorite meal?', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
// //   rl.close();
// // rl.question('Favorite dish in that meal? ', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
// //   rl.close();
// // rl.question('What is your superpower?', (answer) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
// //   rl.close();
// })})})})})});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What do you think of pizza.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What is your favorite activity? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('What do you listen to while doing that? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What is your favorite meal of the day? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('What is the best dish for that meal? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What is your superpower? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.close();
            });
          });
        });
      });
    });
  })
  // rl.close();
});