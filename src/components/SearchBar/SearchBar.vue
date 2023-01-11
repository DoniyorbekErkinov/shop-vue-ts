<template>
    <div class="container">
        <label class="bg-white flex justify-between ml-8 w-full items-center rounded-lg">
            <input @input="updateValue" :value="search"  class="text-gray-800 w-full outline-none rounded-lg py-2 px-4" type="text" placeholder="Search..."/>
            <mdicon class="text-black mx-1 cursor-pointer" name="magnify" />
        </label>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const search = ref("")
const emit = defineEmits(['update:search'])
const updateValue = (event) => {
    emit('update:search', (event.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>

</style>