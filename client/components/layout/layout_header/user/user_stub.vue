<template lang="html">
  <div class="userstub">
    <Loader />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Loader from '../../../shared/loader';

export default {
  components: {
    Loader,
  },

  computed: {
    ...mapGetters([
    ]),
  },
};
</script>

<style lang="css" scoped>
  .userstub {
    height: 30px;
  }
</style>
