<template lang="html">
  <div>
    <label for="inputFirstname">Имя:</label>
    <input id="inputFirstname"
           type="text"
           name="firstname"
           v-model="firstname"
           @keyup.enter="setFocusOnInput('#inputUsername');"
    >

    <label for="inputUsername">Логин:</label>
    <input id="inputUsername"
           type="text"
           name="username"
           v-model="username"
           @keyup.enter="setFocusOnInput('#inputPassword');"
           required
    >

    <label for="inputPassword">Пароль:</label>
    <input id="inputPassword"
           type="password"
           name="password"
           v-model="password"
           required
           @keyup.enter="signUp()"
    >

    <Loader v-if="isUserLoading" />
    <button v-else @click="signUp()"> Создать аккаунт </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Loader from '../../shared/loader';

export default {
  components: {
    Loader,
  },

  mounted() {
    this.setFocusOnInput('#inputFirstname');
  },

  data() {
    return {
      firstname: '',
      username: '',
      password: '',
    };
  },

  computed: {
    ...mapGetters([
      'isUserLoading',
    ]),
  },

  methods: {
    ...mapActions([
      'createUser',
    ]),

    signUp() {
      this.createUser({
        username: this.username,
        password: this.password,
        profile: {
          firstname: this.firstname,
        },
      });
    },

    setFocusOnInput(id) {
      document.querySelector(id).focus();
    },
  },
};
</script>

<style lang="css" scoped>
  label {
    font-size: 14px;
    color: #222;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #ffdd66;
    background: none;
    padding: 0 10px;
    height: 30px;
    border-radius: 3px;
    outline: none;
    width: 200px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    input {
      width: 100%;
    }
  }

  input:focus {
    box-shadow: 0px 0px 12px 0px #ffdd66;
  }

  button {
    background: #ffdd66;
    padding: 0 30px;
    height: 30px;
    border: 0;
    outline: none;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
  }

  button:hover {
    opacity: .5;
  }

  button:active {
    transform: scale(.95);
  }
</style>
