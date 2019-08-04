<template lang="html">
  <div class="modals"
       v-if="currentModalComponentName"
       @key.esc="toggleModal()"
       @click.self="toggleModal()"
  >
    <div class="modal">
      <component
        :is="currentModalComponentName"
        class="modal__inner"
      />
      <div class="modal__error"
           v-if="currentError && !isUserLoading"
      > 🤔 {{ currentError }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import ModalsSignin from './modals_signin.vue';
import Modalssignup from './modals_signup.vue';

Vue.component('modals_signin', ModalsSignin);
Vue.component('modals_signup', Modalssignup);

export default {
  computed: {
    ...mapGetters([
      'isUserLoading',
      'currentModalComponentName',
      'currentError',
    ]),
  },

  methods: {
    ...mapActions([
      'toggleModal',
    ]),
  },
};
</script>

<style lang="css" scoped>
  .modals {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255, .8);
    z-index: 1;
  }

  .modal {
    background: #fff;
    padding: 30px;
    border-radius: 6px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .modal__inner {
    display: flex;
    flex-direction: column;
  }

  .modal__error {
    color: #d63031;
    margin-top: 30px;
    font-size: 14px;
    text-align: center;
  }
</style>
