import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentPage: '',
    dataRecord: {
      'recordType': '',
      'standardFields': {},
      'sublistNames': [],
      'sublists': {},
      'extraParams': {}
    },
    componentsCounter: 0
  },

  mutations: {

    setCurrentPage (state, pageId) {
      state.currentPage = pageId
    },

    resetDataRecord (state) {
      state.dataRecord = {
        'recordType': '',
        'standardFields': {},
        'sublistNames': [],
        'sublists': {},
        'extraParams': {}
      }
    },

    addRecordType (state, recordType) {
      state.dataRecord.recordType = recordType
    },

    addExtraParamsToRecord (state, paramsObject) {
      for (var key in paramsObject) {
        state.dataRecord.extraParams[key] = paramsObject[key]
        console.log(state.dataRecord)
      }
    },

    addFieldsToRecord (state, fieldsObject) {
      for (var field in fieldsObject) {
        state.dataRecord.standardFields[field] = fieldsObject[field]
      }
    },

    addSublistToRecord (state, sublistDetails) {
      var sublistName = sublistDetails.sublistName
      var sublistObject = sublistDetails.sublistObject

      // create a new sublist and add ... or add to the existing sublnewWarehouse = {'label': 'Select Warehouse', 'value': -1}ist
      if (state.dataRecord.sublistNames.indexOf(sublistName) === -1) {
        state.dataRecord.sublistNames.push(sublistName)
        state.dataRecord.sublists[sublistName] = []
      }
      state.dataRecord.sublists[sublistName].push(sublistObject)
    },

    incrementComponentsCounter (state) {
      state.componentsCounter += 1
    }

  }

})
