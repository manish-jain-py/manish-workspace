<template>

  <div>
    <div v-for="hiddenObj in hiddenValuesArray">
      <input type="hidden" :id="hiddenObj.name" :key="hiddenObj.name" :value="hiddenObj.val">
    </div>
  </div>

</template>

<script>

  import settings from '../../config/settings.js'

  import store from '../store'

  export default {

    name: 'HiddenValuesSet',

    data: function () {
      return {
        hiddenValuesArray: []
      }
    },

    props: ['propsObject'],

    methods: {

      getActionAndParam() {
        var action = this.propsObject.getDataAction
        if (this.propsObject.getDataActionParamsType === 'state') {
          var params = {}
          var paramKeys = this.propsObject.getDataActionParamsKeys
          for (var ind in paramKeys) {
            params[paramKeys[ind]] = store.state[paramKeys[ind]]
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
            this.hiddenValuesArray.push(...response.data)
          })
      }

    },

    created: function () {

      var actionObj = this.getActionAndParam()
      this.getData(actionObj)
    }

  }

</script>
