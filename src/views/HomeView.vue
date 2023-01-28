<template>
  <div class="bg-gray-200 dark:bg-blue-200">
    <div class="container mx-auto flex sm:w-full md:w-full lg:py-12 lg:px-16 xl:py-12 xl:px-16">
      <div class="w-2/12 max-md:hidden max-lg:hidden max-xl:hidden">
        <SideBar @getSideBarFilters="getSideBarFilters($event)"/>
      </div>
      <div class="sm:w-full lg:w-10/12 md:w-full flex flex-col">
        <div class="flex h-10 lg:flex-row xl:flex-row justify-between mt-2 ">
            <SearchBar @update:search="getSearch($event)" class="w-8/12 max-md:hidden max-lg:hidden max-xl:hidden"/>
          <div class="flex w-3/12 justify-around">
            <SelectComponents :selectList="limits" @input="limitNumbers($event)"/>
            <SelectComponents :selectList="filter" @input="sortByPrice($event)"/>
          </div>
        </div>
        <div class=" flex flex-row  my-4 mx-auto px-4 md:px-12 lg:p-8 xl:p-8">
          <List :dataList="dataList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  ref, onMounted, watch } from 'vue';
import type { ListType } from "@/types/types";
import { useStore } from 'vuex';
import SideBar from '@/components/SideBar/SideBar.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import SelectComponents from '@/components/Selects/SelectComponents.vue';
import List from '@/components/List/List.vue';
const store = useStore()

type FilterType = {
  limitNumber: number | string
  sortType: string
  brands: string[]
  priceForm: {
    min: string | number,
    max: string | number
  }
  search: string
}
const dataList = ref<ListType[]>([])

const filterForm = ref<FilterType>({
  limitNumber: 12,
  sortType: "",
  brands: [],
  priceForm: {
      min: 0,
      max: 0
  },
  search: ""
})
const limits = ref([
    {
        text: 12,
        value: 12
    },
    {
        text: 24,
        value: 24
    },
    {
        text: 48,
        value: 48
    },
    {
        text: 60,
        value: 60
    }
])
const filter = ref([
  {
    text: "Filter By Price",
    value: ""
  },
  {
    text: "Low To High",
    value: "LowToHigh"
  },
  {
    text: "High To Low",
    value: "highToLow"
  }
])
// sort selects
const limitNumbers = (event: string | number) => {
  filterForm.value.limitNumber = event
  getData()
}
const sortByPrice = (event: string) => {
  filterForm.value.sortType = event
  getData()
}
const getSideBarFilters = (event: any) => {
  filterForm.value.brands = event.slectedBrands
  filterForm.value.priceForm = event.priceForm
  getData()
}
const  getSearch = (event: string ) => {
  filterForm.value.search = event
  getData()  
}
// sort selects
// getData
const getData = () => {
  store.commit('filteredList', filterForm.value)
  dataList.value = store.state.filteredProducts
}
onMounted(() => {
  getData()
  console.log(store.state.darkMode);
  
})
// getData
</script>
<style lang="scss" scoped>
body {
  min-height: 50vh;

}
</style>