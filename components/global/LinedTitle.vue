<template>
    <div ref="linedTitle" class="flex items-center gap-2">
        <p id="head-title" class="text-lg md:text-xl">{{ title }}</p>
        <div :style="{ width: width }" class="border-b-[2px] border-[#CCCCCC]"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue'
import { initialAnimation } from '@/utils/constants.js';
import { finalAnimation } from '@/utils/constants.js';
import { useMotion } from '@vueuse/motion'

const props = defineProps({
    title: String,
    width: {
        Type: String,
        default: "80px"
    },
    initialAn: {
        Type: Object,
        default: { xPosition: 20 }
    },
    finalAn: {
        Type: Object,
        default: { delayTime: 300, stiffDuration: 60 }
    }
})

const { initialAn, finalAn } = toRefs(props)

const linedTitle = ref('')

onMounted(() => {
    useMotion(linedTitle, {
        initial: initialAnimation(initialAn.value),
        visibleOnce: finalAnimation(finalAn.value)
    })
})

</script>

<style>
#head-title {
    font-weight: 500;
    color: #252A34;
}
</style>