<template>
  <div id="account-index-container">
    <md-app md-waterfall md-mode="fixed" :md-theme="userTheme">
      <md-app-content>
        <div class="middle-center">
          <img class="logo" src="../../assets/logo.png" alt="Logo" />
          <router-view />
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "AccountIndex",
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#account-index-container {
  .md-app {
    height: 100vh;

    .router-link {
      display: flex;
      align-items: center;
    }

    .bar-logo {
      width: 35px !important;
    }

    .middle-center {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }

    .logo {
      width: 40% !important;
    }
  }
}
</style>
