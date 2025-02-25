import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test as base } from "vitest";

import App from "@/app/components/App.vue";
import type { Country } from "@/base";

class CountryA implements Country {
  public static name = "A";
  public get now() {
    return "2000/01/01 00:00:00";
  }
}

const test = base.extend<{ wrapper: VueWrapper }>({
  wrapper: async ({ expect }, use) => {
    const wrapper = shallowMount(App, {
      global: {
        provide: {
          countries: [CountryA],
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    await use(wrapper);
    wrapper.unmount();
  },
});

test("Mounted component.", ({ expect, wrapper }) => {
  expect(wrapper.find("h1").text()).toBe("Simple Vue");
  expect(wrapper.find("h2").text()).toBe("2000/01/01 00:00:00");
  const rows = wrapper.findAll("div");
  expect(rows.length).toBe(2);
  const [first, last] = rows;
  expect(first.text()).toBe('First: [\n  "A",\n  1\n]');
  expect(last.text()).toBe('Last: [\n  "C",\n  3\n]');
});
