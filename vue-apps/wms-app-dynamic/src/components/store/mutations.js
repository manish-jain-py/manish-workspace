import * as types from './mutation-types'

const mutations = {

  [types.SET_CURRENT_PAGE](state, pageId) {
    state.currentPage = pageId
  },

  [types.RESET_DATA_RECORD](state) {
      state.dataRecord = {
      'recordType': '',
      'standardFields': {},
      'sublistNames': [],
      'sublists': {},
      'auxParams': {'recordLink': ''}
    }
  },

  [types.ADD_RECORD_TYPE](state, recordType) {
    state.dataRecord.recordType = recordType
  },

  [types.ADD_AUX_PARAMS_TO_RECORD](state, paramsObject) {
    for (var key in paramsObject) {
      state.dataRecord.auxParams[key] = paramsObject[key]
      console.log(state.dataRecord)
    }
  },

  [types.ADD_FIELDS_TO_RECORD](state, fieldsObject) {
    for (var field in fieldsObject) {
      state.dataRecord.standardFields[field] = fieldsObject[field]
    }
  },

  [types.ADD_SUBLIST_TO_RECORD](state, sublistDetails) {
    var sublistName = sublistDetails.sublistName
    var sublistObject = sublistDetails.sublistObject

    // create a new sublist in case of first time addition
    if (state.dataRecord.sublistNames.indexOf(sublistName) === -1) {
      state.dataRecord.sublistNames.push(sublistName)
      state.dataRecord.sublists[sublistName] = []
    }
    state.dataRecord.sublists[sublistName].push(sublistObject)
  },

  [types.UPDATE_RECORD_LINK](state, link) {
    state.dataRecord.auxParams.recordLink = link
  }

}

export default mutations
