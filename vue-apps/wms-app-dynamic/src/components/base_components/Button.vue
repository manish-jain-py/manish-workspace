<template>
  <div class="form-group">
    <button id="propsObject.name" class="btn btn-primary" @click="performAction">{{ propsObject.label }}</button>
  </div>
</template>

<script>

  import store from '../store/index'
  import appConfig from '../../app_config.js'
  export default {

    name: 'ActionButton',
    data: function () {
      return {
        parentRecord: '',
        sublistName: '',
        sublistObject: {},
        standardFieldsObject: {}
      }
    },
    computed: {
      parentPage: function () {
        return store.state.currentPage
      },
    },
    props: ['propsObject'],
    methods: {

      performAction: function () {

        // For forwarding the form
        if (this.propsObject.actionType == 'ForwardForm' || this.propsObject.actionType == 'SubmitForm' ) {

          var allComponents = appConfig.app.pages[this.parentPage].componentList

          for (var component in allComponents) {
            var fieldDetails = appConfig.components[allComponents[component]]

            if (fieldDetails.parentRecord && fieldDetails.fieldName) {

              // update parent data record name
              if (fieldDetails.parentRecord){
                if (!this.parentRecord) {
                  this.parentRecord = fieldDetails.parentRecord
                }
              }

              // update sublist name and initialize fields and sublist objects
              if (fieldDetails.sublistName) {
                if (!this.sublistName) {
                  this.sublistName = fieldDetails.sublistName
                  this.sublistObject = {}
                }
                this.sublistObject[fieldDetails.fieldName] = document.getElementById(fieldDetails.name).value
              } else {
                this.standardFieldsObject[fieldDetails.fieldName] = document.getElementById(fieldDetails.name).value
              }
            }
          }

          // update dataRecord with recordType, fields and sublist values
          if (this.parentRecord) {
            store.commit('addRecordType', this.parentRecord)
          }
          if (this.standardFieldsObject) {
            store.commit('addFieldsToRecord', this.standardFieldsObject)
          }
          if (this.sublistName) {
            console.log(store.state.dataRecord)
            store.commit('addSublistToRecord', {sublistName: this.sublistName, sublistObject: this.sublistObject})
            console.log(store.state.dataRecord)
          }

          if (this.propsObject.actionType == 'SubmitForm') {
            axios.get(this.propsObject.submitAction, {
              headers: {
                "Authorization": "NLAuth nlauth_account=TSTDRV1796256, nlauth_email=majain@netsuite.com, nlauth_signature=manish@netsuite123A"
              },
              params: {
                'dataRecord': store.state.dataRecord
              }
            })
              .then(response => {
                console.log(response.data)
              })
          }

        }

        var toPageId = this.propsObject.params.pageId
        store.commit('setCurrentPage', toPageId)

      }
    }

  }
</script>
