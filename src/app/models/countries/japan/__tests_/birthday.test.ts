import { test, vi } from "vitest";

import { JapaneseBirthday } from "@/app/models/countries/japan/birthday";

vi.setSystemTime(new Date("2000/04/01 9:00:00"));

test.for([
  ["year", 2001, 4, 1],
  ["month", 2000, 5, 1],
  ["day", 2000, 4, 2],
] as const)(
  "When an invalid %s is provided, throw an exception.(%s/%s/%s)",
  ([expected, year, month, day], { expect }) => {
    expect(() => new JapaneseBirthday(year, month, day)).toThrowError(expected);
  },
);

test.for([
  [1999, 3, 1, 1],
  [1999, 4, 1, 1],
  [1999, 4, 2, 0],
  [1999, 5, 1, 0],
] as const)(
  "Return the correct age.(%s/%s/%s)",
  ([year, month, day, expected], { expect }) => {
    const testee = new JapaneseBirthday(year, month, day);

    const actual = testee.age;

    expect(actual).toBe(expected);
  },
);

test.for([
  ["0001/01/01", 1, 1, 1],
  ["1999/12/31", 1999, 12, 31],
  ["2000/01/01", 2000, 1, 1],
] as const)(
  "Returned birthday is formatted as 'YYYY/MM/DD'.(%s/%s/%s)",
  ([expected, year, month, day], { expect }) => {
    const testee = new JapaneseBirthday(year, month, day);

    const actual = testee.date;

    expect(actual).toBe(expected);
  },
);
