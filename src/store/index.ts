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
      //created new let and assigned products
      let sortedResult: ListType[] = state.products
      // payload destructured
      const {brands, search, limitNumber, sortType, priceForm} = payload
      //first filter is done on prices
      if(+priceForm.max > 0 || +priceForm.min > 0) {
        let n: ListType[] = []
         sortedResult.forEach(el => {
          // takes products between min and max prices
          if(el.price > +priceForm.min && el.price < +priceForm.max){
            n.push(el)
          }
        })
        sortedResult = n        
      }
      // filtered by brands
      if(brands.length > 0) {
        let n: ListType[] = []
        // forEach within forEach got products that matches brand
        sortedResult.forEach(product => {
          brands.forEach(brand => {
            //if true adds product to list
            if(product.brand === brand) {
              n.push(product)
            }
          });
        });
        // search from filtered list by brands
        if(search.length > 0) {
          // trim() removes tabs, toLowerCase() transforms all letters to lower letters, 
          // includes() searches by letter by letter
          sortedResult = n.filter(el => el.name.trim().toLowerCase().includes(search.trim().toLowerCase()))
        } else {
          // if there is no search it assigns filtered list to to sortedList
          sortedResult = n
        }
      }
      // this search is similar with search inside brands filter, 
      if(search.length > 0) {
        sortedResult = sortedResult.filter(el => el.name.trim().toLowerCase().includes(search.trim().toLowerCase()))
      } 
      /**
       * final filter filters by product price, from lowest price to hieghest price or reverse
       * if sort type is empty it assigns sortedList to filteredProducts inside of state
       */
      if(sortType === 'LowToHigh') {
        state.filteredProducts = sortedResult.sort(function(a, b){return a.price - b.price})
        .slice(0, limitNumber)
      } else if (sortType === 'highToLow') {
        state.filteredProducts = sortedResult.sort(function(a, b){return b.price - a.price})
        .slice(0, limitNumber)
      } else {
        // if sort type is empty it assigns sortedList to filteredProducts inside of state
        state.filteredProducts = sortedResult.slice(0, limitNumber)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
