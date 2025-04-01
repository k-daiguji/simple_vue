<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/base/components/BaseButton.vue";
import BaseIcon from "@/base/components/BaseIcon.vue";
import { Icon } from "@/base/components/icon";
import { Theme } from "@/base/components/theme";
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
    <div class="flex justify-evenly">
      <BaseButton
        v-for="[text, action] in buttons"
        :key="text"
        class="w-26"
        enabled
        :text="text"
        :theme="Theme.primary"
        @click="action"
      />
    </div>
    <p
      class="text-center mt-2"
      :class="Theme.primary"
    >
      {{ counter }}
    </p>
    <BaseIcon :icon="Icon.zoomIn"/>
    <BaseIcon :icon="Icon.zoomOut"/>
    <BaseIcon :icon="Icon.restartAlt"/>
  </div>
</template>