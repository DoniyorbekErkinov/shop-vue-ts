import { createStore } from 'vuex'
import type { ListType } from "@/types/types";
import products from "../data/data"

export default createStore({
  state: {
    products: products,
    filteredProducts: <ListType[]>[]
  },
  getters: {
    
  },
  mutations: {
    filteredList (state, payload) {
      console.log(payload);
      
      state.filteredProducts = state.products.slice(0, 12)
    }
  },
  actions: {
  },
  modules: {
  }
})
