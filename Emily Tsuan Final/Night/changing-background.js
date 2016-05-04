// Initialize variables
var btn = document.getElementById('merlonImage');
var treeShape1 = document.getElementById('tree1');
var path1 = document.getElementById('pathway');
var rectShape1 = document.getElementById('platform1');
var rectShape2 = document.getElementById('platform2');
var rectShape3 = document.getElementById('platform3');
var marioShape = document.getElementById('marioImage');
var yoshiEggShape = document.getElementById('yoshiEgg');
var marioShapeBack = document.getElementById('marioImageBack');
var yoshiShape = document.getElementById('yoshiImage');
console.log(path1.style);
console.log(treeShape1.style);
console.log(rectShape1.style);
console.log(rectShape2.style);
console.log(rectShape3.style);
console.log(marioShape.style);
console.log(marioShapeBack.style);
console.log(yoshiShape.style);
console.log(yoshiEggShape.style);

function playState() {
  path1.classList.toggle("running");
  treeShape1.classList.toggle("running");
  rectShape1.classList.toggle("running");
  rectShape2.classList.toggle("running");
  rectShape3.classList.toggle("running");
  marioShape.classList.toggle("running");
  marioShapeBack.classList.toggle("running");
  yoshiShape.classList.toggle("running");
  yoshiEggShape.classList.toggle("running");
}

// Event listener
btn.addEventListener("mousedown", playState)