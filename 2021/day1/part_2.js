const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8');
const inputArr = input.split('\n');
const summedArr = [];
for (let i = 2; i < inputArr.length; i++) {
  const sum =
    parseInt(inputArr[i]) +
    parseInt(inputArr[i - 1]) +
    parseInt(inputArr[i - 2]);
  summedArr.push(sum);
}
