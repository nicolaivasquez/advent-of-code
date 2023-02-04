import { totalCalories } from "./calorie-counting-part1";

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
