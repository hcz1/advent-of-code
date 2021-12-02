const { readFileSync } = require('fs');
const input = readFileSync('./input.txt', 'utf-8');
const inputArr = input.split('\n');
const splitDirection = inputArr.map((item) => item.split(/\s/));
// part 1
const location = splitDirection.reduce(
  (prev, [position, value]) => {
    const numVal = parseInt(value);
    if (position === 'forward') {
      return { ...prev, horizontal: prev.horizontal + numVal };
    }
    if (position === 'down') {
      return {
        ...prev,
        depth: prev.depth + numVal,
      };
    }
    if (position === 'up') {
      return {
        ...prev,
        depth: prev.depth - numVal,
      };
    }
  },
  {
    horizontal: 0,
    depth: 0,
  }
);
console.log('Part 1 answer:', location.depth * location.horizontal);

// part 2
const { horizontal, depth, aim } = splitDirection.reduce(
  (prev, [position, value]) => {
    const numVal = parseInt(value);
    if (position === 'forward') {
      return {
        ...prev,
        horizontal: prev.horizontal + numVal,
        depth: prev.aim === 0 ? prev.depth : prev.depth + numVal * prev.aim,
      };
    }
    if (position === 'down') {
      return {
        ...prev,
        aim: prev.aim + numVal,
      };
    }
    if (position === 'up') {
      return {
        ...prev,
        aim: prev.aim - numVal,
      };
    }
  },
  {
    horizontal: 0,
    depth: 0,
    aim: 0,
  }
);
console.log('Part 2 answer:', horizontal * depth);
