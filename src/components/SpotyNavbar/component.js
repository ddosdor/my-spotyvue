/* Vue component - SpotyNavbar */

import { API_URL, SPOTYFIY } from '@/config';

export default {
  name: 'SpotyNavbar',

  methods: {
    loginWithSpotify() {
      window.location.replace(`https://accounts.spotify.com/authorize/?client_id=${SPOTYFIY.CLIENT_ID}s&response_type=code&redirect_uri=${SPOTYFIY.REDIRECT_URI}`);
    },
  },
};
