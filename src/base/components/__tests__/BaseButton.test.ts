import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "../BaseButton.vue";
import type { Theme } from "../theme";

const theme = { class: "dummy" } satisfies Theme;

test("Mounted enabled component.", ({ expect }) => {
  const text = "Test";

  using wrapper = shallowMount(BaseButton, {
    props: { enabled: true, text, theme },
  });

  const button = wrapper.find("button");
  expect(button.attributes()).toStrictEqual({
    class: `h-8 rounded-full w-full ${theme.class}`,
    type: "button",
  });
  expect(button.text()).toBe(text);
});

test("Mounted disabled component.", ({ expect }) => {
  const text = "Test";

  using wrapper = shallowMount(BaseButton, {
    props: { enabled: false, text, theme },
  });

  const button = wrapper.find("button");
  expect(button.attributes()).toStrictEqual({
    class: `h-8 rounded-full w-full ${theme.class}`,
    disabled: "",
    type: "button",
  });
  expect(button.text()).toBe(text);
});

test("When the button is clicked, the click event is emitted.", async ({
  expect,
}) => {
  using wrapper = shallowMount(BaseButton, {
    props: { enabled: true, text: "Test", theme },
  });

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted()).toStrictEqual({
    click: [[]],
  });
});
