<template>
  <div id="app">
    <dynamic-content></dynamic-content>
  </div>
</template>

<script>

  import DynamicContent from './components/DynamicPage.vue'

  export default {
    name: 'App',
    components: {
      DynamicContent
    }
  }

</script>
