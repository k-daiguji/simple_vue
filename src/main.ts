import { createApp } from "vue";

import "@/base/extensions";
import App from "@/app/components/App.vue";
import { countries } from "@/base/countries";

createApp(App).use(countries).mount("#app");
