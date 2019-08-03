<template>
  <div class="tasks">
    <div class="col">
      <TasksList
        v-if="backlogTasks.length > 0"
        :tasks="backlogTasks"
      />
      <TasksListEmpty
        v-else
        :icon="'💫'"
        :message="'План на день пуст'"
      />
    </div>

    <div class="col">
      <TasksList
        v-if="startedTasks.length > 0"
        :tasks="startedTasks"
      />
      <TasksListEmpty
        v-else
        :icon="'😴'"
        :message="'Нет тасков в процессе'"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TasksList from './tasks_list';
import TasksListEmpty from './tasks_list_empty';

export default {
  components: { TasksList, TasksListEmpty },

  updated() { this.saveTasks(); },

  computed: {
    ...mapGetters([
      'tasks',
    ]),

    backlogTasks() { return this.tasks.filter(task => !task.isStarted && task.duration === 0); },
    startedTasks() { return this.tasks.filter(task => task.isStarted || task.duration !== 0); },
  },

  methods: {
    ...mapActions([
      'saveTasks',
    ]),
  },
};
</script>

<style scoped>
  .tasks {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }

  .col {
    width: calc(50% - 10px);
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #ffdd66;
  }

  .col_12 {
    width: calc(100% - 10px);
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #ffdd66;
  }
</style>
