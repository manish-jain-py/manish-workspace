<template>

  <div class="form-group">
    <v-select v-model="selectedInput" :on-change="updateSelectedValue" :options="itemsList"></v-select>
  </div>

</template>

<script>

  import settings from '../../config/settings.js'

  import vSelect from "vue-select"

  export default {

    name: 'DropDown',

    data: function () {
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
            "Authorization": settings.account.authorization
          }
        })
          .then(response => {
            console.log(response.data)
            this.itemsList.push(...response.data)
          })
      },

      updateSelectedValue(newValue) {
        if (newValue !== this.propsObject.label) {
          if (this.propsObject.extraParam) {
            this.extraParamObject[this.propsObject.name] = newValue
            this.$store.commit('ADD_AUX_PARAMS_TO_RECORD', this.extraParamObject)
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
