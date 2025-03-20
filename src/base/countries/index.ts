import type { Plugin } from "vue";

import { Japan } from "@/base/countries/japan";

export const countries = {
  install(app) {
    app.provide<CountryConstructor[]>("countries", [Japan]);
  },
} satisfies Plugin;

export interface CountryConstructor {
  new (): Country;
  get name(): string;
}

export interface Country {
  get now(): string;
}

export interface Name {
  get fullName(): string;
}

export interface Birthday {
  get age(): number;
  get date(): string;
}
