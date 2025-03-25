import type { Ref } from "vue";

export const useRange = (
  input: Ref<number>,
  max: number,
  min: number,
  defaultValue: number,
  step = 1,
) => {
  const [, decimal = "0"] = step.toString().split(".");
  const precision = decimal.length;
  const round = (value: number) => Number(value.toFixed(precision));

  const decrement = () => {
    const newValue = round(input.value - step);
    input.value = Math.max(newValue, min);
  };

  const increment = () => {
    const newValue = round(input.value + step);
    input.value = Math.min(newValue, max);
  };

  const reset = () => {
    input.value = defaultValue;
  };

  return { decrement, increment, reset };
};
