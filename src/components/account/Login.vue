<template>
  <div id="account-login-container">
    <!-- <md-field>
			<label>Email</label>
			<md-input id="email" v-model="email"></md-input>
		</md-field>

		<md-field>
			<label>Password</label>
			<md-input id="password" v-model="password" type="password"></md-input>
		</md-field> -->

    <!-- <p>{{errorMessage}}</p> -->

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
      if (user) this.$router.replace("/account").catch(() => {}); // User already logged
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
}
</style>
