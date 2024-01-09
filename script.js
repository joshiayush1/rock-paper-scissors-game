const clickOnButtons = document.querySelectorAll(".actions button");

for (let btn of clickOnButtons) {
  btn.addEventListener("click", (e) => {
    userChose(e.currentTarget.dataset.choice);
  });
}

let randomNumber = (e) => {
  let rc = parseInt(Math.random() * 3);
  return rc;
};

const yourScoreListen = document.querySelector(".yourScore h2");
const youropponentScoreListen = document.querySelector(".opponentScore h2");
const displayWhoWon = document.querySelector(".whoWon h1");
const resetScore = document.querySelector(".resetBtn button");

let oldYouScore = 0;
let oldOpponentScore = 0;

let userChose = (choice) => {
  //   yourScoreListen.innerHTML = `${oldYouScore + 1}`;
  //   youropponentScoreListen.innerHTML = `${oldOpponentScore + 1};
  // `;
  //   displayWhoWon.innerHTML = `${"rock beats scissors"}`;
  let getRC = randomNumber();
  console.log("Js Choose", getRC);
  console.log("User chose:", choice);

  //user wins
  if (choice === "rock" && getRC === 2) {
    yourScoreListen.innerHTML = `${(oldYouScore += 1)}`;
    document.querySelector(".whoWon").style.color = "green";
    displayWhoWon.innerHTML = `${"Rock Beats Scissors!"}`;
  } else if (choice === "paper" && getRC === 0) {
    yourScoreListen.innerHTML = `${(oldYouScore += 1)}`;
    document.querySelector(".whoWon").style.color = "green";
    displayWhoWon.innerHTML = `${"Paper Beats Rock!"}`;
  } else if (choice === "scissors" && getRC === 1) {
    yourScoreListen.innerHTML = `${(oldYouScore += 1)}`;
    document.querySelector(".whoWon").style.color = "green";
    displayWhoWon.innerHTML = `${"Scissors Beats Paper!"}`;
  }
  //oponent(js) wins
  else if (choice === "rock" && getRC === 1) {
    youropponentScoreListen.innerHTML = `${(oldOpponentScore += 1)}`;
    document.querySelector(".whoWon").style.color = "red";
    displayWhoWon.innerHTML = `${"Paper Beats Rock!"}`;
  } else if (choice === "paper" && getRC === 2) {
    youropponentScoreListen.innerHTML = `${(oldOpponentScore += 1)}`;
    document.querySelector(".whoWon").style.color = "red";
    displayWhoWon.innerHTML = `${"Scissors Beats Paper!"}`;
  } else if (choice === "scissors" && getRC === 0) {
    youropponentScoreListen.innerHTML = `${(oldOpponentScore += 1)}`;
    document.querySelector(".whoWon").style.color = "red";
    displayWhoWon.innerHTML = `${"Rock Beats Scissors!"}`;
  }
  //draw
  else if (choice === "rock" && getRC === 0) {
    displayWhoWon.innerHTML = `${"Draw"}`;
    document.querySelector(".whoWon").style.color = "black";
  } else if (choice === "paper" && getRC === 1) {
    displayWhoWon.innerHTML = `${"Draw"}`;
    document.querySelector(".whoWon").style.color = "black";
  } else if (choice === "scissors" && getRC === 2) {
    displayWhoWon.innerHTML = `${"Draw"}`;
    document.querySelector(".whoWon").style.color = "black";
  }
  //error
  else {
    console.log("Error");
  }

  resetScore.addEventListener("click", (e) => {
    window.location.reload(true);
  });
};
