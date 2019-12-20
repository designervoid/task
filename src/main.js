import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from "buefy";

import "./main.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faCog, faCubes, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe, faCog, faCubes, faSignOutAlt);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
