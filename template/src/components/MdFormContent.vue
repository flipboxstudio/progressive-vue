<template lang="html">
  <div class="form-content">
    <md-layout class="form-legend-container" v-if="legend">
      <md-layout md-align="start">
        <span class="md-subheading form-legend" v-text="legend"></span>
      </md-layout>
      <md-layout md-align="end">
        <span class="md-subheading form-legend-action" @click="reset" v-if="!readonly">Clear All</span>
      </md-layout>
    </md-layout>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MdFormContent',

  props: {
    legend: {
      type: String,
      default: ''
    },

    readonly: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    reset (event) {
      this.$emit('reset', this, event)
    }
  }
}
</script>
