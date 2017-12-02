<template>
  <div>
    I am a test component
    <router-link to="/menu">Main Menu</router-link>
  </div>
</template>

<script>

  import store from './store/index.js'

  export default {
    created: function(){
      store.commit('increment')
    }
  }

</script>

