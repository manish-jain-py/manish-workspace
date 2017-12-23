<template>
  <div>
    <div v-for="hiddenObj in hiddenValuesArray">
      <input type="hidden" :id="hiddenObj.name" :key="hiddenObj.name" :value="hiddenObj.val">
    </div>
  </div>
</template>

<script>

  import store from '../store'

  export default {
    name: 'HiddenValuesSet',
    data: function(){
      return {
        hiddenValuesArray: []
      }
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
            this.hiddenValuesArray.push(...response.data)
          })
      }
    },
    created: function () {
      var action = this.propsObject.getDataAction
      if (this.propsObject.getDataActionParamsType === 'state') {
        var params = {}
        var paramKeys = this.propsObject.getDataActionParamsKeys
        for (var ind in paramKeys) {
          params[paramKeys[ind]] = store.state[paramKeys[ind]]
        }
        console.log(params)
      }
      this.getData(action, params)
    }
  }
</script>
