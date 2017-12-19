<template>
  <div id="app">
    <div id="content">
      <div v-for="component in pageComponents">
        <component v-bind:is="components[component].type" v-bind:propsObject="components[component]"></component>
      </div>
    </div>
  </div>
</template>

<script>

  import TextBox from './components/base_components/TextBox.vue'
  import ActionButton from './components/base_components/Button.vue'
  import Vue from 'vue'
  import appConfig from './app_config.js'
  import store from './components/store'

  export default {
    name: 'App',
    data: function(){
      return {
        components: appConfig.components
        }
    },
    computed: {
      currentPage: function () {
        return store.state.currentPage
      },
      pageComponents: function () {
        return appConfig.app.pages[store.state.currentPage].componentList
      }
    },
    components: {
      TextBox,
      ActionButton
    },
    created: function () {
      store.commit('setCurrentPage', appConfig.app.homePage)
    }
  }

</script>
