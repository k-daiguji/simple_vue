import { createApp } from "vue";

import "@/base/extensions";
import App from "@/app/components/App.vue";
import theme from "@/base/plugins/theme";

createApp(App).use(theme).mount("#app");
