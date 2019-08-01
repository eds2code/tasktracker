<template>
  <div class="tasks-list">
    <div class="col"
         v-if="tasks.length > 0"
    >
      <div class="tasks-list__title">План на день</div>
      <TasksListItem
        v-for="task in backlogTasks"
        :key="`Backlog + ${task.id}`"
        :task="task"
      />
    </div>

    <div class="col"
         v-if="tasks.length > 0"
    >
      <div class="tasks-list__title">В процессе</div>
      <TasksListItem
        v-for="task in startedTasks"
        :key="`Started + ${task.id}`"
        :task="task"
      />
    </div>
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
  .tasks-list {
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

  .tasks-list__title {
    margin-bottom: 20px;
    color: #999;
  }
</style>
