import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import Axios from "axios";

import "buefy/dist/buefy.css";

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  Buefy,
  Axios,
  render: h => h(App)
}).$mount("#app");
