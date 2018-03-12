/* Vuex mutations types for module Spotify */

import {
  FILL_ALBUMS_LIST,
} from './mutations-types';

export default {
  [FILL_ALBUMS_LIST](state, payload) {
    const _state = state;
    _state.albums = payload.albums.map((album) => {
      const _album = {
        id: album.id,
        type: album.type,
        name: album.name,
        image: album.images[0].url,
      };

      return _album;
    });
  },
};
