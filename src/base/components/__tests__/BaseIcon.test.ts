import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseIcon from "../BaseIcon.vue";
import { Icon } from "../icon";

test("Mounted component.", ({ expect }) => {
  const icon = "Test";

  using wrapper = shallowMount(BaseIcon, {
    props: { icon },
  });

  const span = wrapper.find("span");
  expect(span.classes()).toStrictEqual(["material-icons"]);
  expect(span.text()).toBe(icon);
});
