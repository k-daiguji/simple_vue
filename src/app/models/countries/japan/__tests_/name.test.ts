import { test } from "vitest";

import { JapaneseName } from "@/app/models/countries/japan/name";

const fullWidth = {
  space: "\u3000",
  0: "\u{ff10}",
  9: "\u{ff19}",
  uppercaseA: "\u{ff21}",
  uppercaseZ: "\u{ff3a}",
  a: "\u{ff41}",
  z: "\u{ff5a}",
} as const;
const invalidCases = [
  ["Invalid name: ", ""],
  ["Invalid name: A", "A"],
  ["Invalid name: Z", "Z"],
  ["Invalid name: a", "a"],
  ["Invalid name: z", "z"],
  ["Invalid name: 0", "0"],
  ["Invalid name: 9", "9"],
  [`Invalid name: ${fullWidth[0]}`, fullWidth[0]],
  [`Invalid name: ${fullWidth[9]}`, fullWidth[9]],
  [`Invalid name: ${fullWidth.uppercaseA}`, fullWidth.uppercaseA],
  [`Invalid name: ${fullWidth.uppercaseZ}`, fullWidth.uppercaseZ],
  [`Invalid name: ${fullWidth.a}`, fullWidth.a],
  [`Invalid name: ${fullWidth.z}`, fullWidth.z],
  ["Invalid name: ｱ", "ｱ"],
  ["Invalid name: ﾝ", "ﾝ"],
] as const;
const validCases = [
  [`あ${fullWidth.space}ん`, "あ", "ん"],
  [`ア${fullWidth.space}ン`, "ア", "ン"],
  [`一${fullWidth.space}龠`, "一", "龠"],
] as const;

test.for(invalidCases)(
  "When an invalid family name is provided, throw an exception.(%s)",
  ([expected, familyName], { expect }) => {
    expect(() => new JapaneseName(familyName, "あ")).toThrowError(expected);
  },
);

test.for(invalidCases)(
  "When an invalid first name is provided, throw an exception.(%s)",
  ([expected, firstName], { expect }) => {
    expect(() => new JapaneseName("あ", firstName)).toThrowError(expected);
  },
);

test.for(validCases)(
  "Returned full name.(%s)",
  ([expected, familyName, firstName], { expect }) => {
    const testee = new JapaneseName(familyName, firstName);

    const actual = testee.fullName;

    expect(actual).toBe(expected);
  },
);
