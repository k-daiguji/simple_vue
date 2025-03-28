import type { App } from "vue";

import { themeKey } from "../components/theme";
import { ThemePrimary } from "../components/themePrimary";

export default {
  install: (app: App) => {
    app.provide(themeKey.primary, new ThemePrimary());
  },
};
