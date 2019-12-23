'use strict';
console.log('js linked!');

var getImage = document.getElementsByTagName('img');

var allItems = [];

//bus items constructor
function Bus(name, imgUrl, timesClicked, timesShown){
  this.name = name;
  this.imgUrl = imgUrl;
  if (timesClicked) {
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  if (timesShown) {
    this.timesShown = timesShown;
  } else {
    this.timesShown = 0;
  }
  allItems.push(this); //push any this. object member into allItems array ^^
}


//actually create our bus items
var getPrevious = localStorage.getItem('set');
if(getPrevious){ //
  var parsedPrevious = JSON.parse(getPrevious);
  for(let i = 0; i < parsedPrevious.length; i++){
    new Bus(parsedPrevious[i].name, parsedPrevious[i].imgUrl, parsedPrevious[i].timesClicked, parsedPrevious[i].timesShown);
    console.log('hello');
  }
} else{
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
}

var item1Clicked = 0;
var item2Clicked = 0;
var item3Clicked = 0;
var rounds = 25;


//create a function to store clicks
function itemClicked(event){ //event allows to take in event that happened
  // debugger;
  console.log('an image was clicked');
  //within item clicked event pick 3 random items to put into allItems[] vv
  var itemRandomDisplay1 = Math.floor(Math.random() * allItems.length);
  var itemRandomDisplay2 = Math.floor(Math.random() * allItems.length);
  var itemRandomDisplay3 = Math.floor(Math.random() * allItems.length);
  //this next line is key - changes image source to random url ^ v
  getImage[0].src = allItems[itemRandomDisplay1].imgUrl;
  getImage[1].src = allItems[itemRandomDisplay2].imgUrl;
  getImage[2].src = allItems[itemRandomDisplay3].imgUrl;
  //increments times shown vvv
  allItems[itemRandomDisplay1].timesShown++;
  allItems[itemRandomDisplay2].timesShown++;
  allItems[itemRandomDisplay3].timesShown++;

  // if (getImage[0]){console.log('hello')}

  //this is from the event object shich we ran debug to see vvv
  if(event.srcElement.id === '1'){
    //this is the future problem!!!!!!!!!!!!!!!!!!
    allItems[itemRandomDisplay1].timesClicked++; item1Clicked++;
  } else if (event.srcElement.id === '2'){
    allItems[itemRandomDisplay2].timesClicked++; item2Clicked++;
  } else if (event.srcElement.id === '3'){
    allItems[itemRandomDisplay3].timesClicked++; item3Clicked++;
  }
  if(item1Clicked + item2Clicked + item3Clicked > rounds){
    var dataOutput = document.getElementById('msg');
    dataOutput.textContent = 'Here is the click breakdown for user interest';
    // `you picked item 1: ${item1Clicked} times, item 2: ${item2Clicked} times, and item 3: ${item3Clicked} times`;
    //todo loop through allItems and diplay
    for(var i = 0; i < rounds ; i++){
      getImage[i].removeEventListener('click', itemClicked);
    }
  }
  //fill in li's
  for(var j = 0; j < allItems.length; j++){
    var reRenderText = document.getElementsByTagName('li')[j];
    reRenderText.textContent = `${allItems[j].name}s: ` + `${allItems[j].timesClicked} clicks! `;
  }
  // var roundCount = function  change num back to  >rounds-1!!!!
  if(item1Clicked + item2Clicked + item3Clicked > rounds - 1){
    localStorage.setItem('set', JSON.stringify(allItems));

    renderGraph();

  }

}

//set up our items to call a function when there is a click
// var getImage = document.getElementsByTagName('img');  moved to..beginning
for(var i = 0; i < getImage.length; i++){ //iterates over amount of all images
  getImage[i].addEventListener('click', itemClicked);
  //refer to actual event for removeEventListener
}

function renderList(){
  //point to first ul, rather than by id for practice
  var ulContainer = document.getElementsByTagName('ul')[0];
  for(var i = 0; i < allItems.length; i++){
    var renderLi = document.createElement('li');
    renderLi.textContent =
    `${allItems[i].name}: ` + `${allItems[i].timesClicked}: `;
    ulContainer.appendChild(renderLi);
  }
}
renderList();


//chart--------------------------------------------
//------------------------------
function graphDataArray(propertyName) {
  var answer = [];
  for (var i = 0; i < allItems.length; i++) {
    answer[i] = allItems[i][propertyName];
  }
  console.log(answer);
  return answer;
}


function renderGraph(){
  var ctx = document.getElementById('myChart').getContext('2d');

  var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: graphDataArray('name'), //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Clicks',
        data:  graphDataArray('timesClicked'),
        backgroundColor: [
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
          'rgba(150, 255, 220, 0.5)',
        ],
      },{
        label: '# of Views',
        data: graphDataArray('timesShown'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });

} //end of graph function


//JSON------------------------------------------------------

// var resetPage = document.getElementById('clear');
// resetPage.addEventListener('click', reload());

// // document.getElementById("myBtn").addEventListener("click", function(){
// //   document.getElementById("demo").innerHTML = "Hello World";
// // });

// object.addEventListener("click", myScript);







