import { calcAnswerPart1, findPairThatSumsTo2020, readInput } from "./helpers";

describe("#calcAnswerPart1", () => {
  it("calcuates the final answer", () => {
    expect(calcAnswerPart1("./input.test.txt")).toBe(514579);
  });
});

describe("#findPairThatSumsTo2020", () => {
  it("finds the pair that sums to 2020", () => {
    expect(findPairThatSumsTo2020([1721, 979, 366, 299, 675, 1456])).toEqual([
      1721,
      299,
    ]);
  });
});

describe("#readInput", () => {
  it("reads input values from file", () => {
    expect(readInput("./input.test.txt")).toEqual([
      1721,
      979,
      366,
      299,
      675,
      1456,
    ]);
  });
});
