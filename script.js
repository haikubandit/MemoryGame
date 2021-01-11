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
  // console.log(clickedCard.style);

  const gameStatus = [];
  let selected = event.target.setAttribute('selected', true);
  let matched;

    clickedCard.style.backgroundColor = cardColor;
    for (let i = 0; i < gameContainer.children.length; i++) {
      let card = gameContainer.children[i];
      let cardStatus = {};
      let selectedCount = 0;
      // console.log(card.className, card.getAttribute('selected'));

      cardStatus.color = card.className;
      cardStatus.selected = card.getAttribute('selected');
      cardStatus.matched = null;
      gameStatus.push(cardStatus);
      
      if (cardStatus.selected) {
        selectedCount++;
        console.log(selectedCount);
        if (selectedCount > 3) {
          alert('Too many picks');
        }
      }
      
    }
    
    // for (let i = 0; i < gameStatus.length; i++) {
      
    //   console.log(gameStatus[i]);

      // if (cardColor === gameStatus[i].color) {
      //   gameStatus[i].matched = true;
      // } else {
      //   gameStatus[i].matched = false;
      // }
      
    // }

    
    console.log(gameStatus);
}

// when the DOM loads
createDivsForColors(shuffledColors);

