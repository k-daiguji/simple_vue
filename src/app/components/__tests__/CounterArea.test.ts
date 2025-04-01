import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import CounterArea from "@/app/components/CounterArea.vue";
import BaseButton from "@/base/components/BaseButton.vue";
import BaseIcon from "@/base/components/BaseIcon.vue";
import { Icon } from "@/base/components/icon";
import { Theme } from "@/base/components/theme";

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(CounterArea);

  for (const [button, expected] of Array.zip(
    wrapper.findAllComponents(BaseButton),
    ["Increment", "Decrement", "Reset"],
  )) {
    expect(button.props()).toStrictEqual({
      enabled: true,
      text: expected,
      theme: Theme.primary,
    });
  }
  expect(wrapper.find("p").text()).toBe("0");
  for (const [icon, expected] of Array.zip(
    wrapper.findAllComponents(BaseIcon),
    [Icon.zoomIn, Icon.zoomOut, Icon.restartAlt],
  )) {
    expect(icon.props()).toStrictEqual({ icon: expected });
  }
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
