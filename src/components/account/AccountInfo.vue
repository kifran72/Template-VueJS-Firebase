<template>
  <div id="account-info-container">
    <div v-if="!loading" class="center">
      <p><b>Email:</b> {{ email }}</p>
      <div>
        <md-switch v-model="themeSwitch" @change="changeTheme"
          >Theme light/dark</md-switch
        >
      </div>
      <p>
        <router-link to="/">Home page</router-link>
      </p>
      <md-button class="md-raised md-primary" @click="logout">Logout</md-button>
    </div>
  </div>
</template>

<script>
import { logout, auth } from "@/firebase";

export default {
  name: "AccountInfo",
  data() {
    return {
      loading: true,
      email: "",
      themeSwitch: false, // false = 'default'; true = 'dark'
    };
  },
  mounted() {
    if (localStorage.userTheme === "dark") {
      this.themeSwitch = true;
    }
    let _this = this;
    auth.onAuthStateChanged((user) => {
      if (user) {
        _this.email = user.email;
        _this.loading = false;
      } else this.$router.replace("/account/login").catch(() => {}); // User not logged
    });
  },
  methods: {
    changeTheme: function() {
      if (this.themeSwitch) localStorage.userTheme = "dark";
      else localStorage.userTheme = "light";
      this.$emit("themeChanged");
    },
    logout: function() {
      logout();
    },
  },
};
</script>

<style lang="scss">
#account-info-container {
  .center {
    text-align: center;
  }
}
</style>
