<template>
  <div class="ui_input-wrapper">
    <label :for="'ui_input' + type + name" class="ui_input-label" v-if="label">
      {{ label }}
    </label>
    <input
      ref="input"
      class="ui_input"
      :id="'ui_input' + type + name"
      :type="type"
      :name="name"
      :value="value"
      @keyup="updateValueAndEmit()"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: undefined },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
  },

  methods: {
    updateValueAndEmit() {
      this.$emit('change', { name: this.name, value: this.$refs.input.value });
    },
  },
};
</script>

<style scoped>
.ui_input-wrapper {

}

.ui_input {
  border: 1px solid #ddd;
  background: none;
  padding: 8px 10px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  width: 200px;
  color: #999;
}

.ui_input:hover {
  border: 1px solid #ffdd66;
}
.ui_input:focus {
  color: #222;
  border: 1px solid #ffdd66;
  box-shadow: 0px 0px 12px 0px #ffdd66;
}

.ui_input-label {
  display: block;
  width: 100%;
  margin-bottom: 5px;
  color: #999;
  font-size: 13px;
}
</style>
