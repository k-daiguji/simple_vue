import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/app/components/App.vue";
import CounterArea from "@/app/components/CounterArea.vue";

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(App);

  expect(wrapper.findComponent(CounterArea).props()).toStrictEqual({});
});
