export const getRecordLink = (state) => {
  return state.dataRecord.auxParams.recordLink
}

export const getParamsFromState = (state) => (paramLocation) => {

  var paramLocationArray = paramLocation.split(':')
  var paramObj = {}
  var parent = state
  for (var index in paramLocationArray){
    parent = parent[paramLocationArray[index]]
    if (index == paramLocationArray.length - 1){
      paramObj[paramLocationArray[index]] = parent
    }
  }
  return paramObj

}
