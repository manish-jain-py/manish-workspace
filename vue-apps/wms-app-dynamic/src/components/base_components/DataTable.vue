<template>
  <div>

      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      <vue-table
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        @onClickFunction="selectItem">
      </vue-table>

  </div>
</template>

<script>

  import VueTable from './VueTable.vue'
  import store from '../store'

  export default {
    data: function(){
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
      getData(action, paramsObj) {
        console.log(paramsObj)
        axios.get(action, {
            headers: {
              "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
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
          console.log(store.state.dataRecord)
        }
      }
    },
    created: function () {
      this.gridColumns = this.propsObject.tableColumns
      var action = this.propsObject.getDataAction
      if (this.propsObject.getDataActionParamsType === 'extraParams') {
        var params = {}
        var paramKeys = this.propsObject.getDataActionParamsKeys
        for (var ind in paramKeys) {
          params[paramKeys[ind]] = store.state.dataRecord.extraParams[paramKeys[ind]]
        }
        console.log(params)
      }
      this.getData(action, params)
    }
  }

</script>
