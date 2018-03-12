/* Vuex module - Spotify */

import actions from './actions';
import mutations from './mutations';

const INITIAL_STATE = {
  albums: [],
  artists: [],
};

const getters = {
  spotifyAlbums: state => state.albums,
  spotifyArtists: state => state.artists,
};

// VUEX MODULE /////////////////////////////////////////////////////////////////
export default {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters,
};
