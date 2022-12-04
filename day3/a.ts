const fs = require("fs");

export const data: string[] = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n");

let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetMap = new Map();
for (let i = 0; i < alphabet.length; i++) {
  alphabetMap.set(alphabet[i], i + 1);
}

let priority = [];
for (let i = 0; i < data.length; i++) {
  const length = data[i].length;
  const first = data[i].slice(0, length / 2);
  const second = data[i].slice(length / 2, length);

  for (let j = 0; j < first.length; j++) {
    if(second.includes(first[j])) {
        priority.push(alphabetMap.get(first[j]));
        break;
    }
  }
}

const sum = priority.reduce((a, b) => a + b, 0);
console.log(sum)
