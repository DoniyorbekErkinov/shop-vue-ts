<template>
    <div>
        <!-- onChange TypeScript can't take event for this we give it as HTMLSelectElement -->
        <select 
            @change="onChange(($event.target as HTMLSelectElement).value)" 
                v-model="selected" 
                    class="p-2 rounded-lg text-slate-800 font-semibold outline-none">
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
import type { SelectType } from "@/types/types";
/**
 * Created Type and props
 */ 
const props = defineProps({
    selectList: {
        type: Array as PropType<SelectType[]>,
        default: []
    }
})
/**
 * Created Type and props
 */
// defineEmits creates emit list than we can call them
const emit = defineEmits(['input'])
// selected variable gets first object's value of list
const selected = ref<string | number>(props.selectList.length ? props.selectList[0].value : "")
//sends value to parent component
const onChange = (event: string | number | null) => {
    emit('input', event)
}
</script>

<style lang="scss" scoped>

</style>