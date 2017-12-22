<template>
  <div>

    <router-link to="/main-menu">Main Menu</router-link>
    <div>{{ $store.state.dataRecord }}</div>
    <div> {{ poId }} </div>
    <div> {{ pages }} </div>

    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      <demo-grid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        @onClickFunction="sayHi">
      </demo-grid>
    </div>

  </div>
</template>

<script>

  import store from './store/index.js'
  import demoGrid from './common-components/grid.vue'
  import pages from './app-config'

  export default {
    data: function(){
      return {
        searchQuery: '',
        gridColumns: pages[0].components[0].labels,
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
          return "947"
        }
      },
      pages: function() {
        return pages
      }
    },
    components: {
      demoGrid
    },
    methods: {
      getPObyWH() {
        if (false){
          this.gridData = store.state.items
        } else {
          axios.get(pages[0].components[0].sourceDataAction, {
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
      sayHi(entry) {
        alert(entry['item'] + entry['received'] + entry['remaining'] + entry['line'])
        //this.$router.push({path: 'item-details', query: {line: entry['line']}})
      }
    },
    created: function(){
      store.commit('setPageTitle', 'Select Item')
      this.getPObyWH()
    }
  }

</script>
