import {
  inputArray,
  Results,
  resultScores,
  handScores,
} from "./rock-paper-scissors-part1";

/**
 * --- Part Two ---
 *
 * The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
 *
 * The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:
 *
 * In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
 * In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
 * In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
 * Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.
 *
 * Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
 */

const secondHands = {
  X: Results.LOST,
  Y: Results.DRAW,
  Z: Results.WON,
};

/*
    rock L -> S
    rock W -> P
    rock D -> R
    paper L -> R
    paper W -> S
    paper D -> P
    scissors L -> P
    scissors W -> R
    scissors D -> S
 */

const possibilities = [
  [3, 2, 1],
  [1, 3, 2],
  [2, 1, 3],
];

const outcome = inputArray.map(([first, second]) => {
  // first get the result score
  const scoreFromResult = resultScores[secondHands[second]];

  // then get the hand you're supposed to make
  const handToMake = possibilities[handScores[first] - 1][secondHands[second]];

  // return {
  //   first,
  //   second,
  //   scoreFromResult,
  //   handToMake,
  // };
  return scoreFromResult + handToMake;
});

const totalScore = outcome.reduce((total, curr) => total + curr, 0);
console.log(totalScore);
