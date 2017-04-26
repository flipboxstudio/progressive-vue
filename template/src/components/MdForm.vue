<template lang="html">
  <form class="md-form">
    <md-layout md-gutter="24">
      <md-layout md-flex="65">
        <div class="full-width">
          <slot name="left"></slot>
        </div>
      </md-layout>

      <md-layout md-flex="35">
        <div class="full-width">
          <slot name="right"></slot>
        </div>
      </md-layout>
    </md-layout>
  </form>
</template>

<script>
export default {
  name: 'MdForm'
}
</script>
