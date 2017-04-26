<template lang="html">
  <md-layout md-align="center" class="error-wrapper">
    <div>
      <p class="text-center md-display-2">Not Found</p>
      <p class="text-center md-display-1">Click <router-link :to="{name: 'dashboard'}">here</router-link> to go back to home.</p>
    </div>
  </md-layout>
</template>

<script>
export default {
  mounted () {
    document.title = 'Not Found'
  }
}
</script>
