let screen = document.querySelector('p');
let numbers = document.querySelector("#flex-container");
let inputValues = Array.from(numbers.querySelectorAll("input"));
let input = numbers.querySelectorAll("input");

let values = inputValues.map(a => a.getAttribute('value'));

screen.inn