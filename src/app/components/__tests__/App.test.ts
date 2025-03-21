import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/app/components/App.vue";

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(App);

  expect(wrapper.find("h1").text()).toBe("Simple Vue");
  const rows = wrapper.findAll("div");
  expect(rows.length).toBe(2);
  const [first, last] = rows;
  expect(first.text()).toBe('First: [\n  "A",\n  1\n]');
  expect(last.text()).toBe('Last: [\n  "C",\n  3\n]');
});
