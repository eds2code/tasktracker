<template>
  <div class="task">
    <div class="task__title"
         :class="{ 'task__title_active': isStarted }"
         @click.self="toggleTitleEditMode"
    >
      <template v-if="isTitleEditMode">
        <input type="text"
               class="task__input"
               v-model="title"
               @keyup.enter="toggleTitleEditMode"
        >
      </template>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div class="task__duration-limit"
         v-if="formattedDurationLimit"
         :class="{ 'task__duration-limit_red': isDurationMoreThanLimit }"
    > {{ formattedDurationLimit }}
    </div>
    <div class="task__duration"
         :class="{ 'task__duration_active': isStarted }"
    > {{ formattedDuration }}
    </div>

    <div class="task__controls">
      <div class="task__control"
           v-if="isStarted"
           @click="pauseThisTask()"
      >🏁</div>
      <div class="task__control"
           v-if="!isStarted"
           @click="startThisTask()"
      >🚀</div>
      <div class="task__control task__control_small"
           @click="deleteTask(task)"
      >❌</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import getHhMmSsFromTimestamp from '../../../../helpers/get_hhmmss_from_timestamp';

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  created() {
    if (this.isStarted) {
      this.interval = setInterval(() => { this.incrementDuration(); }, 1000);
    }
  },

  updated() {
    this.updateTask({
      ...this.task,
      title: this.title,
      isStarted: this.isStarted,
      duration: this.duration,
    });
  },

  data() {
    return {
      interval: undefined,
      isTitleEditMode: false,
      title: this.task.title,
      isStarted: false,
      duration: 0,
      durationLimit: this.task.durationLimit,
    };
  },

  computed: {
    formattedDuration() {
      return getHhMmSsFromTimestamp(this.duration);
    },

    formattedDurationLimit() {
      if (!this.durationLimit) return false;
      return getHhMmSsFromTimestamp(this.durationLimit);
    },

    isDurationMoreThanLimit() {
      return this.duration >= this.durationLimit;
    },
  },

  methods: {
    ...mapActions([
      'updateTask',
      'deleteTask',
    ]),

    incrementDuration() {
      this.duration += 1000;
    },

    toggleTitleEditMode() {
      this.isTitleEditMode = !this.isTitleEditMode;
    },

    pauseThisTask() {
      this.isStarted = false;
      clearInterval(this.interval);
      this.interval = undefined;
    },

    startThisTask() {
      this.isStarted = true;
      this.interval = setInterval(() => { this.incrementDuration(); }, 1000);
    },
  },
};
</script>

<style scoped>
  .task {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 10px 15px;
    border-radius: 6px;
    background: #f8f8f8;
  }

  .task__title {
    margin-right: auto;
    line-height: 30px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .task__title_active {
    color: #222;
  }

  .task__input {
    border: 1px solid #ffdd66;
    background: #fff;
    padding: 0 10px;
    height: 29px;
    border-radius: 3px;
    outline: none;
    width: 230px;
  }

  .task__duration {
    white-space: nowrap;
    margin-left: 20px;
    color: #999;
  }

  .task__duration_active {
    color: #222;
  }

  .task__duration-limit {
    white-space: nowrap;
    color: #00b894;
    margin-left: 20px;
  }

  .task__duration-limit_red {
    color: #ff7675;
  }

  .task__controls {
    display: flex;
    align-items: center;
    margin-left: 30px;
  }

  .task__control {
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    margin-left: 20px;
  }

  .task__control:hover {
    opacity: .5;
  }

  .task__control:active {
    transform: scale(.9);
  }

  .task__control_small {
    font-size: 15px;
  }
</style>
