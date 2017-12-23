<template>
  <div class="form-group">
    <a v-bind:href="href">{{ propsObject.label }}</a>
  </div>
</template>

<script>

  import store from '../store'

  export default {
    name: 'Anchor',
    computed: {
      href: function () {
        if (this.propsObject.linkType === 'recordLink') {
          return store.state.dataRecord.recordLink
        } else{
          return this.propsObject.href
        }
      }
    },
    props: ['propsObject']
  }
</script>
