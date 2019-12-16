'use strict';

console.log('js linked!');

var imageElements = document.getElementsByTagName('img');
var goatIndex1 = 0;
var goatIndex2 = 1;
// goat constructor

var allGoats = [];

function Goat(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allGoats.push(this);
}

// actually create our goats

new Goat('cruisin', 'images/cruisin-goat.jpg');
new Goat('float', 'images/float-your-goat.jpg');
new Goat('away', 'images/goat-away.jpg');
new Goat('out of hand', 'images/goat-out-of-hand.jpg');
new Goat('sassy', 'images/sassy-goat.jpg');

var totalClicks = 0;
// create a function to store clicks
function imageWasClicked(event) {
  console.log('an image was clicked');
  totalClicks++;
  if(event.srcElement.id === '1') {
    allGoats[goatIndex1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allGoats[goatIndex2].timesClicked++;
  }

  // pick 2 random goats to display
  var nextGoatIndex1 = Math.floor(Math.random() * allGoats.length);
  while((nextGoatIndex1 === goatIndex1) || (nextGoatIndex1 === goatIndex2)) {
    nextGoatIndex1 = Math.floor(Math.random() * allGoats.length);
  }
  var nextGoatIndex2 = Math.floor(Math.random() * allGoats.length);
  while((nextGoatIndex2 === goatIndex1) || (nextGoatIndex2 === goatIndex2) || (nextGoatIndex2 === nextGoatIndex1)) {
    nextGoatIndex2 = Math.floor(Math.random() * allGoats.length);
  }
  goatIndex1 = nextGoatIndex1;
  goatIndex2 = nextGoatIndex2;

  // display the goats
  imageElements[0].src = allGoats[goatIndex1].imageUrl;
  imageElements[1].src = allGoats[goatIndex2].imageUrl;

  if(totalClicks >= 5) {
    // we made it to 5 clicks
    var footerEl = document.getElementsByTagName('footer')[0];
    // loop through all the goats and display how many times each one was picked
    footerEl.textContent = `You picked things!`;
  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do

for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}