<template>
  <div class="report"
       v-show="reportText"
  >
    <textarea class="report__textarea"
              ref="reportText"
              :value="reportText"
    ></textarea>

    <ReportControls
      @copyText="copyText"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ReportControls from './report_controls.vue';

export default {
  components: {
    ReportControls,
  },

  computed: {
    ...mapGetters([
      'tasks',
      'reportText',
    ]),
  },

  methods: {
    copyText() {
      this.$refs.reportText.select();
      document.execCommand('copy');
    },
  },
};
</script>

<style scoped>
  .report {
    position: relative;
    margin-bottom: 30px;
  }
  .report__textarea {
    width: 100%;
    height: 200px;
    border: 1px solid #ffdd66;
    background: none;
    padding: 20px;
    border-radius: 6px;
    outline: none;
  }
</style>
