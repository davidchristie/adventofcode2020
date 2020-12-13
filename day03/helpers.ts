import { readFileSync } from "fs";

const TREE_SYMBOL = "#";

export function calcAnswerPart1(path: string): number {
  return countTrees(readInput(path), 3, 1);
}

export function calcAnswerPart2(path: string): number {
  return (
    countTrees(readInput(path), 1, 1) *
    countTrees(readInput(path), 3, 1) *
    countTrees(readInput(path), 5, 1) *
    countTrees(readInput(path), 7, 1) *
    countTrees(readInput(path), 1, 2)
  );
}

export function countTrees(
  slope: boolean[][],
  right: number,
  down: number
): number {
  let trees = 0;
  for (let i = 0; i < slope.length; i++) {
    const x = down * i;
    if (x >= slope.length) {
      break;
    }
    const y = (i * right) % slope[x].length;
    if (slope[x][y]) {
      trees++;
    }
  }
  return trees;
}

export function readInput(path: string): boolean[][] {
  const lines = readFileSync(path).toString().split("\n");
  return lines.map((line) => {
    return line.split("").map((character) => character === TREE_SYMBOL);
  });
}
