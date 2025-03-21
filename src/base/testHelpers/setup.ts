import { VueWrapper } from "@vue/test-utils";

declare module "@vue/test-utils" {
  interface VueWrapper {
    [Symbol.dispose](): void;
  }
}

VueWrapper.prototype[Symbol.dispose] = function () {
  this.unmount();
};
