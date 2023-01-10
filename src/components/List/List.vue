<template>
    <div>
        <div class="flex flex-wrap justify-around">
            <div 
              class="hover:scale-105 m-2 w-3/12 rounded-lg bg-white shadow-slate-300 shadow-md justify-between p-4" 
                v-for="(item, i) in dataList" :key="i">              
              <div class="flex justify-center">
                <img class="h-40 rounded-md" :src="item.image" :alt="item.name" />
              </div>
              <h1>{{ item.name }} | {{ item.brand }}</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

type ListType = {
    id: number | string
    name: string
    brand: string
    price: number
    image: string
}
const props = defineProps({
    dataList: {
        type: Array as PropType<ListType[]>
    }
})
</script>

<style lang="scss" scoped>

</style>