import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import CounterArea from "@/app/components/CounterArea.vue";
import BaseButton from "@/base/components/BaseButton.vue";
import { type Theme, themeKey } from "@/base/components/theme";

const theme = { class: "dummy" } satisfies Theme;

test("Mounted component.", ({ expect }) => {
  using wrapper = shallowMount(CounterArea, {
    global: { provide: { [themeKey.primary]: theme } },
  });

  const texts = ["Increment", "Decrement", "Reset"];
  const buttons = wrapper.findAllComponents(BaseButton);
  for (const [text, button] of Array.zip(texts, buttons)) {
    expect(button.props()).toStrictEqual({
      enabled: true,
      text,
      theme,
    });
  }
  expect(wrapper.find("p").text()).toBe("0");
});

test("When the user presses the 'increment' button, the value of the counter increases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea, {
    global: { provide: { [themeKey.primary]: theme } },
  });
  const [incrementButton] = wrapper.findAllComponents(BaseButton);

  await incrementButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("1");
});

test("When the user presses the 'decrement' button, the value of the counter decreases by 1.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea, {
    global: { provide: { [themeKey.primary]: theme } },
  });
  const [, decrementButton] = wrapper.findAllComponents(BaseButton);

  await decrementButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("-1");
});

test("When the user presses the 'reset' button, the value of the counter is reset to 0.", async ({
  expect,
}) => {
  using wrapper = shallowMount(CounterArea, {
    global: { provide: { [themeKey.primary]: theme } },
  });
  const [incrementButton, , resetButton] =
    wrapper.findAllComponents(BaseButton);
  await incrementButton.trigger("click");

  await resetButton.trigger("click");

  expect(wrapper.find("p").text()).toBe("0");
});
