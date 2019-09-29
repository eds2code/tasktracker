<template>
  <router-link class="logo" :to="{ name: 'home' }">
    👻 Helper
  </router-link>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Carter+One&display=swap');

  .logo {
    font-family: 'Carter One', cursive;
    font-size: 20px;
    text-decoration: none;
    user-select: none;
    line-height: 1;
    color: inherit;
    color: #444;
  }

  .logo:active,
  .logo:hover {
    opacity: .5;
  }
</style>
