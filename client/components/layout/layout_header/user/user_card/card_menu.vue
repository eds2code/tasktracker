<template lang="html">
  <transition name="fade">
    <div class="card__menu">
      <div class="card__menu-inner">
        <router-link class="button"
                     :to="{ name: 'user_settings' }"
        > Настройки
        </router-link>
        <div class="button"
             @click="logout()"
        > Выйти
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'logout',
    ]),
  },
};
</script>

<style lang="css" scoped>
  .card__menu {
    display: flex;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    padding-top: 5px;
  }

  .card__menu-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    box-sizing: border-box;
    width: 100%;
    margin-top: -1.5px;
  }

  .button {
    text-decoration: none;
    display: inline-block;
    color: #444;
    user-select: none;
    cursor: pointer;
    line-height: 1;
    border-radius: 5px;
    font-size: 13px;
    padding: 10px;
    background: #fff;
    box-shadow: 0px 0px 24px rgba(0,0,0,.1);
    margin: 3px 0;
  }

  .button:hover {
    color: #999;
  }

  .button:active {
    transform: scale(.97);
  }

  /*  */
  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transform: translateY(0);
    transition: all .1s;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
