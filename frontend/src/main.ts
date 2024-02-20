import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(store);
app.mount("#app");
