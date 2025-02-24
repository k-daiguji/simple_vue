import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test as base, expect } from "vitest";

import App from "@/app/components/App.vue";

const test = base.extend<{ wrapper: VueWrapper }>({
  wrapper: async ({ expect }, use) => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
    await use(wrapper);
    wrapper.unmount();
  },
});

test("Mounted component.", ({ wrapper }) => {
  expect(wrapper.find("h1").text()).toBe("Simple Vue");
  const rows = wrapper.findAll("div");
  expect(rows.length).toBe(2);
  const [first, last] = rows;
  expect(first.text()).toBe('First: [\n  "A",\n  1\n]');
  expect(last.text()).toBe('Last: [\n  "C",\n  3\n]');
});
