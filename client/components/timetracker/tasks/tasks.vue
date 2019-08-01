<template>
  <div class="timetracker-tasks">
    <TasksList
      :tasks="tasks"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TasksList from './tasks_list/tasks_list';

export default {
  components: {
    TasksList,
  },

  computed: {
    ...mapGetters([
      'tasks',
    ]),
  },
};
</script>

<style scoped>
  .timetracker-tasks {
    display: flex;
    margin: 0 -10px;
  }
</style>
