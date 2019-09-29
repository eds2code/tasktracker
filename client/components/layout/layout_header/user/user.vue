<template lang="html">
  <div class="user">
    <UserStub v-if="isUserLoading" />

    <template v-else-if="currentUser._id">
      <UserCard />
    </template>

    <UserAuth v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserStub from './user_stub';
import UserAuth from './user_auth';
import UserCard from './user_card/card';

export default {
  components: { UserStub, UserCard, UserAuth },

  computed: {
    ...mapGetters([
      'isUserLoading',
      'currentUser',
    ]),
  },
};
</script>

<style lang="css" scoped>
  .user {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
</style>
