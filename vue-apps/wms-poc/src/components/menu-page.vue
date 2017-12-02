<template>
  <div class="border row">
    <div class="border col-xs-6 icon-col" v-for="icon in menuIconConfig">
      <menu-icon v-bind:source="icon"></menu-icon>
    </div>
  </div>
</template>

<script>

  import menuIcon from './menu-icon.vue'
  import appConfig from './config.js'
  import store from './store/index.js'

  export default {
    name: 'menuPage',
    data(){
      return {
        menuIconConfig: appConfig.menuIconConfig
      }
    },
    components: {
      menuIcon
    },
    created: function(){
      store.commit('increment')
    }
  }

</script>

<style>
  .icon-col{
    border: 2px;
  }
</style>
