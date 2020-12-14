import {
  calcAnswerPart1,
  hasValidBirthYear,
  hasValidHairColor,
  hasValidHeight,
  isValidPart1,
  isValidPart2,
  readInput,
} from "./helpers";

describe("#calcAnswerPart1", () => {
  it("calcuates the answer to part 1", () => {
    expect(calcAnswerPart1("./input.test.txt")).toBe(2);
  });
});

describe("#isValidPart1", () => {
  it("checks if passports are valid", () => {
    expect(
      isValidPart1({
        ecl: "gry",
        pid: "860033327",
        eyr: "2020",
        hcl: "#fffffd",
        byr: "1937",
        iyr: "2017",
        cid: "147",
        hgt: "183cm",
      })
    ).toBe(true);
    expect(
      isValidPart1({
        iyr: "2013",
        ecl: "amb",
        cid: "350",
        eyr: "2023",
        pid: "028048884",
        hcl: "#cfa07d",
        byr: "1929",
      })
    ).toBe(false);
    expect(
      isValidPart1({
        hcl: "#ae17e1",
        iyr: "2013",
        eyr: "2024",
        ecl: "brn",
        pid: "760753108",
        byr: "1931",
        hgt: "179cm",
      })
    ).toBe(true);
    expect(
      isValidPart1({
        hcl: "#cfa07d",
        eyr: "2025",
        pid: "166559648",
        iyr: "2011",
        ecl: "brn",
        hgt: "59in",
      })
    ).toBe(false);
  });
});

describe("#isValidPart2", () => {
  it("returns true for valid passports", () => {
    expect(
      isValidPart2({
        pid: "087499704",
        hgt: "74in",
        ecl: "grn",
        iyr: "2012",
        eyr: "2030",
        byr: "1980",
        hcl: "#623a2f",
      })
    ).toBe(true);
    expect(
      isValidPart2({
        eyr: "2029",
        ecl: "blu",
        cid: "129",
        byr: "1989",
        iyr: "2014",
        pid: "896056539",
        hcl: "#a97842",
        hgt: "165cm",
      })
    ).toBe(true);
    expect(
      isValidPart2({
        hcl: "#888785",
        hgt: "164cm",
        byr: "2001",
        iyr: "2015",
        cid: "88",
        pid: "545766238",
        ecl: "hzl",
        eyr: "2022",
      })
    ).toBe(true);
    expect(
      isValidPart2({
        iyr: "2010",
        hgt: "158cm",
        hcl: "#b6652a",
        ecl: "blu",
        byr: "1944",
        eyr: "2021",
        pid: "093154719",
      })
    ).toBe(true);
  });
  it("returns false for invalid passports", () => {
    expect(
      isValidPart2({
        eyr: "1972",
        cid: "100",
        hcl: "#18171d",
        ecl: "amb",
        hgt: "170",
        pid: "186cm",
        iyr: "2018",
        byr: "1926",
      })
    ).toBe(false);
    expect(
      isValidPart2({
        iyr: "2019",
        hcl: "#602927",
        eyr: "1967",
        hgt: "170cm",
        ecl: "grn",
        pid: "012533040",
        byr: "1946",
      })
    ).toBe(false);
    expect(
      isValidPart2({
        hcl: "dab227",
        iyr: "2012",
        ecl: "brn",
        hgt: "182cm",
        pid: "021572410",
        eyr: "2020",
        byr: "1992",
        cid: "277",
      })
    ).toBe(false);
    expect(
      isValidPart2({
        hgt: "59cm",
        ecl: "zzz",
        eyr: "2038",
        hcl: "74454a",
        iyr: "2023",
        pid: "3556412378",
        byr: "2007",
      })
    ).toBe(false);
  });
});

test("#hasValidBirthYear", () => {
  expect(
    hasValidBirthYear({
      byr: "2002",
    })
  ).toBe(true);
  expect(
    hasValidBirthYear({
      byr: "2003",
    })
  ).toBe(false);
});

test("#hasValidHairColor", () => {
  expect(
    hasValidHairColor({
      hcl: "#123abc",
    })
  ).toBe(true);
  expect(
    hasValidHairColor({
      hcl: "#123abz",
    })
  ).toBe(false);
  expect(
    hasValidHairColor({
      hcl: "123abc",
    })
  ).toBe(false);
});

test("hasValidHeight", () => {
  expect(
    hasValidHeight({
      hgt: "60in",
    })
  ).toBe(true);
  expect(
    hasValidHeight({
      hgt: "190cm",
    })
  ).toBe(true);
  expect(
    hasValidHeight({
      hgt: "190in",
    })
  ).toBe(false);
  expect(
    hasValidHeight({
      hgt: "190",
    })
  ).toBe(false);
});

describe("#readInput", () => {
  it("parses the input file", () => {
    expect(readInput("./input.test.txt")).toEqual([
      {
        ecl: "gry",
        pid: "860033327",
        eyr: "2020",
        hcl: "#fffffd",
        byr: "1937",
        iyr: "2017",
        cid: "147",
        hgt: "183cm",
      },
      {
        iyr: "2013",
        ecl: "amb",
        cid: "350",
        eyr: "2023",
        pid: "028048884",
        hcl: "#cfa07d",
        byr: "1929",
      },
      {
        hcl: "#ae17e1",
        iyr: "2013",
        eyr: "2024",
        ecl: "brn",
        pid: "760753108",
        byr: "1931",
        hgt: "179cm",
      },
      {
        hcl: "#cfa07d",
        eyr: "2025",
        pid: "166559648",
        iyr: "2011",
        ecl: "brn",
        hgt: "59in",
      },
    ]);
  });
});
