<template>

  <div class="form-group">
    <a v-bind:href="href">{{ propsObject.label }}</a>
  </div>

</template>

<script>

  export default {

    name: 'Anchor',

    computed: {

      href: function () {
        if (this.propsObject.linkType === 'recordLink') {
          return this.$store.getters.getRecordLink
        }
      }

    },

    props: ['propsObject']

  }

</script>
