import { createPinia } from "pinia";
import { useAuthStore } from "../store/auth.store";
import { type App } from "vue";

const store = createPinia();

export default {
  install(app: App) {
    app.use(store);
    useAuthStore();
  },
};
