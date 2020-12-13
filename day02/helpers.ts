import { readFileSync } from "fs";

interface Entry {
  highest: number;
  letter: string;
  lowest: number;
  password: string;
}

export function calcAnswerPart1(path: string): number {
  return readInput(path).filter(isValidPart1).length;
}

export function calcAnswerPart2(path: string): number {
  return readInput(path).filter(isValidPart2).length;
}

export function isValidPart1(entry: Entry): boolean {
  const count = entry.password
    .split("")
    .filter((character) => character === entry.letter).length;
  return count >= entry.lowest && count <= entry.highest;
}

export function isValidPart2(entry: Entry): boolean {
  const l1 = entry.password[entry.lowest - 1] === entry.letter;
  const l2 = entry.password[entry.highest - 1] === entry.letter;
  return (l1 && !l2) || (!l1 && l2);
}

export function readInput(path: string): Entry[] {
  const lines = readFileSync(path).toString().split("\n");
  return lines.map((line) => {
    const [policy, password] = line.split(": ", 2);
    const [range, letter] = policy.split(" ");
    const [lowest, highest] = range.split("-").map((s) => parseInt(s));
    return {
      highest,
      letter,
      lowest,
      password,
    };
  });
}
