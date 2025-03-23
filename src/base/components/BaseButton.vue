<script setup lang="ts">
import { computed, useTemplateRef } from "vue";

import { Ripple } from "./effectRipple";

const { enabled = true } = defineProps<{ text: string; enabled?: boolean }>();
defineEmits<{ click: [] }>();

const button = useTemplateRef<HTMLButtonElement>("button");
const ripple = computed(() => new Ripple(button.value));
</script>

<template>
  <button
    ref="button"
    class="
      h-8
      overflow-hidden
      relative
      rounded-full
    "
    type="button"
    :disabled="!enabled"
    @click="(e) => {
      ripple.trigger(e);
      $emit('click');
    }"
  >
    {{ text }}
  </button>
</template>
