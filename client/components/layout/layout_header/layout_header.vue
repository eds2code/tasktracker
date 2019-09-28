<template>
  <div class="app-header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="app-header__inner">

            <User />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import User from './user/user';

export default {
  components: {
    User,
  },

  methods: {
    ...mapActions([
      'toggleModal',
    ]),
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<style scoped>
  .app-header {
    position: relative;
    margin-bottom: 30px;
    z-index: 20;
  }

  .app-header__inner {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    width: 100%;
  }
</style>
