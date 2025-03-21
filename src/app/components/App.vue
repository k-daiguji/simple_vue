<script setup lang="ts">
const strings = ["A", "B", "C"];
const numbers = [1, 2, 3];
const zipped = Array.zip(strings, numbers);
const result = new Map<string, unknown>([
  ["First", zipped.first()],
  ["Last", zipped.last()],
]);
</script>

<template>
  <h1>Simple Vue</h1>
  <div
    v-for="[key, values] in result"
    :key="key"
    class="bg-sky-200 hover:bg-sky-400"
  >
    <span>{{ key }}: </span>
    <span>{{ values }}</span>
  </div>
</template>
