import {
  calcAnswerPart1,
  calcAnswerPart2,
  countTrees,
  readInput,
} from "./helpers";

describe("#calcAnswerPart1", () => {
  it("calcuates the answer to part 1", () => {
    expect(calcAnswerPart1("./input.test.txt")).toBe(7);
  });
});

describe("#calcAnswerPart2", () => {
  it("calcuates the answer to part 2", () => {
    expect(calcAnswerPart2("./input.test.txt")).toBe(336);
  });
});

describe("#countTrees", () => {
  it("returns the correct answer", () => {
    expect(countTrees(readInput("./input.test.txt"), 1, 1)).toBe(2);
    expect(countTrees(readInput("./input.test.txt"), 3, 1)).toBe(7);
    expect(countTrees(readInput("./input.test.txt"), 5, 1)).toBe(3);
    expect(countTrees(readInput("./input.test.txt"), 7, 1)).toBe(4);
    expect(countTrees(readInput("./input.test.txt"), 1, 2)).toBe(2);
  });
});
