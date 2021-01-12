const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let selectedCards = [];
let deck = [];
let startGame = document.getElementById('start');
let resetGame = document.getElementById('reset');
let gameScore = 0;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  let clickedCard = event.target;
  let cardColor = clickedCard.className;
  
  
  selectedCards.push(this);
  

  let count = selectedCards.length;
  clickedCard.style.backgroundColor = cardColor;
  


  if (count === 2) {
    disableClick();
    if (clickedCard === selectedCards[0]) {
      alert('Click a different card.')
      selectedCards.pop();
      enableClick();
    } else {
      // console.log(selectedCards[0].className, selectedCards[1].className);
      if (selectedCards[0].className === selectedCards[1].className) {
        alert('Match!');
        selectedCards[0].style.pointerEvents = 'none';
        selectedCards[0].setAttribute('matched',true);
        selectedCards[1].style.pointerEvents = 'none';
        selectedCards[1].setAttribute('matched',true);
        selectedCards.splice(0, selectedCards.length);
        enableClick();
      }
      else {
        setTimeout(function() {
          clickedCard.style.backgroundColor = "";
          selectedCards[0].style.backgroundColor = "";
          selectedCards = [];
          enableClick();
        },1000);
      }
    }
    
  }

}

// when the DOM loads
// createDivsForColors(shuffledColors);

// start game button
startGame.addEventListener('click',function() {
  createDivsForColors(shuffledColors);
  createDeck();
  startGame.style.pointerEvents = 'none';
});

// reset game button
resetGame.addEventListener('click',function() {
  deck = [];
  removeCards(gameContainer);
  shuffle(COLORS);
  createDivsForColors(shuffledColors);
  createDeck();
});

// remove all cards
function removeCards(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// enable click after inital two have been picked
function enableClick() {
  for (let i = 0; i < deck.length; i++) {
    if (!deck[i].getAttribute('matched')) {
      deck[i].style.pointerEvents = 'auto';              
    }
  }
}

function disableClick() {
  for (let i = 0; i < deck.length; i++) {
    deck[i].style.pointerEvents = 'none';
  }
}

// create game deck array
function createDeck() {
  for (let i = 0; i < gameContainer.children.length; i++) {
    deck.push(gameContainer.children[i]);
  }
}