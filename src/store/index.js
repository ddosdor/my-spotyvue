/* Vuex store */
import Vue from 'vue';
import Vuex from 'vuex';

// MODULES /////////////////////////////////////////////////////////////////////
import App from './modules/App';
import Spotify from './modules/Spotify';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    App, Spotify,
  },
  strict: !process.env.DEBUG_MODE,
});
