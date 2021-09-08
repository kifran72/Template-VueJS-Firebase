import Vue from "vue";
import router from "./router";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
Vue.use(VueMaterial);

import VueNoty from "vuejs-noty";
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: "topRight",
});

import App from "./App.vue";
let app = null;
Vue.config.productionTip = false;

import { auth } from "@/firebase";
auth.onAuthStateChanged(() => {
  // Mount app only after firebase auth initialized
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
