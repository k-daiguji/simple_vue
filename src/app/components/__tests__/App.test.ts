import App from "@/app/components/App.vue";
import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test as base, expect } from "vitest";

const test = base.extend<{ wrapper: VueWrapper }>({
  wrapper: async ({ expect }, use) => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
    await use(wrapper);
    wrapper.unmount();
  },
});

test("onMounted", ({ wrapper }) => {
  expect(wrapper.text()).toBe("Simple Vue");
});
