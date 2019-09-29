<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <input type="text" v-model="firstname">
        <input type="text" v-model="username">
        <input type="submit" @click="submit()">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.firstname = this.currentUser.profile.firstname;
    this.username = this.currentUser.username;
  },

  data() {
    return {
      firstname: '',
      username: '',
      password: '',
      passwordRepeat: '',
    };
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },

  methods: {
    ...mapActions([
      'updateUser',
    ]),

    submit() {
      const user = {
        profile: {
          ...this.currentUser.profile,
          firstname: this.firstname,
        },
        username: this.username,
      };

      this.updateUser(user);
    },
  },
};
</script>
