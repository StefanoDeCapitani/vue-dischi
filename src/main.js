import Vue from "vue";
import App from "./App.vue";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
