<template>
  <div class="ui_button"
       @click="$emit('click')"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
  },
};
</script>

<style scoped>
.ui_button {
  display: inline-block;
  cursor: pointer;
  background: #ffdd66;
  color: #222;
  line-height: 30px;
  padding: 0 20px;
  border-radius: 3px;
  user-select: none;
  box-sizing: border-box;
}
.ui_button:hover {
  opacity: .5;
}
.ui_button:active {
  transform: scale(.95);
}
</style>
