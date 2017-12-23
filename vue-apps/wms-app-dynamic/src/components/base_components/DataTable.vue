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
  import store from '../store'

  export default {

    data: function () {
      return {
        searchQuery: '',
        gridColumns: [],
        gridData: [],
        extraParamObject: {}
      }
    },

    components: {
      VueTable
    },

    props: ['propsObject'],

    methods: {

      getActionAndParams () {
        this.gridColumns = this.propsObject.tableColumns
        var action = this.propsObject.getDataAction
        if (this.propsObject.getDataActionParamsType === 'extraParams') {
          var params = {}
          var paramKeys = this.propsObject.getDataActionParamsKeys
          for (var ind in paramKeys) {
            params[paramKeys[ind]] = store.state.dataRecord.extraParams[paramKeys[ind]]
          }
        }
        return {action: action, params: params}
      },

      getData(actionObj) {
        var action = actionObj.action
        var paramsObj = actionObj.params
        console.log(paramsObj)
        axios.get(action, {
          headers: {
            "Authorization": settings.account.authorization
          },
          params: paramsObj
        })
          .then(response => {
            console.log(response.data)
            this.gridData.push(...response.data)
          })
      },

      selectItem(entry) {
        if (this.propsObject.extraParam) {
          this.extraParamObject[this.propsObject.name] = entry
          store.commit('addExtraParamsToRecord', this.extraParamObject)
        }
      }

    },
    created: function () {
      var actionObj = this.getActionAndParams()
      this.getData(actionObj)
    }
  }

</script>
