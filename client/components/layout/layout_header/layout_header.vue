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
    z-index: 20;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .app-header__inner {
    display: flex;
    align-items: center;
    font-size: 14px;
    width: 100%;
  }
</style>
