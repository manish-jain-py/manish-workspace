<template>

  <div class="col-md-1 form-group button-container">
    <button id="propsObject.name" class="btn btn-primary btn-wms" @click="performAction">{{ propsObject.label }}</button>
  </div>

</template>

<script>

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
        return this.$store.state.currentPage
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
            this.$store.commit('ADD_RECORD_TYPE', this.parentRecord)
          }
          if (this.standardFieldsObject) {
            this.$store.commit('ADD_FIELDS_TO_RECORD', this.standardFieldsObject)
          }
          if (this.sublistName) {
            this.$store.commit('ADD_SUBLIST_TO_RECORD', {sublistName: this.sublistName, sublistObject: this.sublistObject})
          }

          if (this.propsObject.actionType == 'SubmitForm') {

            // Dispatch save record action and pass mutation id
            this.$store.dispatch({
              type: 'SAVE_RECORD',
              actionUrl: this.propsObject.submitAction,
              params: { 'dataRecord': this.$store.state.dataRecord },
              mutationId: 'UPDATE_RECORD_LINK'
            })

          }

        }

        // Navigate to the target page
        var toPageId = this.propsObject.params.pageId
        this.$store.commit('SET_CURRENT_PAGE', toPageId)

      }
    }

  }

</script>
