<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="apps">
          <AppCard v-for="app in apps"
                   :key="app.name"
                   :app="app"
                   @click="setLastClickedLink(app.name)"
          />
          <AppCard :app="{}" :isStub="true" />
          <AppCard :app="{}" :isStub="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from '../components/home/app_card.vue';

export default {
  components: { AppCard },
  data() {
    return {
      lastClickedApp: '',
      apps: [
        {
          title: 'Daily план', name: 'timetracker', descript: 'Составляй список задач на день, засекай время, создавай отчет.', emoji: '⏱',
        },
        {
          title: 'Копилка', name: 'moneytracker', descript: 'Планируй бюджет, веди учет расходов, копи деньги.', emoji: '💸',
        },
      ],
    };
  },

  watch: {
    'currentUser._id': function () {
      this.$router.push({ name: this.lastClickedApp });
    },
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },

  methods: {
    setLastClickedApp(appName = '') {
      this.lastClickedApp = appName;
    },
  },
};
</script>

<style scoped>
.apps {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  width: auto;
  margin: -10px;
}
</style>
