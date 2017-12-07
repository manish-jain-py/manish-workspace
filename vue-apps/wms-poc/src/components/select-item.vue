<template>
  <div>

    <router-link to="/main-menu">Main Menu</router-link>
    <div>{{ $store.state.dataRecord }}</div>
    <div> {{ poId }} </div>
    <div> {{ $store.state.items }} </div>

    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      <demo-grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        @onClickFunction="selectItem">
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
        gridColumns: ['item', 'received', 'remaining'],
        gridData: []
      }
    },
    computed: {
      warehouseObject: {
        get: function(){
          return store.state.warehouse
        }
      },
      poId: {
        get: function() {
          return store.state.dataRecord.extraParams.fromId
        }
      }
    },
    components: {
      demoGrid
    },
    methods: {
      getPObyWH() {
        if (store.state.items.length != 0){
          this.gridData = store.state.items
        } else {
          axios.get("https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=125&deploy=1", {
            headers: {
              "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
            },
            params: {
              'po_id': this.poId
            }
          })
            .then(response => {
              this.gridData.push(...response.data)
              store.commit('updateItems', this.gridData)
            })
        }
      },
      selectItem(entry) {
        //alert(entry['item'] + entry['received'] + entry['remaining'] + entry['line'])
        this.$router.push({path: 'item-details', query: {line: entry['line']}})
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Select Item')
      this.getPObyWH()
    }
  }

</script>
