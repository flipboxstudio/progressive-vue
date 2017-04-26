<template>
  <div id="app" :class="{anonymous: $route.meta.allowAnonymous}">
    <router-view ref="root-view"></router-view>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
@import "/assets/style/app";
</style>
