/* Vuex actions for module Spotify */

import { API, API_URL } from '@/config';
import { togglePendingStoreActions } from '@/utils/decorators';

import {
  FILL_ALBUMS_LIST,
} from './mutations-types';

export default {
  @togglePendingStoreActions()
  async searchAlbums({ commit }, artist) {
    const albums = (await API.get(`${API_URL}search=?q=${artist}&type=album`)).body.albums.items;
    commit(FILL_ALBUMS_LIST, { albums });
  },
};
