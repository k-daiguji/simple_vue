<script setup lang="ts">
import type { Icon } from "./icon";

defineProps<{ icon: Icon }>();
</script>

<template>
  <span class="material-icons">{{ icon }}</span>
</template>