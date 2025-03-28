<script setup lang="ts">
import type { Theme } from "./theme";

defineProps<{
  enabled: boolean;
  text: string;
  theme: Theme;
}>();
defineEmits<{ click: [] }>();
</script>

<template>
  <div>
    <button
      ref="button"
      class="
        h-8
        rounded-full
        w-full
      "
      :class="theme.class"
      type="button"
      :disabled="!enabled"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </div>
</template>
