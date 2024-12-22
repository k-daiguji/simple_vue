import { afterEach, expect, test } from "vitest";
import { enableAutoUnmount, shallowMount } from "@vue/test-utils";
import App from "@/app/components/App.vue";

enableAutoUnmount(afterEach);

test("<h1>", () => {
  const wrapper = shallowMount(App);

  expect(wrapper.text()).toBe("Simple Vue");
});
