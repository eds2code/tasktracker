<template>
  <div id="app">
    <AppHeader />
    <Timetracker />
    <Modals />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppHeader from './components/app_header/app_header';
import Timetracker from './components/timetracker/timetracker';
import Modals from './components/modals/modals';

export default {
  components: { AppHeader, Timetracker, Modals },

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
