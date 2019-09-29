<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="links">
          <router-link  v-for="link in links"
                        :to="{ name: link.name }"
                        :key="link.name"
                        :class="`link link_${link.name}`"

          >
            <div class="link__content"
                 @click="setLastClickedLink(link.name)"
            >
              <div :class="`link__icon link__icon_${link.name}`"></div>
              {{ link.title }}
            </div>
          </router-link>

          <div class="link link_stub">
            <div class="link__content">?</div>
          </div>
          <div class="link link_stub">
            <div class="link__content">?</div>
          </div>
          <div class="link link_stub">
            <div class="link__content">?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      lastClickedLink: '',
      links: [
        { title: 'Тасктрекер', name: 'timetracker' },
      ],
    };
  },

  watch: {
    'currentUser._id': function () {
      this.$router.push({ name: this.lastClickedLink });
    },
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },

  methods: {
    setLastClickedLink(name = '') {
      this.lastClickedLink = name;
    },
  },
};
</script>

<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  width: auto;
  margin: -10px;
}

.link {
  user-select: none;
  position: relative;
  display: block;
  width: calc(25% - 20px);
  margin: 10px;
  border: 1px solid #eee;
  background: #ffdd66;
  overflow: hidden;
  border-radius: 10px;
  text-decoration: none;
  color: #444;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}
.link:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.link:active,
.link:hover,
.link:focus {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.link__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.link__icon {
  font-size: 48px;
  height: 48px;
  width: 48px;
  margin-bottom: 20px;
}
.link__icon_timetracker::after {
  content: '⏰';
}

.link_stub {
  background: #fff;
  box-shadow: none;
  color: #ddd;
  border: 1px dashed #ddd;
  cursor: default;
  font-weight: normal;
}
.link_stub:active,
.link_stub:focus,
.link_stub:hover {
  transform: translateY(0);
  box-shadow: none;
}
</style>
