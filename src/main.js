import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/_reset.css";
import "@/assets/styles/base.scss";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
