<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <Avatar size="large" />
      </div>
      <div class="col-9">
        <div class="block">
          <div class="firstname">{{ firstname }}</div>
          <div class="username">@ {{ username }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Avatar from '../../components/shared/avatar.vue';

export default {
  components: { Avatar },

  mounted() {
    this.firstname = this.currentUser.profile.firstname;
    this.username = this.currentUser.username;
  },

  data() {
    return {
      firstname: '',
      username: '',
    };
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.firstname {
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
}

.username {
  color: #999;
  font-size: 18px;
}
</style>
