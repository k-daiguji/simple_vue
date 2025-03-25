<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/base/components/BaseButton.vue";
import { useRange } from "@/base/components/useRange";

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