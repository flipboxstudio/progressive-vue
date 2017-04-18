<template>
  <div id="app" class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="main-sidebar">
      <md-toolbar class="logo" md-theme="white">
        <router-link exact to="/">
          <img @onLoadImage="onLoadImage" src="/static/img/logo.png" />
          <span>App</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link to="/">Dashboard</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <router-view ref="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleSidenav () {
      this.$refs['main-sidebar'].toggle()
    },

    openSidenav () {
      this.$refs['main-sidebar'].open()
    },

    closeSidenav () {
      this.$refs['main-sidebar'].close()
    },

    onLoadImage () {
      console.log(arguments)
    }
  }
}
</script>

<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,400italic");
@import url("//fonts.googleapis.com/icon?family=Material+Icons");
@import "/assets/style/app";
</style>
