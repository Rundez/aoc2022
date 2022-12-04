const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").split("\n");

const scores = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
const outcome = {
  win: 6,
  draw: 3,
  loss: 0,
};

const fight = (opponent: "A" | "B" | "C", player: "X" | "Y" | "Z") => {
  switch (opponent) {
    case "A":
      if (player === "X") {
        return outcome.draw + 1;
      }
      if (player === "Y") {
        return outcome.win + 2;
      }
      if (player === "Z") {
        return outcome.loss + 3;
      }
    case "B":
      if (player === "X") {
        return outcome.loss + 1;
      }
      if (player === "Y") {
        return outcome.draw + 2;
      }
      if (player === "Z") {
        return outcome.win + 3;
      }
    case "C":
      if (player === "X") {
        return outcome.win + 1;
      }
      if (player === "Y") {
        return outcome.loss + 2;
      }
      if (player === "Z") {
        return outcome.draw + 3;
      }
    default:
      return 0;
  }
};

let score = 0;
for (let i = 0; i < data.length; i++) {
  const [opponent, player] = data[i].split(" ");
  score += fight(opponent, player);
}

// A = rock
// B = paper
// C = scissors
// X= rock
// Y = paper
// Z = scissors
