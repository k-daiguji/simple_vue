import { describe, expect, test } from "vitest";
import "@/base/extensions";

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const booleans = [true, false, false];

describe("Array constructor extensions", () => {
  test("zip: same length", () => {
    const actual = Array.zip(numbers, strings, booleans);

    expect(actual).toStrictEqual([
      [1, "a", true],
      [2, "b", false],
      [3, "c", false],
    ]);
  });

  test.for<[string, number[], string[], boolean[]]>([
    ["array1", [1, 2], strings, booleans],
    ["array2", numbers, ["a", "b"], booleans],
    ["array3", numbers, strings, [true, false]],
  ])("zip: %s", ([, numbers, strings, booleans]) => {
    const actual = Array.zip(numbers, strings, booleans);

    expect(actual).toStrictEqual([
      [1, "a", true],
      [2, "b", false],
    ]);
  });
});

describe("Array.prototype extensions", () => {
  test.for<[unknown, unknown[]]>([
    [undefined, []],
    [1, numbers],
    ["a", strings],
    [true, booleans],
  ])("first: %s", ([expected, inputs]) => {
    expect(inputs.first()).toBe(expected);
  });

  test.for<[boolean, unknown[]]>([
    [true, []],
    [false, numbers],
  ])("isEmpty: %s", ([expected, input]) => {
    expect(input.isEmpty()).toBe(expected);
  });

  test.for<[unknown, unknown[]]>([
    [undefined, []],
    [3, numbers],
    ["c", strings],
    [false, booleans],
  ])("last: %s", ([expected, inputs]) => {
    expect(inputs.last()).toBe(expected);
  });
});
