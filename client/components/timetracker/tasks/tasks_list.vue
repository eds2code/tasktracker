<template>
  <div class="tasks-list">
    <div class="tasks-list__title">План на день</div>

    <TasksListItem
      v-for="task in tasks"
      :key="`Started + ${task.id}`"
      :task="task"
    />
  </div>
</template>

<script>
import TasksListItem from './tasks_list_item';

export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  components: { TasksListItem },
};
</script>

<style scoped>
  .tasks-list__title {
    margin-bottom: 20px;
    color: #999;
  }
</style>
