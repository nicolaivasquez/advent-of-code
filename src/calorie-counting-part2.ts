import { totalCalories } from "./calorie-counting-part1";

/**
 * --- Part Two ---
 *
 * By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.
 *
 * To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.
 *
 * In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.
 *
 * Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
 */

const topThreeMaxCalories = totalCalories.reduce((topThree, current) => {
  //no top three yet
  if (topThree.length < 3) {
    return [...topThree, current].sort();
  }
  // current elf to kick out lowest in top three
  if (current > topThree[0]) {
    return [...topThree.slice(1), current].sort();
  }
  // current is lower than any of the top three
  return topThree;
}, [] as number[]);

console.log(topThreeMaxCalories.reduce((sum, entry) => sum + entry, 0));
