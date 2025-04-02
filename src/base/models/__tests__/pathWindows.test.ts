import { test } from "vitest";

import { WindowsPath } from "../pathWindows";

test("When an invalid folder path is provided, throw an exception.", ({
  expect,
}) => {
  expect(() => WindowsPath.create("", "dummy.txt")).toThrowError(
    "Folder path must be at least 1 character.",
  );
});

test("When an invalid filename is provided, throw an exception.", ({
  expect,
}) => {
  expect(() => WindowsPath.create("C:\\path", "")).toThrowError(
    "Filename must be at least 1 character.",
  );
});

test("Returned full path.", ({ expect }) => {
  const path = WindowsPath.create("C:\\path", "dummy.txt");

  const actual = path.full;

  expect(actual).toBe("C:\\path\\dummy.txt");
});

test("Returned folder path.", ({ expect }) => {
  const path = WindowsPath.create("C:\\path", "dummy.txt");

  const actual = path.folder;

  expect(actual).toBe("C:\\path");
});

test("Returned filename.", ({ expect }) => {
  const path = WindowsPath.create("C:\\path", "dummy.txt");

  const actual = path.filename;

  expect(actual).toBe("dummy.txt");
});
