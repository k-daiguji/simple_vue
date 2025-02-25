<script setup lang="ts">
import type { CountryConstructor } from "@/base";
import { computed, inject, ref } from "vue";

const countries = inject<CountryConstructor[]>("countries");

const countryName = ref(countries?.first()?.name ?? "");
const country = computed(() => {
  const countryConstructor = countries?.find(c => c.name === countryName.value);
  return countryConstructor ? new countryConstructor() : undefined;
});
const now = ref(country.value?.now ?? "");
setInterval(() => {
  now.value = country.value?.now ?? "";
}, 1000);
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
  <h2>{{ now }}</h2>
  <div
    v-for="[key, values] in result"
    :key="key"
  >
    <span>{{ key }}: </span>
    <span>{{ values }}</span>
  </div>
</template>
