<template>
  <div class="timetracker">
    <Header />
    <Controls />
    <Report />
    <TasksList />
  </div>
</template>

<script>
import Header from './timetracker_header';
import Controls from './controls/controls';
import TasksList from './tasks_list/tasks_list';
import Report from './report/report';

export default {
  components: {
    Controls, TasksList, Report, Header,
  },
};
</script>

<style scoped>
  .timetracker {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
    min-width: 960px;
  }
</style>
