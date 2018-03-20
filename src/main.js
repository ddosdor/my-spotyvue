import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import App from './App';

require('@/style/theme.sass');

Vue.config.productionTip = false;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
