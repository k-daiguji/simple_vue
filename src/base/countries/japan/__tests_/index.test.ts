import { test as base, vi } from "vitest";

import { Japan } from "@/base/countries/japan";

const test = base.extend<{ testee: Japan }>({
  testee: async ({ expect }, use) => {
    const japan = new Japan();
    expect(japan).toBeInstanceOf(Japan);
    await use(japan);
  },
});

test("Returned country name.", ({ expect }) => {
  expect(Japan.name).toBe("Japan");
});

test("Returned current time in Japan format.", ({ expect, testee }) => {
  const time = "2000/01/01 09:00:00";
  const spy = vi
    .spyOn(Date.prototype, "toLocaleString")
    .mockReturnValueOnce(time);

  const actual = testee.now;

  expect(spy).toHaveBeenCalledOnce();
  expect(spy).toHaveBeenCalledWith("ja", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  expect(actual).toBe(time);
});
