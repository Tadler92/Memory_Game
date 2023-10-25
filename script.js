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

let score = 0;
let clicks = 0;
let compareArr = [];
let cantClick = false;


// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (cantClick) return;
  let clickedCard = event.target;
  console.log(gameContainer);
  clicks++;
  score++;
  // clickedCard.classList.toggle('clicked');
  console.log("number of clicks =",clicks);
  console.log("total # of clicks =",score);
  console.log('comparrison array ->', compareArr);
  console.log('comparrison Second array ->', compareArr);

  if (clicks <= 2) {
    let color = clickedCard.classList[0];
    clickedCard.style.backgroundColor = color;
    
    compareArr.push(clickedCard);
    console.log('comparrison Second array ->', compareArr);
    console.log('bg color', clickedCard.style.backgroundColor);
    console.log('bg color', color);
    console.log('Class List =', clickedCard.classList.value);

    if (clicks === 1) {
      if (clickedCard.classList.value = `${color}`) {
        // clickedCard.classList.add('clicked');
        clickedCard.removeEventListener('click', handleCardClick);
        // clicked = true;
      }
    }

    else if (clicks === 2) {
      
        console.log('Class List =', clickedCard.classList.value);
        // clickedCard.classList.add('clicked');
        clickedCard.removeEventListener('click', handleCardClick);
        cantClick = true;


      // else {
        setTimeout(() => {
          for (let i = 0; i < 1; i++) {
          
            if (compareArr[i].style.backgroundColor !== compareArr[i+1].style.backgroundColor) {
              // console.log('different colors');
              
              compareArr[i].style.backgroundColor = '';
              // compareArr[i].classList.remove('clicked');
              compareArr[i].addEventListener('click', handleCardClick);
              
              compareArr[i+1].style.backgroundColor = '';
              // compareArr[i+1].classList.remove('clicked');
              compareArr[i+1].addEventListener('click', handleCardClick);
  
            };
          };
          compareArr = [];
        }, 1000);
      
    }
  
  };
  if (clicks === 2) {
    clicks = 0;
    setTimeout(() => {
      cantClick = false;
    },1000);
  };
};

// when the DOM loads
createDivsForColors(shuffledColors);