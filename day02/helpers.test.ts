import {
  calcAnswerPart1,
  calcAnswerPart2,
  isValidPart1,
  isValidPart2,
  readInput,
} from "./helpers";

describe("#calcAnswerPart1", () => {
  it("calcuates the answer to part 1", () => {
    expect(calcAnswerPart1("./input.test.txt")).toBe(2);
  });
});

describe("#calcAnswerPart2", () => {
  it("calcuates the answer to part 2", () => {
    expect(calcAnswerPart2("./input.test.txt")).toBe(1);
  });
});

describe("#isValidPart1", () => {
  it("returns true if the entry is valid", () => {
    expect(
      isValidPart1({
        lowest: 1,
        highest: 3,
        letter: "a",
        password: "abcde",
      })
    ).toBe(true);
    expect(
      isValidPart1({
        lowest: 2,
        highest: 9,
        letter: "c",
        password: "ccccccccc",
      })
    ).toBe(true);
  });

  it("returns false if the entry is invalid", () => {
    expect(
      isValidPart1({
        lowest: 1,
        highest: 3,
        letter: "b",
        password: "cdefg",
      })
    ).toBe(false);
  });
});

describe("#isValidPart2", () => {
  it("returns true if the entry is valid", () => {
    expect(
      isValidPart2({
        lowest: 1,
        highest: 3,
        letter: "a",
        password: "abcde",
      })
    ).toBe(true);
  });

  it("returns false if the entry is invalid", () => {
    expect(
      isValidPart2({
        lowest: 2,
        highest: 9,
        letter: "c",
        password: "ccccccccc",
      })
    ).toBe(false);
    expect(
      isValidPart2({
        lowest: 1,
        highest: 3,
        letter: "b",
        password: "cdefg",
      })
    ).toBe(false);
  });
});

describe("#readInput", () => {
  it("reads input lines from file", () => {
    expect(readInput("./input.test.txt")).toEqual([
      {
        lowest: 1,
        highest: 3,
        letter: "a",
        password: "abcde",
      },
      {
        lowest: 1,
        highest: 3,
        letter: "b",
        password: "cdefg",
      },
      {
        lowest: 2,
        highest: 9,
        letter: "c",
        password: "ccccccccc",
      },
    ]);
  });
});
