<template>
  <div id="app">
    <div id="content" v-for="component in pages[currentPage].componentList">
      <component v-bind:is="components[component].type" v-bind:propsObject="components[component]"></component>
    </div>
  </div>
</template>

<script>

  import TextBox from './components/TextBox.vue'
  import Vue from 'vue'
  import appConfig from './app_config.js'

  export default {
    name: 'App',
    data: function(){
      return {
        currentComponent: TextBox,
        currentPage: appConfig.app.homePage,
        pages: appConfig.app.pages,
        components: appConfig.components,
        }
    },
    components: {
      TextBox
    }
  }

</script>
