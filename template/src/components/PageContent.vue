<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
      <md-button class="md-icon-button nav-trigger" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title" v-text="pageTitle"></div>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: String
    },
    methods: {
      toggleSidenav () {
        this.$root.toggleSidenav()
      }
    },
    mounted () {
      document.title = this.pageTitle
    }
  }
</script>
