<template>

  <div id="content">
    <app-header v-bind:pageTitle="title"></app-header>
    <div>{{ dataRecord }}</div>
    <div v-for="component in pageComponents">
      <component :key="components[component].name" v-bind:is="components[component].type"
                 v-bind:propsObject="components[component]"></component>
    </div>
  </div>

</template>

<script>

  import appConfig from '../app_config.js'
  import components from '../component_config.js'
  import store from '../components/store'

  // import all base components
  import TextBox from '../components/base_components/TextBox.vue'
  import ActionButton from '../components/base_components/Button.vue'
  import DropDown from './base_components/DropDown.vue'
  import DataTable from '../components/base_components/DataTable.vue'
  import HiddenValuesSet from '../components/base_components/HiddenValuesSet.vue'
  import Anchor from '../components/base_components/Anchor.vue'
  import MenuIcon from '../components/base_components/MenuIcon.vue'
  import AppHeader from '../components/base_components/AppHeader.vue'
  import Date from '../components/base_components/Date.vue'

  export default {

    name: store.state.currentPage,

    data: function () {
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
      DropDown,
      AppHeader,
      DataTable,
      HiddenValuesSet,
      Anchor,
      MenuIcon,
      Date
    },

    created: function () {
      if (!store.state.currentPage) {
        store.commit('SET_CURRENT_PAGE', appConfig.app.homePage)
      }
    }

  }

</script>
