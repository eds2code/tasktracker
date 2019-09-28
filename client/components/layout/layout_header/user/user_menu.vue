<template lang="html">
  <div class="buttons">
    <div class="button"
         @click="logout()"
    > Выйти </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'logout',
    ]),
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<style lang="css" scoped>
  .buttons {
    display: flex;
    margin-left: auto;
  }

  .button {
    color: #444;
    margin-left: 20px;
    user-select: none;
    cursor: pointer;
    line-height: 30px;
  }

  .button:hover {
    opacity: .5;
  }

  .button:active {
    transform: scale(.97);
  }
</style>
