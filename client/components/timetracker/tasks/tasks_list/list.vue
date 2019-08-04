<template>
  <div class="tasks-list"
       :class="listClasses"
  >
    <ListEmpty
      v-if="isListEmpty"
      :icon="emptyMessageIcon"
      :message="emptyMessageText"
    />

    <template v-else>
      <div class="tasks-list__head">
        <div class="tasks-list__title">{{ title }}</div>
        <div class="tasks-list__duration">{{ formattedTotalDuration }}</div>
      </div>
      <ListItem
        v-for="task in tasks"
        :key="`Started + ${task._id}`"
        :task="task"
      />
    </template>
  </div>
</template>

<script>
import getHhMmSsFromTimestamp from '../../../../helpers/get_hhmmss_from_timestamp';

import ListItem from './list_item';
import ListEmpty from './list_empty';

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
    emptyMessageIcon: {
      type: String,
      required: false,
    },
    emptyMessageText: {
      type: String,
      required: false,
      default: 'Пусто',
    },
  },

  components: { ListItem, ListEmpty },

  computed: {
    listClasses() {
      return {
        'tasks-list_empty': this.isListEmpty,
      };
    },

    isListEmpty() { return this.tasks.length === 0; },

    formattedTotalDuration() {
      return getHhMmSsFromTimestamp(this.totalDuration);
    },
  },
};
</script>

<style scoped>
  .tasks-list {
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #ffdd66;
  }

  .tasks-list_empty {
    border: 1px solid #eee;
  }

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
