// Initialize variables
var btn2 = document.getElementById('peachImage');
var groundShape = document.getElementById('ground');
var gonzalesShape = document.getElementById('gonzales');
console.log(groundShape.style);
console.log(gonzalesShape.style);

function reverseState() {
  groundShape.classList.toggle("reverse");
  gonzalesShape.classList.toggle("reverse");
}

// Event listener
btn2.addEventListener("mousedown", reverseState)