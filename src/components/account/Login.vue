<template>
  <div id="account-login-container">
    <md-button class="md-raised md-primary" @click="login"
      >Login With Google</md-button
    >
  </div>
</template>

<script>
import { login, auth } from "@/firebase";

export default {
  name: "AccountLogin",
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) this.$router.replace("/home").catch(() => {}); // User already logged
    });
  },
  methods: {
    login: function() {
      login();
    },
  },
};
</script>

<style lang="scss">
#account-login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 40%;
  }
}
</style>
