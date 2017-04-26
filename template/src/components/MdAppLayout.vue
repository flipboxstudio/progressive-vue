<template>
  <div class="container">
    <md-sidenav id="main-sidebar" class="md-left md-fixed" md-swipeable ref="main-sidebar">
      <md-toolbar class="logo" md-theme="white">
        <router-link exact to="/">
          <img src="/static/icons/icon-512x512.png" />
          <span>App</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/">Dashboard</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/profile">Profile</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <router-view ref="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'MdAppLayout',

  methods: {
    toggleSidenav () {
      this.$refs['main-sidebar'].toggle()
    },

    closeSidenav () {
      this.$refs['main-sidebar'].close()
    }
  }
}
</script>
