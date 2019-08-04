<template>
  <div class="tasks">
    <TasksControls />

    <div class="row">
      <div class="col-md-12 col-lg-6 mb-30">
        <TasksList
          :title="'План на день'"
          :tasks="backlogTasks"
          :totalDuration="backlogTasksTotalDuration"
          :emptyMessageIcon="'💫'"
          :emptyMessageText="'План на день пуст'"
        />
      </div>
      <div class="col-md-12 col-lg-6 mb-30">
        <TasksList
          :title="'В процессе'"
          :tasks="startedTasks"
          :totalDuration="startedTasksTotalDuration"
          :emptyMessageIcon="'😴'"
          :emptyMessageText="'Нет тасков в процессе'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TasksControls from './tasks_controls/controls';
import TasksList from './tasks_list/list';

export default {
  components: { TasksControls, TasksList },

  created() { this.getTasks(); },

  computed: {
    ...mapGetters([
      'tasks',
    ]),

    backlogTasks() { return this.tasks.filter(task => !task.isStarted && task.duration === 0); },
    backlogTasksTotalDuration() {
      let totalTime = 0;
      this.backlogTasks.forEach((task) => { totalTime += task.durationLimit || 0; });
      return totalTime;
    },

    startedTasks() { return this.tasks.filter(task => task.isStarted || task.duration !== 0); },
    startedTasksTotalDuration() {
      let totalTime = 0;
      this.startedTasks.forEach((task) => { totalTime += task.duration; });
      return totalTime;
    },
  },

  methods: {
    ...mapActions([
      'getTasks',
    ]),
  },
};
</script>

<style>
  .mb-30 {
    margin-bottom: 30px;
  }
</style>
