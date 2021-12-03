const { readFileSync } = require('fs');

const input = readFileSync('./input.txt', 'utf-8');
const inputArr = input.split('\n');
let gammaRate = '';
let epsilonRate = '';
for (let i = 0; i < inputArr[0].length; i++) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let j = 0; j < inputArr.length; j++) {
    const bit = inputArr[j][i];
    if (parseInt(bit) === 1) oneCount++;
    if (parseInt(bit) === 0) zeroCount++;
  }
  if (zeroCount > oneCount) {
    gammaRate += '0';
    epsilonRate += '1';
  } else {
    gammaRate += '1';
    epsilonRate += '0';
  }
}
// answer
console.log(
  'part 1 answer:',
  parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
);

// part 2
let oxygenGeneratorRatingArr = [...inputArr];
let CO2ScrubberRatingArr = [...inputArr];
for (let i = 0; i < inputArr[0].length; i++) {
  let oneCountO2 = 0;
  let oneCountCO2 = 0;
  let zeroCountO2 = 0;
  let zeroCountCO2 = 0;
  for (let j = 0; j < oxygenGeneratorRatingArr.length; j++) {
    const bit = oxygenGeneratorRatingArr[j][i];
    if (parseInt(bit) === 1) oneCountO2++;
    if (parseInt(bit) === 0) zeroCountO2++;
  }
  if (oneCountO2 >= zeroCountO2) {
    oxygenGeneratorRatingArr =
      oxygenGeneratorRatingArr.length > 1
        ? oxygenGeneratorRatingArr.filter((item) => item[i] === '1')
        : oxygenGeneratorRatingArr;
  } else if (zeroCountO2 > oneCountO2) {
    oxygenGeneratorRatingArr =
      oxygenGeneratorRatingArr.length > 1
        ? oxygenGeneratorRatingArr.filter((item) => item[i] === '0')
        : oxygenGeneratorRatingArr;
  }
  for (let j = 0; j < CO2ScrubberRatingArr.length; j++) {
    const bit = CO2ScrubberRatingArr[j][i];
    if (parseInt(bit) === 1) oneCountCO2++;
    if (parseInt(bit) === 0) zeroCountCO2++;
  }

  if (zeroCountCO2 <= oneCountCO2) {
    CO2ScrubberRatingArr =
      CO2ScrubberRatingArr.length > 1
        ? CO2ScrubberRatingArr.filter((item) => item[i] === '0')
        : CO2ScrubberRatingArr;
  } else if (oneCountCO2 < zeroCountCO2) {
    CO2ScrubberRatingArr =
      CO2ScrubberRatingArr.length > 1
        ? CO2ScrubberRatingArr.filter((item) => item[i] === '1')
        : CO2ScrubberRatingArr;
  }
}
const oxygenGeneratorRating = oxygenGeneratorRatingArr[0];
const CO2ScrubberRating = CO2ScrubberRatingArr[0];
console.log(
  'part 2 answer:',
  parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2)
);
