import { describe, test } from "vitest";
import { ref } from "vue";

import { useRange } from "../useRange";

describe("Number constructor extensions", () => {
  test.for([
    [-0.1, -0.2],
    [-0.2, -0.3],
    [-0.3, -0.4],
    [-0.4, -0.5],
    [-0.5, -0.6],
    [-0.6, -0.7],
    [-0.7, -0.8],
    [-0.8, -0.9],
    [-0.9, -1],
    [-1, -1],
  ])("decrement(%s -> %s)", ([initializeValue, expected], { expect }) => {
    const input = ref(initializeValue);
    const { decrement } = useRange(input, 1, -1, 0, 0.1);

    decrement();

    expect(input.value).toBe(expected);
  });

  test.for([
    [0.1, 0.2],
    [0.2, 0.3],
    [0.3, 0.4],
    [0.4, 0.5],
    [0.5, 0.6],
    [0.6, 0.7],
    [0.7, 0.8],
    [0.8, 0.9],
    [0.9, 1],
    [1, 1],
  ])("increment(%s -> %s)", ([initializeValue, expected], { expect }) => {
    const input = ref(initializeValue);
    const { increment } = useRange(input, 1, -1, 0, 0.1);

    increment();

    expect(input.value).toBe(expected);
  });

  test("reset", ({ expect }) => {
    const input = ref(0);
    const { reset } = useRange(input, 10, 0, 5);

    reset();

    expect(input.value).toBe(5);
  });
});
