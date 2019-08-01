<template>
  <div class="tasks-list">
    <TasksListItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import TasksListItem from './tasks_list_item';

export default {
  props: {
    tasks: {
      tasks: Array,
      required: true,
    },
  },

  components: { TasksListItem },

  updated() { this.saveTasks(); },

  methods: {
    ...mapActions([
      'saveTasks',
    ]),
  },
};
</script>

<style scoped>
  .tasks-list {
    width: calc(50% - 20px);
    margin: 0 10px;
  }
</style>
