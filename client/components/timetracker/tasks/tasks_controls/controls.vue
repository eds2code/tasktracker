<!-- TODO: Если добавятся элементы - ! Разбить на компоненты -->

<template>
  <div class="controls">
    <div class="controls__inputs">
      <div class="controls__input-block">
        <div class="controls__label">
          Название:
        </div>
        <input class="controls__input"
               id="inputTaskTitle"
               type="text"
               placeholder="Замечательный таск"
               v-model="title"
               @keyup.enter="setFocusOnInput('inputTaskDuration')"
        >
      </div>
      <div class="controls__input-block">
        <div class="controls__label">
          План (часов):
        </div>
        <input class="controls__input controls__input_short"
               id="inputTaskDuration"
               placeholder="0.5"
               v-model="durationLimit"
               @keyup.enter="createThisTask()"
        >
      </div>
    </div>

    <div class="controls__buttons">
      <div class="controls__button"
           role="button"
           @click="createThisTask()"
      > 📎 Добавить</div>
      <div class="controls__button controls__button_mr-a"
           role="button"
           @click="createAndStartTask()"
      > 🚀 Начать</div>
      <div class="controls__button"
           :class="{ 'controls__button_disabled': tasks.length === 0 }"
           role="button"
           @click="tasks.length > 0 ? createReport() : false"
      > 📝 Создать отчет</div>
      <div class="controls__button controls__button_danger"
           :class="{ 'controls__button_disabled': tasks.length === 0 }"
           role="button"
           @click="tasks.length > 0 ? resetTasks() : false"
      >Сбросить день</div>
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

  mounted() {
    this.setFocusOnInput('inputTaskTitle');
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
      'resetTasks',
      'createReport',
    ]),

    clearInputs() {
      this.title = undefined;
      this.durationLimit = undefined;
    },

    setFocusOnInput(id) {
      document.getElementById(id).focus();
    },

    createThisTask() {
      this.createTask({
        title: this.title,
        isStarted: false,
        durationLimit: this.durationLimit * ONE_HOUR,
      });
      this.clearInputs();
      this.setFocusOnInput('inputTaskTitle');
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
    padding: 20px 0px;
    border-radius: 10px;
    font-size: 14px;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    .controls {
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-bottom: 10px;
    }
  }

  .controls__inputs {
    display: flex;
    margin: -5px;
    margin-right: 10px;
  }

  @media screen and (max-width: 767px) {
    .controls__inputs {
      width: 100%;
    }
  }

  .controls__input-block {
    display: flex;
    flex-direction: column;
    margin: 5px;
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

  @media screen and (max-width: 767px) {
    .controls__input {
      width: 100%;
    }
  }

  .controls__input:focus {
    box-shadow: 0px 0px 12px 0px #ffdd66;
  }

  .controls__input_short {
    width: 100px;
  }

  .controls__buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: -5px;
  }

  @media screen and (max-width: 767px) {
    .controls__buttons {
      margin-top: 20px;
    }
  }

  .controls__button {
    cursor: pointer;
    background: #ffdd66;
    color: #222;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 3px;
    user-select: none;
    border: 1px solid #ffdd66;
    margin: 5px;
  }

  .controls__button_mr-0 {
    margin-right: 0;
  }

  .controls__button_mr-a {
    margin-right: auto;
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

  .controls__button_danger {
    background: none;
    border: 1px solid #ff7675;
    color: #ff7675;
  }
</style>
