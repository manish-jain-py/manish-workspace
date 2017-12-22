<template>
  <div class="form-group">
    <v-select v-model="selectedInput" :on-change="updateSelectedValue" :options="itemsList"></v-select>
  </div>
</template>

<script>

  import store from '../store'
  import vSelect from "vue-select"

  export default {
    name: 'Dropdown',
    data: function(){
      return {
        selectedInput: '',
        itemsList: [],
        extraParamObject: {}
      }
    },
    props: ['propsObject'],
    components: {
      vSelect
    },
    methods: {
      getItemsList() {
        axios.get(this.propsObject.getDataAction, {
          headers: {
            "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
          }
        })
          .then(response => {
            this.itemsList.push(...response.data)
          })
      },
      updateSelectedValue(newValue) {
        if (newValue !== this.propsObject.label){
          if (this.propsObject.extraParam) {
            this.extraParamObject[this.propsObject.name] = newValue
            store.commit('addExtraParamsToRecord', this.extraParamObject)
          }
        }
      }
    },
    created: function () {
      this.itemsList = [{'label': this.propsObject.label, 'value': -1}]
      this.getItemsList()
    }
  }
</script>
