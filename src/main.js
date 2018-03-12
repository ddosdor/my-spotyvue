import Vue from 'vue';
import ElementUI from 'element-ui';
import store from '@/store';
import App from './App';

require('element-ui/lib/theme-chalk/index.css');
require('@/style/theme.sass');

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
