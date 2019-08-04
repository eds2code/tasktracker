<template>
  <div class="container"
       v-if="currentUser"
  >
    <div class="row">
      <div class="col-12">
        <div class="timetracker">
          <Tasks />
          <Report />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len  */

import { mapGetters } from 'vuex';

import Tasks from './tasks/tasks';
import Report from './report/report';

export default {
  components: {
    Tasks, Report,
  },


  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<style scoped>

</style>
