<template>
  <div id="app">
    <app-header v-bind:header-title="appHeader"> {{ count }} </app-header>
    <app-content>
      <router-view></router-view>
    </app-content>
    <app-footer v-bind:footer-content="footerContent"></app-footer>
  </div>
</template>

<script>

  import appHeader from './app-header.vue'
  import appContent from './app-content.vue'
  import appFooter from './app-footer.vue'
  import menuPage from './menu-page.vue'
  import store from './store/index.js'

  export default {
    name: 'App',
    data(){
      return{
        appHeader: 'App Page Header',
        footerContent: 'App Page Footer'
      }
    },
    computed: {
      count: function(){
        return store.state.count
      }
    },
    components: {
      appHeader,
      appContent,
      appFooter
    }
  }

</script>

<style>
  #app{
    background-color: lightgrey;
  }
</style>
