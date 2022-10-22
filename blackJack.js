let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "suter",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  if (isAlive === true) {
    alert("Game is running");
  } else {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];

    renderGame();
    isAlive = true;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw new card";
  } else if (sum === 21) {
    message = "You have a black jack";
    isAlive = false;
    hasBlackJack = true;
    alert("You've won, hooray");
  } else {
    message = "You're out of the game ";
    alert("Game Over");
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log("click");
    console.log(card);
    renderGame();
  } else {
    alert("Start Game");
  }
}
function newGame() {
  isAlive = false;
  cards.splice(0, cards.length);
  cardsEl.textContent = "Cards:" + cards;
  sum = 0;
  sumEl.textContent = "Sum:" + "";
}

let course = {
  tags: ["html", "css", "js"],
};

console.log(course.tags["1"]);
