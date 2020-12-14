import { readFileSync } from "fs";

export type Passport = {
  [key: string]: string;
};

export function calcAnswerPart1(path: string): number {
  return readInput(path).filter(isValidPart1).length;
}

export function calcAnswerPart2(path: string): number {
  return readInput(path).filter(isValidPart2).length;
}

export function isValidPart1(passport: Passport): boolean {
  const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  return requiredKeys.every((key) => {
    return typeof passport[key] === "string";
  });
}

export function isValidPart2(passport: Passport): boolean {
  return (
    hasValidBirthYear(passport) &&
    hasValidIssueYear(passport) &&
    hasValidExpirationYear(passport) &&
    hasValidHeight(passport) &&
    hasValidHairColor(passport) &&
    hasValidEyeColor(passport) &&
    hasValidId(passport)
  );
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
export function hasValidBirthYear(passport: Passport): boolean {
  return isFourDigitsInRange(passport.byr, 1920, 2002);
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
function hasValidIssueYear(passport: Passport): boolean {
  return isFourDigitsInRange(passport.iyr, 2010, 2020);
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
function hasValidExpirationYear(passport: Passport): boolean {
  return isFourDigitsInRange(passport.eyr, 2020, 2030);
}

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
export function hasValidHeight(passport: Passport): boolean {
  const { hgt } = passport;
  if (typeof hgt === "string") {
    if (hgt.endsWith("cm")) {
      const n = Number(hgt.substring(0, hgt.length - 2));
      return 150 <= n && n <= 193;
    }
    if (hgt.endsWith("in")) {
      const n = Number(hgt.substring(0, hgt.length - 2));
      return 59 <= n && n <= 76;
    }
  }
  return false;
}

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
export function hasValidHairColor(passport: Passport): boolean {
  const { hcl } = passport;
  return (
    typeof hcl === "string" && hcl.length === 7 && /^#[0-9a-f]{6}$/.test(hcl)
  );
}

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
function hasValidEyeColor(passport: Passport): boolean {
  const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  const { ecl } = passport;
  return validEyeColors.includes(ecl);
}

// pid (Passport ID) - a nine-digit number, including leading zeroes.
function hasValidId(passport: Passport) {
  const { pid } = passport;
  return typeof pid === "string" && /^[\d]{9}$/.test(pid);
}

function isFourDigitsInRange(
  value: unknown,
  min: number,
  max: number
): boolean {
  if (typeof value === "string" && value.length === 4 && /^\d+$/.test(value)) {
    const n = Number(value);
    return n >= min && n <= max;
  }
  return false;
}

export function readInput(path: string): Passport[] {
  return readFileSync(path)
    .toString()
    .split(/\n\n/)
    .map((section) => {
      const pairs = section.split(/[\n\s]+/);
      return pairs.reduce<Passport>((passport, pair) => {
        const [key, value] = pair.split(":", 2);
        passport[key] = value;
        return passport;
      }, {});
    });
}
