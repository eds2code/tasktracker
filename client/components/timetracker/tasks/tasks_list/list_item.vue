<template>
  <div class="task"
       v-click-outside="disableTitleEditMode"
  >
    <div class="task__title"
         :class="{ 'task__title_active': isStarted }"
         @click.self="toggleTitleEditMode"
    >
      <template v-if="isTitleEditMode">
        <input type="text"
               class="task__input"
               v-model="title"
               @keyup.enter="disableTitleEditMode"
        >
      </template>
      <template v-else>
        {{ title }}
      </template>
    </div>

    <div class="task__duration-block">
      <div class="task__duration task__duration_limit"
           v-if="formattedDurationLimit"
           :class="{ 'task__duration-limit_red': isDurationMoreThanLimit }"
      > {{ formattedDurationLimit }}
      </div>
      <div class="task__duration"
           :class="{ 'task__duration_active': isStarted }"
      > {{ formattedDuration }}
      </div>
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
import ClickOutside from 'vue-click-outside';
import { mapActions } from 'vuex';
import getHhMmSsFromTimestamp from '../../../../helpers/get_hhmmss_from_timestamp';

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  directives: { ClickOutside },

  created() {
    if (this.task.isStarted) {
      this.interval = setInterval(() => { this.incrementDuration(); }, 1000);
    }
  },

  mounted() {
    this.taskNode = this.$el;
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
      isStarted: this.task.isStarted,
      duration: this.task.duration,
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

    toggleTitleEditMode(boolean) {
      if (typeof boolean === 'undefined') {
        this.isTitleEditMode = !this.isTitleEditMode;
      } else {
        this.isTitleEditMode = boolean;
      }

      if (this.isTitleEditMode) {
        this.$nextTick(() => {
          this.$el.querySelector('.task__input').focus();
        });
      }
    },

    disableTitleEditMode() {
      this.isTitleEditMode = false;
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
    padding: 5px 10px;
    border-radius: 6px;
    background: #f8f8f8;
    font-size: 14px;
    line-height: 30px;
  }

  @media screen and (max-width: 767px) {
    .task {
      flex-wrap: wrap;
    }
  }

  .task__title {
    margin-right: auto;
    height: 30px;
    line-height: 30px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  .task__title_active {
    color: #222;
  }

  .task__input {
    border: 0px;
    background: transparent;
    padding: 0;
    height: 29px;
    border-radius: 3px;
    outline: none;
    width: 100%;
    line-height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-family: inherit;
  }

  .task__duration-block {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: -5px;
    margin-left: 5px;
  }

  @media screen and (max-width: 767px) {
    .task__duration-block {
      margin-left: -5px;
    }
  }

  .task__duration {
    white-space: nowrap;
    margin: 5px;
    color: #999;
  }

  .task__duration_active {
    color: #222;
  }

  .task__duration_limit {
    color: #00b894;
  }

  .task__duration-limit_red {
    color: #ff7675;
  }

  .task__controls {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  @media screen and (max-width: 767px) {
    .task__controls {
      margin-left: auto;
    }
  }

  .task__control {
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    margin-left: 20px;
  }

  @media screen and (max-width: 767px) {
    .task__control {
      font-size: 15px;
      margin-left: 10px;
    }
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
