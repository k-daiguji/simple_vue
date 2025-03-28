<script setup lang="ts">
import { inject, ref } from "vue";

import BaseButton from "@/base/components/BaseButton.vue";
import { useRange } from "@/base/components/useRange";
import type { Theme } from "@/base/components/theme";
import { themeKey } from "@/base/components/theme";

const theme = inject(themeKey.primary) as Theme;

const counter = ref(0);
const { decrement, increment, reset } = useRange(counter, 10, -10, 0);
const buttons = new Map([
  ["Increment", increment],
  ["Decrement", decrement],
  ["Reset", reset],
]);
</script>

<template>
  <div>
    <div class="flex justify-evenly">
      <BaseButton
        v-for="[text, action] in buttons"
        :key="text"
        class="w-26"
        enabled
        :text="text"
        :theme="theme"
        @click="action"
      />
    </div>
    <p
      class="text-center mt-2"
      :class="theme.class"
    >
      {{ counter }}
    </p>
  </div>
</template>