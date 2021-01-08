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

let clickCount = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  let clickedCard = event.target;
  let cardColor = clickedCard.className;
  let isMatch;
  
  clickCount++;
  

  if (clickCount < 3) {
    clickedCard.style.backgroundColor = cardColor;
    clickedCard.setAttribute('picked', true);
    console.log(clickedCard.style.backgroundColor)
    console.log(clickedCard.getAttribute('picked'));
  }
  // else {
  //   alert('More than two clicks!')
  // }

  function getAttributes() {
    for (const card of gameContainer.children) {
      
    }
  }

  // if (clickedCard.style.backgroundColor === '') {
  //   clickCount++;
  //   clickedCard.style.backgroundColor = cardColor;
  // }

  // for (const card of gameContainer.children) {
  //   console.log(card, card.getAttribute('picked'));
  //   if (!card.getAttribute('picked')) {
  //     card.setAttribute('matched', true);
  //     clickedCard.setAttribute('matched', true);
  //     console.log('Add picked attribute');
  //     card.getAttribute('picked');
  //     card.getAttribute('matched');
  //   }
  // }
}

// when the DOM loads
createDivsForColors(shuffledColors);
