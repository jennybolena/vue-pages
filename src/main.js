import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app')
