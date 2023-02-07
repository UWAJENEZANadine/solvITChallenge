// import './style.css'
/** Write your code below this comment */



const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result2");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("only numbers are accepted to make a sum");
  } else {
    result.innerHTML = `The sum is: ${num1 + num2}`;
    
  }
});



