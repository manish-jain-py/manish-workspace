<template>
  <div>

    <router-link to="/main-menu">Main Menu</router-link>
    <div>{{ $store.state.dataRecord }}</div>

    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      <demo-grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        @onClickFunction="updatePO">
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
        poId: -1,
        extraParams: {}
      }
    },
    computed: {
      warehouseObject: {
        get: function(){
          return store.state.warehouse
        }
      },
      gridData: {
        get: function () {
          return store.state.gridData
        }
      }
    },
    components: {
      demoGrid
    },
    methods: {
      getPObyWH() {
        if (this.gridData.length == 0){
          axios.get("https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=123&deploy=1", {
            headers: {
              "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
            },
            params: {
              'warehouse': this.warehouseObject.value
            }
          })
            .then(response => {
              this.gridData = response.data
            })
        }
      },
      updatePO(entry) {
        this.poId = entry['poId']
        this.extraParams['fromId'] = entry['poId']
        store.commit('addExtraParamsToRecord', this.extraParams)
        this.$router.push({ path: 'select-item' })
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Select Purchase Order')
      store.commit('resetDataRecord')
      store.commit('setRecordType', 'itemreceipt')
      store.commit('setCreationType', 'transform')
      store.commit('resetItems')
      this.getPObyWH()
    }
  }

</script>
