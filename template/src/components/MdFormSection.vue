<template lang="html">
  <md-layout md-gutter="24" md-flex="100">
    <md-layout>
      <slot name="left"></slot>
    </md-layout>
    <md-layout>
      <slot name="right"></slot>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
}
</script>
