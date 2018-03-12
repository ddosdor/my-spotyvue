/* Vue component - SpotySearch */

import { mapActions } from 'vuex';

export default {
  name: 'SpotySearch',
  props: [],

  data() {
    return {
      artist: null,
    };
  },

  methods: {
    ...mapActions(['searchAlbums']),
    submitSearch() {
      this.searchAlbums(this.artist);
    },
  },
};
