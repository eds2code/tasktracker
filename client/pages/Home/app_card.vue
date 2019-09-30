<template>
    <router-link :to="{ name: app.name }"
                 class="app-card"
                 :class="isStub ? 'app-card_stub' : 'app-card_' + app.name"
    >
      <div class="app-card__content">
        <template v-if="isStub"> ? </template>
        <template v-else>
          <div class="app-card__emoji">{{ app.emoji || '👾' }}</div>
          <div class="app-card__title">{{ app.title }}</div>
          <div class="app-card__descript"
              v-if="app.descript"
          > {{ app.descript }}
          </div>
        </template>
      </div>
    </router-link>
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      required: true,
    },
    isStub: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.app-card {
  display: block;
  width: calc(25% - 20px);
  margin: 10px;
  display: block;
  user-select: none;
  position: relative;
  border: 1px solid #eee;
  background: #ffdd66;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}
.app-card:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.app-card:active,
.app-card:hover,
.app-card:focus {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.app-card__content {
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
  padding: 40px;
}

.app-card__emoji {
  font-size: 80px;
  height: 80px;
  width: 80px;
  margin-bottom: 20px;
}

.app-card__title {
  text-decoration: none;
  color: #444;
  font-weight: bold;
  font-size: 24px;
}
.app-card__descript {
  text-decoration: none;
  color: #666;
  font-size: 12px;
  line-height: 18px;
  margin-top: 15px;
  letter-spacing: .1px;
  text-align: center;
}

/*  */
.app-card_stub {
  background: #fff;
  box-shadow: none;
  color: #ddd;
  border: 1px dashed #ddd;
  cursor: default;
  font-weight: normal;
}
.app-card_stub:active,
.app-card_stub:focus,
.app-card_stub:hover {
  transform: translateY(0);
  box-shadow: none;
}

/*  */
.app-card_moneytracker {
  background: rgb(119, 241, 201);
}
</style>
