<template>
  <div class="empty">
    <span v-if="icon"> {{ icon }} </span>
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    color: #999;
    height: 100%;
    cursor: default;
    user-select: none;
  }

  .empty span {
    font-size: 40px;
    opacity: .5;
    margin-bottom: 15px;
  }
</style>
