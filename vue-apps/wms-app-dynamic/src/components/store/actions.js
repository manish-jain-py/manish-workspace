import * as types from './mutation-types'
import settings from '../../config/settings.js'

export const SAVE_RECORD = (context, payload) => {

  axios.get(payload.actionUrl, {
    headers: {
      "Authorization": settings.account.authorization
    },
    params: payload.params
  })
    .then(response => {
      context.commit(payload.mutationId, response.data)
      console.log(response.data)
    })

}
