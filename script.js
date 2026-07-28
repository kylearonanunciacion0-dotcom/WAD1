// console.log ('JavaScript is connected!');

// let attempts = 1
// let attempts = attempts + 1

// console.log('attempts');

// const courseName = "Web Development";
// const passingScore = 75;
// // passingScore = 80; (Error)

// console.log(passingScore);
// const PI = 3.14;

// // Name
// const name = 'Kyle Anunciacion';

// // Age
// age = 18;

// // isPassed 
// const isPassed = true;

// // undefined
// let result; 

// // null
// const selectedValue = null;

// const score = 75;
// // score > 80
// // score === 75 ; JavaScript
// // score == 75 

// let score = 0;
// const button = document.querySelector('#btn');
// const display = document.querySelector('#display');

// button.addEventListener('click', () => {
//   score++;
//   display.textContent = `Score: ${score}`;
// });

let score = 0;

const Increment = document.querySelector('#Increment');
const Decrement = document.querySelector('#Decrement');
const Reset = document.querySelector('#Reset');
const display = document.querySelector('#display');

Increment.addEventListener('click', () => {
  score++;
  display.textContent = `Score: ${score}`;
});

Decrement.addEventListener('click', () => {
  score--;
  display.textContent = `Score: ${score}`;
});

Reset.addEventListener('click', () => {
  score = 0;
  display.textContent = `Score: ${score}`;
});
