<template>
  <div id="app">
    <LayoutHeader />
    <Timetracker />
    <Modals />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LayoutHeader from './components/layout/layout_header/layout_header';
import Timetracker from './components/timetracker/timetracker';
import Modals from './components/modals/modals';

export default {
  components: { LayoutHeader, Timetracker, Modals },

  mounted() {
    this.initUser();
    if (!this.currentUserId) { this.toggleModal('modals_signin'); }
  },

  computed: {
    ...mapGetters([
      'currentUser',
      'currentUserId',
    ]),
  },

  methods: {
    ...mapActions([
      'initUser',
      'toggleModal',
    ]),
  },
};
</script>

<style>
  * {
    box-sizing: border-box;
    transition: all .2s;
  }

  #app {
    font-family: 'PT Sans', arial, sans-serif;
  }
</style>
