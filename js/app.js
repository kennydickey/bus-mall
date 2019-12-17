'use strict';
console.log('js linked!');


var getImage = document.getElementsByTagName('img');

//for later for skipping over duplicates
// var itemRandomDisplay1 = 0;
// var itemRandomDisplay2 = 0;
// var itemRandomDisplay3 = 0;


var allItems = [];

//bus items constructor
function Bus(name, imgUrl){
  this.name = name;
  this.imgUrl = imgUrl;
  this.timesClicked = 0;
  allItems.push(this); //push any this. object member into allItems array ^^
}

//actually create our bus items
new Bus('bag', 'img/bag.jpg');
new Bus('banana', 'img/banana.jpg');
new Bus('bathroom', 'img/bathroom.jpg');
new Bus('boots', 'img/boots.jpg');
new Bus('breakfast', 'img/breakfast.jpg');
new Bus('bubblegum', 'img/bubblegum.jpg');
new Bus('chair', 'img/chair.jpg');
new Bus('cthulhu', 'img/cthulhu.jpg');
new Bus('dog-duck', 'img/dog-duck.jpg');
new Bus('dragon', 'img/dragon.jpg');
new Bus('pen', 'img/pen.jpg');
new Bus('pet-sweep', 'img/pet-sweep.jpg');
new Bus('scissors', 'img/scissors.jpg');
new Bus('shark', 'img/shark.jpg');
new Bus('sweep', 'img/sweep.png');
new Bus('tuantuan', 'img/tauntaun.jpg');
new Bus('unicorn', 'img/unicorn.jpg');
new Bus('usb', 'img/usb.gif');
new Bus('water-can', 'img/water-can.jpg');
new Bus('wine-glass', 'img/wine-glass.jpg');

var item1Clicked = 0;
var item2Clicked = 0;
var item3Clicked = 0;
var rounds = 25;


//create a function to store clicks
function itemClicked(event){ //event allows to take in event that happened
  console.log('an image was clicked');
  //within item clicked event pick 3 random items to put into allItems[] vv
  var itemRandomDisplay1 = Math.floor(Math.random() * allItems.length);
  var itemRandomDisplay2 = Math.floor(Math.random() * allItems.length);
  var itemRandomDisplay3 = Math.floor(Math.random() * allItems.length);
  //this next line is key - changes image source to random url ^ v
  getImage[0].src = allItems[itemRandomDisplay1].imgUrl;
  getImage[1].src = allItems[itemRandomDisplay2].imgUrl;
  getImage[2].src = allItems[itemRandomDisplay3].imgUrl;

  //this is from the event object shich we ran debug to see vvv
  if(event.srcElement.id === '1'){
    allItems[itemRandomDisplay1].timesClicked++; item1Clicked++;
  } else if (event.srcElement.id === '2'){
    allItems[itemRandomDisplay2].timesClicked++; item2Clicked++;
  } else if (event.srcElement.id === '3'){
    allItems[itemRandomDisplay3].timesClicked++; item3Clicked++;
  }
  if(item1Clicked + item2Clicked + item3Clicked > rounds){
    var dataOutput = document.getElementById('msg');
    dataOutput.textContent = `you picked item 1: ${item1Clicked} times, item 2: ${item2Clicked} times, and item 3: ${item3Clicked} times`;
    //todo loop through allItems and diplay
    for(var i = 0; i < rounds ; i++){
      getImage[i].removeEventListener('click', itemClicked);
    }
  }
}


//set up our items to call a function when there is a click
// var getImage = document.getElementsByTagName('img');  moved to..beginning


// if(allItems.length > 25){
//   for(var j = 0; j < getImage.length; j++){
//     getImage[j].removeEventListener('click', itemClicked);
//   }
// }


for(var i = 0; i < getImage.length; i++){ //iterates over amount of all images
  getImage[i].addEventListener('click', itemClicked);
}

