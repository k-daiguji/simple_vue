import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "../BaseButton.vue";

test("Mounted enabled component.", ({ expect }) => {
  const text = "Test";

  using wrapper = shallowMount(BaseButton, { props: { text } });

  const button = wrapper.find("button");
  expect(button.attributes()).toStrictEqual({
    class: "h-8 overflow-hidden relative rounded-full",
    type: "button",
  });
  expect(button.text()).toBe(text);
});

test("Mounted enabled component.", ({ expect }) => {
  const text = "Test";

  using wrapper = shallowMount(BaseButton, { props: { enabled: true, text } });

  const button = wrapper.find("button");
  expect(button.attributes()).toStrictEqual({
    class: "h-8 overflow-hidden relative rounded-full",
    type: "button",
  });
  expect(button.text()).toBe(text);
});

test("Mounted disabled component.", ({ expect }) => {
  const text = "Test";

  using wrapper = shallowMount(BaseButton, { props: { enabled: false, text } });

  const button = wrapper.find("button");
  expect(button.attributes()).toStrictEqual({
    class: "h-8 overflow-hidden relative rounded-full",
    disabled: "",
    type: "button",
  });
  expect(button.text()).toBe(text);
});

test("When the button is clicked, the click event is emitted.", async ({
  expect,
}) => {
  using wrapper = shallowMount(BaseButton, {
    props: { text: "Test" },
  });

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted()).toStrictEqual({
    click: [[]],
  });
});
