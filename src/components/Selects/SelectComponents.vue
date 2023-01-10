<template>
    <div>
        <select @change="onChange(($event.target as HTMLSelectElement).value)" v-model="selected" class="p-2 rounded-lg text-slate-800 font-semibold outline-none">
            <option 
                v-for="(limit, i) in selectList" :key="`limits-${i}`" 
                :value="limit.value"
                class="outline-none text-lg font-semibold"
            >
                {{ limit.text }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup> 
import { ref, defineProps, PropType } from 'vue';
const emit = defineEmits(['input'])
type ListType = {
    text: string | number,
    value: string | number
}   
const props = defineProps({
    selectList: {
        type: Array as PropType<ListType[]>,
        default: []
    }
})
const selected = ref<string | number>(props.selectList.length ? props.selectList[0].value : "")
const onChange = (event: string | number | null) => {
    emit('input', event)
}
</script>

<style lang="scss" scoped>

</style>