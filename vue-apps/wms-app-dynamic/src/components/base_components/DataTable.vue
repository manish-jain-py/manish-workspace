<template>

  <div>

    <div class="table-search-query">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
    </div>

    <vue-table
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"
      @onClickFunction="selectItem">
    </vue-table>

  </div>

</template>

<script>

  import settings from '../../config/settings.js'

  import VueTable from './VueTable.vue'

  export default {

    data: function () {
      return {
        searchQuery: '',
        gridData: [],
        extraParamObject: {}
      }
    },

    computed: {
      params: function () {
        return this.$store.getters.getParamsFromState(this.propsObject.getDataActionParamLocation)
      },
      action: function () {
        return this.propsObject.getDataAction
      },
      gridColumns: function () {
        return this.propsObject.tableColumns
      }
    },

    components: {
      VueTable
    },

    props: ['propsObject'],

    methods: {

      getData() {
        axios.get(this.action, {
          headers: {
            "Authorization": settings.account.authorization
          },
          params: this.params
        })
          .then(response => {
            for (var key in response.data) {
              response.data[key].clicked = false
            }
            this.gridData.push(...response.data)
          })
      },

      selectItem(entry) {
        if (this.propsObject.extraParam) {
          this.extraParamObject[this.propsObject.name] = entry
          this.$store.commit('ADD_AUX_PARAMS_TO_RECORD', this.extraParamObject)
        }
      }

    },

    created: function () {
      this.getData()
    }
  }

</script>
