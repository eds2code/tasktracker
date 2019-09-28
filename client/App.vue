<template>
  <div id="app">
    <LayoutHeader />
    <Yield />
    <Modals />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Yield from './components/layout/yield';
import LayoutHeader from './components/layout/layout_header/layout_header';
import Modals from './components/layout/modals/modals';


export default {
  components: { LayoutHeader, Yield, Modals },

  mounted() {
    this.initUser();
    this.checkUserAndGuardRoute();
  },

  watch: {
    currentUser() {
      this.checkUserAndGuardRoute();
    },
    '$route.name': function () {
      this.checkUserAndGuardRoute();
    },
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },

  methods: {
    ...mapActions([
      'initUser',
      'toggleModal',
    ]),

    checkUserAndGuardRoute() {
      if (Meteor.userId()) return;
      this.toggleModal('modals_signin');
      if (this.$route.name === 'home') return;
      this.$router.push({ name: 'home' });
    },
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
