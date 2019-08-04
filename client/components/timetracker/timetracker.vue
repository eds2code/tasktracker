<template>
  <div class="timetracker">
    <Header />
    <Controls />
    <Tasks />
    <Report />
  </div>
</template>

<script>
import Header from './timetracker_header';
import Controls from './controls/controls';
import Tasks from './tasks/tasks';
import Report from './report/report';

export default {
  components: {
    Controls, Tasks, Report, Header,
  },
};
</script>

<style scoped>
  .timetracker {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
</style>
