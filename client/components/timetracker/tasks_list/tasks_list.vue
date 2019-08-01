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
import { mapActions, mapGetters } from 'vuex';

import TasksListItem from './tasks_list_item';

export default {
  components: { TasksListItem },

  updated() { this.saveTasks(); },

  computed: {
    ...mapGetters([
      'tasks',
    ]),
  },

  methods: {
    ...mapActions([
      'saveTasks',
    ]),
  },
};
</script>

<style scoped>
  .tasks-list {
  }
</style>
