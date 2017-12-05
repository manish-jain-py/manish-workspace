<template>
  <div id="app">
    <app-header v-bind:pageTitle="pageTitle" v-bind:warehouse="warehouse"></app-header>
    <app-content>
      <router-view></router-view>
    </app-content>
  </div>
</template>

<script>

  import appHeader from './app-header.vue'
  import appContent from './app-content.vue'
  import buttonsArea from './buttons-area.vue'
  import store from './store/index.js'

  export default {
    name: 'App',
    computed: {
      pageTitle: function () {
        return store.state.pageTitle
      },
      warehouse: function () {
        return store.state.warehouse
      }
    },
    components: {
      appHeader,
      appContent,
      buttonsArea
    }
  }

</script>

<style>
  #app{
    background-color: lightgrey;
  }
</style>
