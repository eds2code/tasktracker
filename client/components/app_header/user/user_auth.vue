<template lang="html">
  <div class="buttons">
    <div class="button"
         @click="toggleModal('modals_login')"
    > Войти </div>
    <div class="or">или</div>
    <div class="button button_yellow"
         @click="toggleModal('modals_signup')"
    > Создать аккаунт </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'toggleModal',
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

  .button_yellow {
    border-radius: 3px;
    background: #ffdd66;
    padding: 0px 20px;
  }

  .or {
    margin-left: 20px;
    color: #ddd;
    line-height: 30px;
    cursor: default;
  }

  .button:hover {
    opacity: .5;
  }

  .button:active {
    transform: scale(.97);
  }
</style>
