var background = document.querySelector('body');
var date = new Date();
var time = date.getHours();

console.log(time);

if (time > 6 && time < 18) {
  background.className = 'night';
} else {
  background.className = 'day';
}