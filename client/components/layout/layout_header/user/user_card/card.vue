<template>
  <div class="user__card"
       @mouseover="isMenuVisible = true"
       @mouseleave="isMenuVisible = false"
  >
    <router-link :to="{ name: 'user' }"
                 class="user__card-row"
    >
      <div class="user__name">
        {{ currentUser.profile.firstname || currentUser.username }}
      </div>
      <div class="user__avatar"></div>
    </router-link>

    <CardMenu v-show="isMenuVisible" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardMenu from './card_menu';

export default {
  components: { CardMenu },

  data() {
    return {
      isMenuVisible: false,
    };
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
};
</script>

<style>
.user__card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  user-select: none;
  padding: 10px;
  box-shadow: 0px 0px 24px rgba(0,0,0,.1);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all .2s;
  max-width: 60px;
}

.user__card-row {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all .1s;
}

.user__card-row:active {
  transition: all .1s;
  transform: scale(.97);
}

.user__card-row:hover {
  opacity: .5;
}

.user__card::before {
  display: block;
  content: '';
  position: absolute;
  top: 20px;
  right: -10px;
  background: #fff;
  width: 10px;
  height: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 10px 0px 12px rgba(0,0,0,.1);
  transition: all .2s;
}
.user__card::after {
  position: absolute;
  top: 29px;
  right: -3px;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 3px 3px 0 3px;
  border-color: #ddd transparent transparent transparent;
  transition: all .2s;
}
.user__card:hover {
  transition: all .4s;
  max-width: 200px;
  padding-left: 20px;
}
.user__card:hover::before {
  transition: all .2s;
  right: 0;
  opacity: 0;
}
.user__card:hover::after {
  transition: all .2s;
  opacity: 0;
}

.user__name {
  opacity: 0;
  text-transform: capitalize;
  font-weight: 400;
  color: #444;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  transition: all .1s;
  margin-right: 15px;
  transform: translateX(20px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 120px;
}

.user__card:hover .user__name {
  opacity: 1;
  transition: all .4s;
  transform: translateX(0);
}

.user__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  border: 2px solid #eee;
  border-radius: 100%;
}

.user__avatar::after {
  content: '🐋';
  font-size: 30px;
  height: 27px;
  text-align: center;
}
</style>
