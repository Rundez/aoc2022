const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").split("\n");

// let highest = 0;
// let curr = 0;
// for (let i = 0; i < data.length; i++) {
//   if (data[i] === "") {
//     if (curr > highest) {
//       highest = curr;
//     }
//     curr = 0;
//     continue;
//   }
//   curr += parseInt(data[i]);
// }


const elves: number[] = [];

let curr = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === "") {
    elves.push(curr);
    curr = 0;
    continue;
  }
  curr += parseInt(data[i]);
}

const ans = elves.sort((a, b) => a - b).reverse().slice(0, 3).reduce((acc, curr) => acc + curr);
console.log(ans)