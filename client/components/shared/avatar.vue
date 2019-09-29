<template>
  <div :class="`avatar avatar_${size}`"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  width: 40px;
  min-height: 40px;
  width: 40px;
  border: 2px solid #eee;
  border-radius: 100%;
}

.avatar::after {
  content: '🐋';
  font-size: 30px;
  height: 27px;
  text-align: center;
}

.avatar_large {
  border: 6px solid #eee;
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 18px rgba(0,0,0,.1);
}

.avatar_large::after {
  font-size: 150px;
  height: 140px;
}
</style>
