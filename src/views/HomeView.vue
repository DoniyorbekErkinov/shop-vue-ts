<template>
  <div class="bg-gray-200">
    <div class="container mx-auto flex py-12 px-16">
      <div class="w-2/12 ">
        <SideBar/>
      </div>
      <div class="w-10/12 flex flex-col">
        <div class="flex h-10 justify-between">
            <SearchBar class="w-8/12"/>
          <div class="flex w-3/12 justify-around">
            <SelectComponents :selectList="limits" @input="logSelect1($event)"/>
            <SelectComponents :selectList="filter" @input="logSelect2($event)"/>
          </div>
        </div>
        <div class=" flex flex-row p-8">
          <List :dataList="dataList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import SideBar from '@/components/SideBar/SideBar.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import SelectComponents from '@/components/Selects/SelectComponents.vue';
import List from '@/components/List/List.vue';
defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
    SearchBar,
    List
  },
});
const store = useStore()
const dataList = ref(store.state.products)

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
    text: "Low To High",
    value: "LowToHigh"
  },
  {
    text: "High To Low",
    value: "highToLow"
  }
])
const logSelect1 = (event: string | number) => {
console.log(event);
}
const logSelect2 = (event: string | number) => {
console.log(event);
}
</script>
<style lang="scss" scoped>

</style>