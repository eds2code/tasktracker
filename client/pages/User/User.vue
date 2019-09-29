<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        {{ currentUser }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>
