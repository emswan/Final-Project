//creating Princess Object random numbers array
var thePrincesses = new Array("kersti.png", "peach.png", "tippi.png", "vivian.png");

//function for choosing a random number princess
function randomPrincess(thePrincesses) {
var randomNumber = Math.floor(Math.random() * thePrincesses.length);
return thePrincesses[randomNumber];
}

ele = document.getElementById("peachImage");
var imageLink = ele.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",randomPrincess(thePrincesses));


// document.getElementById("yoshiImage").xlink:href = theYoshis[randomNumber];
//document.write('xlink:href="'+theYoshis[randomNumber]+'" ')


