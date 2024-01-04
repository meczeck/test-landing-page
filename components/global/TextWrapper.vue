<template>
    <p ref="mainText" class="content-text">
        <slot />
    </p>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { initialAnimation } from '@/utils/constants.js';
import { finalAnimation } from '@/utils/constants.js';
import { useMotion } from '@vueuse/motion'

const props = defineProps({
    initialAn: {
        Type: Object,
        default: { yPosition: 20 }
    },
    finalAn: {
        Type: Object,
        default: { delayTime: 700, stiffDuration: 50 }
    }
})

const { initialAn, finalAn } = toRefs(props)

const mainText = ref('')

onMounted(() => {
    useMotion(mainText, {
        initial: initialAnimation(initialAn.value),
        visibleOnce: finalAnimation(finalAn.value)
    })
})

</script>

<style  scoped>
.content-text {
    color: #444444;
    font-size: 16px;
    line-height: 26px;
}
</style>