import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbvue/build/css/mdb.css';
import 'mdbvue/src/components/Waves.css';

import store from '@/store';
import App from './App';

import './mdb';

require('@/style/theme.sass');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
