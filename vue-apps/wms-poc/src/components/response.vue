<template>
  <div>

    <router-link to="/main-menu">Main Menu</router-link>

    <div id="response">
     <a v-bind:href="receiptRecordUrl"> Receipt Record </a> created successfully.
    </div>

  </div>
</template>

<script>

  import store from './store/index.js'

  export default {
    computed: {
      receiptRecordUrl: {
        get: function(){
          console.log(this.$route.query.response_url)
          return 'https://system.na2.netsuite.com' + this.$route.query.response_url
        }
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Receipt Created')
    }
  }

</script>
