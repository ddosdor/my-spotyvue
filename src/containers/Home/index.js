/* Vue container - Home */
import Vue from 'vue';
import store from '@/store';
import { mapGetters, mapActions } from 'vuex';

/* child components */
import WelcomeVue from '@/components/Home/WelcomeVue';

/* container */
const Home = {
  components: { WelcomeVue },
  store,

  computed: {
    ...mapGetters([]),
  },

  methods: {
    ...mapActions([]),
  },

  template: `
    <div class="my-container">
      <WelcomeVue />
    </div>
  `,
};

export default Vue
  .component('Home', Home);
