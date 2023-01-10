import { createStore } from 'vuex'
import {ListModule} from './List'
export default createStore({
  state: {
    ...ListModule.state
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ListModule
  }
})
