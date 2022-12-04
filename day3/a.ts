const fs = require("fs");

export const data = fs.readFileSync("./input.txt", "utf8").split("\n");


console.log(data)