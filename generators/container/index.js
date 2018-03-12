/* Vue container - <%= upCaseName %> */
import Vue from 'vue';
import store from '@/store';
import { mapGetters, mapActions } from 'vuex';

/* child components */
// example --- import ExampleComponent from '@/components/ExampleComponent';

/* container */
const <%= upCaseName %> = {
  components: { },
  store,

  computed: {
    ...mapGetters([]),
  },

  methods: {
    ...mapActions([])
  },

  template: `
    <div class="my-container">
      Container <%= upCaseName %>
    </div>
  `,
};

export default Vue
  .component('<%= upCaseName %>', <%= upCaseName %>);