import { test } from "vitest";
import { ThemePrimary } from "../themePrimary";

test("Returned class name.", ({ expect }) => {
  const theme = new ThemePrimary();

  const actual = theme.class;

  expect(actual).toBe("theme-primary");
});
