import { readFileSync } from "fs";

export function calcAnswerPart1(path: string) {
  const [v1, v2] = findPairThatSumsTo2020(readInput(path));
  return v1 * v2;
}

export function calcAnswerPart2(path: string) {
  const [v1, v2, v3] = findTripleThatSumsTo2020(readInput(path));
  return v1 * v2 * v3;
}

export function findPairThatSumsTo2020(values: number[]): [number, number] {
  const result: Array<[number, number]> = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const v1 = values[i];
      const v2 = values[j];
      if (v1 + v2 === 2020) {
        return [v1, v2];
      }
    }
  }
  throw new Error("None of the pairs sum to 2020.");
}

export function findTripleThatSumsTo2020(
  values: number[]
): [number, number, number] {
  const result: Array<[number, number]> = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      for (let k = 0; k < values.length; k++) {
        const v1 = values[i];
        const v2 = values[j];
        const v3 = values[k];
        if (v1 + v2 + v3 === 2020) {
          return [v1, v2, v3];
        }
      }
    }
  }
  throw new Error("None of the triples sum to 2020.");
}

export function readInput(path: string): number[] {
  const text = readFileSync(path).toString();
  const lines = text.split("\n");
  return lines.map((line) => parseInt(line));
}
