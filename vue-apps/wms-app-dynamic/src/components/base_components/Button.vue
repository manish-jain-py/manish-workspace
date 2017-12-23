<template>

  <div class="form-group">
    <button id="propsObject.name" class="btn btn-primary btn-wms" @click="performAction">{{ propsObject.label }}</button>
  </div>

</template>

<script>

  import settings from '../../config/settings.js'

  import store from '../store/index'
  import appConfig from '../../app_config.js'
  import components from '../../component_config.js'

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

        // For forwarding and submitting the form
        if (this.propsObject.actionType == 'ForwardForm' || this.propsObject.actionType == 'SubmitForm') {

          var allComponents = appConfig.app.pages[this.parentPage].componentList

          for (var component in allComponents) {
            console.log(components)
            var fieldDetails = components[allComponents[component]]

            if (fieldDetails.parentRecord && fieldDetails.fieldName) {

              // update parent data record name
              if (fieldDetails.parentRecord) {
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
                if (fieldDetails.type === 'HiddenValuesSet') {
                  for (var ind in fieldDetails.hiddenFieldsArray) {
                    this.sublistObject[fieldDetails.hiddenFieldsArray[ind]] = document.getElementById(fieldDetails.hiddenFieldsArray[ind]).value
                  }
                } else {
                  this.sublistObject[fieldDetails.fieldName] = document.getElementById(fieldDetails.name).value
                }
              } else {
                if (fieldDetails.type === 'HiddenValuesSet') {
                  for (var ind in fieldDetails.hiddenFieldsArray) {
                    this.standardFieldsObject[fieldDetails.hiddenFieldsArray[ind]] = document.getElementById(fieldDetails.hiddenFieldsArray[ind]).value
                  }
                } else {
                  this.standardFieldsObject[fieldDetails.fieldName] = document.getElementById(fieldDetails.name).value
                }
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
            store.commit('addSublistToRecord', {sublistName: this.sublistName, sublistObject: this.sublistObject})
          }

          if (this.propsObject.actionType == 'SubmitForm') {
            axios.get(this.propsObject.submitAction, {
              headers: {
                "Authorization": settings.account.authorization
              },
              params: {
                'dataRecord': store.state.dataRecord
              }
            })
              .then(response => {
                var link = 'https://system.na2.netsuite.com/' + response.data
                store.commit('updateRecordLink', link)
                console.log(link)
              })
          }

        }

        // Navigate to the target page
        var toPageId = this.propsObject.params.pageId
        store.commit('setCurrentPage', toPageId)

      }
    }

  }

</script>
