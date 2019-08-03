<template>
  <div class="tasks-list">
    <div class="tasks-list__head">
      <div class="tasks-list__title">{{ title }}</div>
      <div class="tasks-list__duration">{{ formattedTotalDuration }}</div>
    </div>
    <TasksListItem
      v-for="task in tasks"
      :key="`Started + ${task.id}`"
      :task="task"
    />
  </div>
</template>

<script>
import getHhMmSsFromTimestamp from '../../../helpers/get_hhmmss_from_timestamp';

import TasksListItem from './tasks_list_item';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
    totalDuration: {
      type: Number,
      required: true,
    },
  },

  components: { TasksListItem },

  computed: {
    formattedTotalDuration() {
      return getHhMmSsFromTimestamp(this.totalDuration);
    },
  },
};
</script>

<style scoped>
  .tasks-list__head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  .tasks-list__title {
    color: #999;
  }
  .tasks-list__duration {
    color: #999;
  }
</style>
