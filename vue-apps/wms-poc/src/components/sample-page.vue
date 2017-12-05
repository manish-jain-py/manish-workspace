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
        gridColumns: ['PO#', 'Vendor'],
        gridData: [
          { 'PO#': 923, Vendor: 'AMEX', uid: 1 },
          { 'PO#': 895, Vendor: 'Staples', uid: 11  },
          { 'PO#': 947, Vendor: 'Target', uid: 12  },
          { 'PO#': 21853, Vendor: 'Walmart', uid: 31  }
        ]
      }
    },
    components: {
      demoGrid
    },
    created: function(){
      store.commit('setPageTitle', 'Test Page')
    }
  }

</script>

