import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import CounterArea from "@/app/components/CounterArea.vue";
import BaseButton from "@/base/components/BaseButton.vue";
import { Theme } from "@/base/components/theme";

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(CounterArea);

  const texts = ["Increment", "Decrement", "Reset"];
  const buttons = wrapper.findAllComponents(BaseButton);
  for (const [text, button] of Array.zip(texts, buttons)) {
    expect(button.props()).toStrictEqual({
      enabled: true,
      text,
      theme: Theme.primary,
    });
  }
  expect(wrapper.find("p").text()).toBe("0");
});

test("When the user presses the 'increment' button, the value of the counter increases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [incrementButton] = wrapper.findAllComponents(BaseButton);

  await incrementButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("1");
});

test("When the user presses the 'decrement' button, the value of the counter decreases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [, decrementButton] = wrapper.findAllComponents(BaseButton);

  await decrementButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("-1");
});

test("When the user presses the 'reset' button, the value of the counter is reset to 0.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea);
  const [incrementButton, , resetButton] =
    wrapper.findAllComponents(BaseButton);
  await incrementButton.trigger("click");

  await resetButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("0");
});
