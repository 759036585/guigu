
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from './mutations-type'

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  }
}
