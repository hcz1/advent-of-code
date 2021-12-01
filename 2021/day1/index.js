const { readFileSync } = require('fs');

const util = (inputArr) =>
  inputArr.reduce(
    (prev, curr, i) => {
      if (i === 0) return { last: parseInt(curr), count: 0 };
      return {
        last: parseInt(curr),
        count: parseInt(curr) > prev.last ? prev.count + 1 : prev.count,
      };
    },
    { last: 0, count: 0 }
  );

const input = readFileSync('./input.txt', 'utf-8');
const inputArr = input.split('\n');
// part 1
const part1_answer = util(inputArr);
console.log(part1_answer);

//part 2
const summedArr = [];
for (let i = 2; i < inputArr.length; i++) {
  const sum =
    parseInt(inputArr[i]) +
    parseInt(inputArr[i - 1]) +
    parseInt(inputArr[i - 2]);
  summedArr.push(sum);
}
const part2_answer = util(summedArr);
console.log(part2_answer);
