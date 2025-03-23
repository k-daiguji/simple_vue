<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/base/components/BaseButton.vue";

const counter = ref(0);
const buttons = new Map([
  ["Increment", () => counter.value++],
  ["Decrement", () => counter.value--],
  [
    "Reset",
    () => {
      counter.value = 0;
    },
  ],
]);
</script>

<template>
  <div>
    <div>
      <BaseButton
        v-for="[text, action] in buttons"
        :key="text"
        class="bg-theme-main hover text-theme-main w-24"
        :text="text"
        @click="action"
      />
    </div>
    <div>
      <span class="text-theme-main">{{ counter }}</span>
    </div>
  </div>
</template>