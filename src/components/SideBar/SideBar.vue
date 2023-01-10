<template>
    <div>
        <div class="border bg-white border-blue-400 rounded-xl">
            <h1 class="text-center font-semibold text-xl py-2 bg-gray-100 rounded-t-xl border-none">Brands</h1>
            <ul class=" flex justify-center py-4" v-for="(brand, i) in slicedBrands" :key="`brands-${i}`">
                <li class=" border-blue-400 text-slate-500 font-medium text-xl w-8/12 rounded-full">
                    <input class="rounded mr-2" type="checkbox"/>  {{ brand.name }}
                </li>
            </ul>
            <button @click="showMore = true" class="text-center flex justify-center items-center py-2 font-semibold w-full  text-xl  bg-gray-100 rounded-b-xl border-none">
                Show more 
                <mdicon  class="text-black mx-1" name="arrow-down-bold" />
            </button>
        </div>
        <div class="border bg-white border-blue-400 rounded-xl mt-4">
            <h1 class="text-center font-semibold text-xl py-2 bg-gray-100 rounded-t-xl border-none">By Price</h1>
            <span class="flex justify-between px-8 my-4">
                <input class="mr-2" min="50" max="500" step="50" v-model="priceForm.min" type="range"/>{{ priceForm.min }}
            </span>
            <span class="flex justify-between px-8 my-4">
                <input class="mr-2" min="500" max="1000" step="50" v-model="priceForm.max" type="range"/>{{ priceForm.max }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
/**
 * Brands
 */
type brandType = {
    id: number,
    name: string
}
const brands = ref<brandType[]>([
    {
        id: 1,
        name: "Brand 1"
    },
    {
        id: 2,
        name: "Brand 2"
    },
    {
        id: 3,
        name: "Brand 3"
    },
    {
        id: 4,
        name: "Brand 4"
    }
])
const slicedBrands = ref(brands.value.slice(0, brands.value.length / 2 )) 
const showMore = ref(false)
watch(showMore, () => {
    slicedBrands.value = brands.value
})
/**
 * Brands
 */
/**
 * Price
 */
const priceForm = ref({
    min: 50,
    max: 500
})
/**
 * Price
 */
</script>

<style lang="scss" scoped>

</style>