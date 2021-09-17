// Average calculator by will c

// Event listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
// input
let num1 = +document.getElementById("num1").value;
let num2 = +document.getElementById("num2").value;
let num3 = +document.getElementById("num3").value;

// process
let average = (num1 + num2 + num3) / 3; 

// output
document.getElementById("ave-out").innerHTML = average
}

