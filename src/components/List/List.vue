<template>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              class=" w-full px-6 hover:scale-105 my-4 rounded-lg bg-white shadow-slate-300 shadow-md" 
                v-for="(item, i) in dataList" :key="i">              
              <div class="flex justify-center">
                <img class="h-40 rounded-md" :src="item.image" :alt="item.name" />
              </div>
              <div class="flex justify-between py-2 mt-3">
                <span class="text-xl font-semibold text-blue-600 italic">{{ item.name }}</span>
                <span class="text-lg font-semibold text-blue-500 italic">{{ item.brand }}</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-xl font-bold">{{ item.price }} $</h1>                
                <h1 class="text-lg font-light">{{ installmentPayment(item.price) }} $ / 12 months</h1>                
              </div>
              <div class="flex justify-around py-4">
                <button class="rounded bg-green-600 text-white font-semibold tracking-wide px-2 py-1 mr-1">Installment Plan</button>
                <button class="rounded bg-blue-600 text-white px-2 py-1 ml-1">Buy 1</button>
              </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import type { ListType } from "@/types/types";
/**
 * Props List
 */
const props = defineProps({
    dataList: {
        type: Array as PropType<ListType[]>
    }
})
/**
 * Props List
 */

// installment payment | Bo'lib to'lash
const installmentPayment = (price: number): number => {
  let monthlyPrice = price / 12 * 0.5
  return monthlyPrice + price / 12
}
</script>

<style lang="scss" scoped>

</style>