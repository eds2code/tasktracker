<template>
  <div class="report-controls"
  >
    <div class="report-controls__button"
         @click="createReport()"
    > 🖨️ Обновить
    </div>
    <div class="report-controls__button"
         @click="copyText()"
    > {{ copyTextButtonTitle }}
    </div>
    <div class="report-controls__button"
         @click="resetReport()"
    > 🌂 Закрыть
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      copyTextButtonTitle: '📋 Скопировать',
    };
  },

  computed: {
    ...mapGetters([
      'tasks',
      'reportText',
    ]),
  },

  methods: {
    ...mapActions([
      'createReport',
      'resetReport',
    ]),

    copyText() {
      const memoizedTitle = this.copyTextButtonTitle;
      this.$emit('copyText');
      this.copyTextButtonTitle = '✔️ Скопировать';
      setTimeout(() => { this.copyTextButtonTitle = memoizedTitle; }, 1000);
    },
  },
};
</script>

<style scoped>
  .report-controls {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  .report-controls__button {
    cursor: pointer;
    margin-left: 10px;
    background: #ffdd66;
    border-radius: 3px;
    padding: 5px 10px;
  }

  .report-controls__button:hover {
    opacity: .5;
  }

  .report-controls__button:active {
    transform: scale(.97);
  }
</style>
