import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    pageTitle: '',
    warehouse: {'label': 'Not Selected', 'value': -1},
    dataRecord: {
      'recordType': '',
      'creationType': '', // "transform", "create" etc.
      'standardFields': {},
      'sublistNames': ['sublist1', 'sublist2'],
      'sublist1': [{}],
      'sublist2': [{}],
      'extraParams': {}
    },
    items: [],
    gridData: []
  },

  mutations: {

    setPageTitle (state, title) {
      state.pageTitle = title
    },

    setWarehouse (state, location) {
      state.warehouse.label = location.label
      state.warehouse.value = location.value
    },

    setRecordType (state, recordType) {
      state.dataRecord.recordType = recordType
    },

    setCreationType (state, creationType) {
      state.dataRecord.creationType = creationType
    },

    addFieldsToRecord (state, fieldsObject) {
      for (var field in fieldsObject) {
        state.dataRecord.standardFields[field] = fieldsObject[field]
      }
    },

    addSublistToRecord (state, sublistName, sublistObject) {
      if (state.dataRecord.sublistNames.indexOf(sublistName) === -1) {
        state.dataRecord.sublistNames.push(sublistName)
        state.dataRecord[sublistName] = []
      }
      state.dataRecord[sublistName].push(sublistObject)
    },

    resetDataRecord (state) {
      state.dataRecord = {
        'recordType': '',
        'creationType': '', // "transform", "create" etc.
        'standardFields': {},
        'sublistNames': [],
        'extraParams': {}
      }
    },

    addExtraParamsToRecord (state, paramsObject) {
      for (var key in paramsObject) {
        state.dataRecord.extraParams[key] = paramsObject[key]
      }
    },

    updateItems (state, arr) {
      state.items = arr
    },

    resetItems (state) {
      state.items = []
    },

    updateItemSerialNumber (state, obj) {
      var line = obj.line
      var serialNumber = obj.val
      console.log(state.items)
      state.items[line].serialnumber = serialNumber
      console.log(state.items)
    },

    updateItemQuantity (state, obj){
      var line = obj.line
      var newReceivedQuantity = parseInt(obj.val)
      state.items[line].received = parseInt(state.items[line].received) + newReceivedQuantity
      state.items[line].newReceived = parseInt(state.items[line].newReceived) + newReceivedQuantity
    },

    addItemsSublist (state) {
      state.dataRecord.items = state.items
    },

    updateGridData (state, arr) {
      state.gridData = []
      state.gridData.push(...arr)
    }
  }
})
