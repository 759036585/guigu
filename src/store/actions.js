import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from './mutations-type.js'

import {
  getAddress,
  getCategorys,
  getShops
} from '@/api'

export default {
  getAddress ({ commit, state }) {
    const params = state.latitude + ',' + state.longitude
    getAddress(params).then(res => {
      if (res.code === 0) {
        const address = res.data
        commit(RECEIVE_ADDRESS, { address })
      }
    })
  },
  getCategorys ({ commit }) {
    getCategorys({}).then(res => {
      if (res.code === 0) {
        const categorys = res.data
        commit(RECEIVE_CATEGORYS, { categorys })
      }
    })
  },
  getShops ({ commit, state }) {
    const params = {}
    params.latitude = state.latitude
    params.longitude = state.longitude
    getShops(params).then(res => {
      if (res.code === 0) {
        const shops = res.data
        commit(RECEIVE_SHOPS, { shops })
      }
    })
  }
}
