<!-- TODO: Разбить на компоненты -->

<template>
  <div class="controls">
    <div class="controls__control">
      <div class="controls__label">
        Название:
      </div>
      <input class="controls__input"
             type="text"
             placeholder="Замечательный таск"
             v-model="title"
             @keyup.enter="createThisTask()"
      >
    </div>
    <div class="controls__control">
      <div class="controls__label">
        План (часов):
      </div>
      <input class="controls__input controls__input_short"
             placeholder="0.5"
             v-model="durationLimit"
             @keyup.enter="createThisTask()"
      >
    </div>
    <div class="controls__buttons">
      <div class="controls__button"
           role="button"
           @click="createThisTask()"
      > 📎 Добавить</div>
      <div class="controls__button"
           role="button"
           @click="createAndStartTask()"
      > 🚀 Добавить и начать</div>
      <div class="controls__button controls__button_ml-a"
           :class="{ 'controls__button_disabled': tasks.length === 0 }"
           role="button"
           @click="tasks.length > 0 ? createReport() : false"
      > 📝 Создать отчет</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const ONE_HOUR = 60 * 60 * 1000;

export default {
  data() {
    return {
      title: undefined,
      durationLimit: undefined,
    };
  },

  watch: {
    durationLimit() {
      if (this.durationLimit < 0) {
        this.durationLimit = undefined;
      } else {
        this.durationLimit = this.durationLimit || undefined;
      }
    },
  },

  computed: {
    ...mapGetters([
      'tasks',
    ]),
  },

  methods: {
    ...mapActions([
      'createTask',
      'createReport',
    ]),

    clearInputs() {
      this.title = undefined;
      this.durationLimit = undefined;
    },

    createThisTask() {
      this.createTask({
        title: this.title,
        isStarted: false,
        durationLimit: this.durationLimit * ONE_HOUR,
      });
      this.clearInputs();
    },

    createAndStartTask() {
      this.createTask({
        title: this.title,
        isStarted: true,
        durationLimit: this.durationLimit * ONE_HOUR,
      });
      this.clearInputs();
    },
  },
};
</script>

<style scoped>
  .controls {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    padding: 20px 0px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .controls__control {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .controls__label {
    font-size: 14px;
    color: #222;
    margin-bottom: 5px;
  }

  .controls__input {
    border: 1px solid #ffdd66;
    background: none;
    padding: 0 10px;
    height: 30px;
    border-radius: 3px;
    outline: none;
    width: 300px;
  }

  .controls__input_short {
    width: 100px;
  }

  .controls__buttons {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .controls__button {
    cursor: pointer;
    background: #ffdd66;
    color: #222;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 3px;
    margin-right: 10px;
  }

  .controls__button_ml-a {
    margin-left: auto;
  }

  .controls__button:hover {
    opacity: .5;
  }

  .controls__button:active {
    transform: scale(.97);
  }

  .controls__button_disabled {
    cursor: not-allowed;
    opacity: .5;
  }
</style>
