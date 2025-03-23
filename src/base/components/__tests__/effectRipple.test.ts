import { assert, test } from "vitest";

import { Ripple } from "../effectRipple";

test("When the button element is null, an exception is thrown.", ({
  expect,
}) => {
  expect(() => new Ripple(null)).toThrowError("The button is null.");
});

test.for([
  [100, 200],
  [200, 100],
])(
  "When an element's event is triggered, add a ripple to the element.",
  ([height, width], { expect }) => {
    Object.defineProperty(HTMLButtonElement.prototype, "clientHeight", {
      configurable: true,
      value: height,
    });
    Object.defineProperty(HTMLButtonElement.prototype, "clientWidth", {
      configurable: true,
      value: width,
    });
    const button = document.createElement("button");

    new Ripple(button).trigger(
      new MouseEvent("click", { clientX: 10, clientY: 20 }),
    );

    expect(button.children.length).toBe(1);
    for (const child of button.children) {
      if (child instanceof HTMLSpanElement) {
        expect(child.className).toBe("ripple");
        expect(child.style.height).toBe("200px");
        expect(child.style.width).toBe("200px");
        expect(child.style.top).toBe("-80px");
        expect(child.style.left).toBe("-90px");
      } else {
        assert.fail("The element is not an HTMLSpanElement.");
      }
    }
  },
);
