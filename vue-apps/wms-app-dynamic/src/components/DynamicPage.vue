<template>
  <div id="content">
    <app-header v-bind:pageTitle="title"></app-header>
    <div>{{ dataRecord }}</div>
    <div v-for="component in pageComponents">
      <component :key="components[component].name" v-bind:is="components[component].type" v-bind:propsObject="components[component]"></component>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import appConfig from '../app_config.js'
  import components from '../component_config.js'
  import store from '../components/store'

  import TextBox from '../components/base_components/TextBox.vue'
  import ActionButton from '../components/base_components/Button.vue'
  import Dropdown from '../components/base_components/Dropdown.vue'
  import DataTable from '../components/base_components/DataTable.vue'

  import AppHeader from '../components/base_components/AppHeader.vue'

  export default {
    name: store.state.currentPage,
    data: function(){
      return {
        components: components,
        appConfig: appConfig
      }
    },
    computed: {
      currentPage: function () {
        return store.state.currentPage
      },
      pageComponents: function () {
        return appConfig.app.pages[store.state.currentPage].componentList
      },
      title: function () {
        return appConfig.app.pages[store.state.currentPage].title
      },
      dataRecord: function () {
        return store.state.dataRecord
      }
    },
    components: {
      TextBox,
      ActionButton,
      Dropdown,
      AppHeader,
      DataTable
    },
    created: function () {
      if (!store.state.currentPage){
        store.commit('setCurrentPage', appConfig.app.homePage)
      }
    }
  }

</script>
