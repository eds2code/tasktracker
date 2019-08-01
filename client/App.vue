<template>
  <div id="app">
    <Timetracker />
  </div>
</template>

<script>
import Timetracker from './components/timetracker/timetracker';

export default {
  components: { Timetracker },
};
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'PT Sans', arial, sans-serif;
    padding: 10px;
  }
</style>
