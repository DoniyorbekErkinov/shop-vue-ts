<template>
    <div>
        <h1 class="text-red-600">Details</h1>
        <div>{{ singleProduct }}</div>
    </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex';
import {ListType} from '../../types/types';
const route = useRoute()
const productId = ref<string>('')
const store = useStore()
const singleProduct = ref<ListType>({})

onMounted(() => {
    productId.value = route.params.id            
    store.commit('getSingleProduct', productId.value)
    singleProduct.value = store.state.singleProduct
})
</script>
