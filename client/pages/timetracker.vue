<template>
  <div class="container">
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

import Tasks from '../components/timetracker/tasks/tasks';
import Report from '../components/timetracker/report/report';

export default {
  components: {
    Tasks, Report,
  },
};
</script>
