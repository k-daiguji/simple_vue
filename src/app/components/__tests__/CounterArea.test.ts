import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import CounterArea from "@/app/components/CounterArea.vue";
import BaseButton from "@/base/components/BaseButton.vue";

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(CounterArea);

  const [incrementButton, decrementButton, resetButton] =
    wrapper.findAllComponents(BaseButton);
  expect(incrementButton.props()).toStrictEqual({
    enabled: true,
    text: "Increment",
  });
  expect(decrementButton.props()).toStrictEqual({
    enabled: true,
    text: "Decrement",
  });
  expect(resetButton.props()).toStrictEqual({
    enabled: true,
    text: "Reset",
  });
  expect(wrapper.find("span").text()).toBe("0");
});

test("When the user presses the 'increment' button, the value of the counter increases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [incrementButton] = wrapper.findAllComponents(BaseButton);

  await incrementButton.trigger("click");

  expect(wrapper.find("span").text()).toBe("1");
});

test("When the user presses the 'decrement' button, the value of the counter decreases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [, decrementButton] = wrapper.findAllComponents(BaseButton);

  await decrementButton.trigger("click");

  expect(wrapper.find("span").text()).toBe("-1");
});

test("When the user presses the 'reset' button, the value of the counter is reset to 0.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [incrementButton, , resetButton] =
    wrapper.findAllComponents(BaseButton);
  await incrementButton.trigger("click");

  await resetButton.trigger("click");

  expect(wrapper.find("span").text()).toBe("0");
});
