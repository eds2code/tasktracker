<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <Avatar size="large" />
      </div>
      <div class="col-9">
        <div class="block">
          <uiInput class="input"
                   type="name"
                   name="firstname"
                   label="Имя"
                   :value="firstname"
                   @change="updateDataByName"
          />
          <uiInput class="input"
                   type="login"
                   name="username"
                   label="Логин"
                   :value="username"
                   @change="updateDataByName"
          />
          <uiButton class="button" name="Сохранить" @click="update"/>
        </div>

        <div class="block">
          <uiInput class="input"
                   type="password"
                   label="Старый пароль"
                   :value="currentPw"
                   name="currentPw"
                   @change="updateDataByName"
          />
          <uiInput class="input"
                   type="password"
                   label="Новый пароль"
                   :value="newPw"
                   name="newPw"
                   @change="updateDataByName"
          />
          <uiButton class="button" name="Изменить пароль" @click="changePassword"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Avatar from '../../components/shared/avatar.vue';
import uiInput from '../../components/shared/ui_input.vue';
import uiButton from '../../components/shared/ui_button.vue';

export default {
  components: { Avatar, uiInput, uiButton },

  mounted() {
    this.firstname = this.currentUser.profile.firstname;
    this.username = this.currentUser.username;
  },

  data() {
    return {
      firstname: '',
      username: '',
      currentPw: '',
      newPw: '',
    };
  },

  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },

  methods: {
    ...mapActions([
      'updateUser',
      'changeUserPassword',
    ]),

    updateDataByName(props) {
      this[props.name] = props.value;
    },

    update() {
      const user = {
        profile: {
          ...this.currentUser.profile,
          firstname: this.firstname,
        },
        username: this.username,
      };

      this.updateUser(user);
    },

    changePassword() {
      this.changeUserPassword({ currentPw: this.currentPw, newPw: this.newPw });
    },
  },
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.input {
  margin-bottom: 15px;
}
</style>
