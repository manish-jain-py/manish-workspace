<template>
  <div>
    I am a test component
    <router-link to="/main-menu">Main Menu</router-link>

    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      <demo-grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </demo-grid>
    </div>

  </div>
</template>

<script>

  import store from './store/index.js'
  import demoGrid from './common-components/grid.vue'

  export default {
    data: function(){
      return {
        searchQuery: '',
        gridColumns: ['poId', 'name'],
        gridData: [
          { 'poId': 923, name: 'AMEX', uid: 1 },
          { 'poId': 895, name: 'Staples', uid: 11  },
          { 'poId': 947, name: 'Target', uid: 12  },
          { 'poId': 21853, name: 'Walmart', uid: 31  }
        ]
      }
    },
    components: {
      demoGrid
    },
    methods: {
      getPObyWH() {
        axios.get("https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=123&deploy=1", {
          headers: {
            "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
          }
        })
          .then(response => {
            console.log(typeof response.data)
            console.log(this.gridData)
            this.gridData = response.data
            console.log(this.gridData)
            for (var i in response.data){
              console.log(response.data[i])
            }
          })
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Test Page')
      this.getPObyWH()
    }
  }

</script>

