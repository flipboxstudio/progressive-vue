<template lang="html">
  <div class="form-content">
    <span class="md-subheading form-legend" v-if="legend" v-text="legend"></span>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['legend']
}
</script>
