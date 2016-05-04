//creating Yoshi Object random numbers array
var theYoshis = new Array("yoshi-1.png", "yoshi-2.png", "yoshi-3.png", "yoshi-4.png", "yoshi-5.png", "yoshi-6.png", "yoshi-7.png");

//function for choosing a random number yoshi
function randomYoshi(theYoshis) {
var randomNumber = Math.floor(Math.random() * theYoshis.length);
return theYoshis[randomNumber];
}

ele = document.getElementById("yoshiImage");
var imageLink = ele.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",randomYoshi(theYoshis));


// document.getElementById("yoshiImage").xlink:href = theYoshis[randomNumber];
//document.write('xlink:href="'+theYoshis[randomNumber]+'" ')


