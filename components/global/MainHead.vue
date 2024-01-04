<template>
    <h4 ref="mainHeader" class="card-title text-[26px] lg:text-[39px]">
        <slot />
    </h4>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { initialAnimation } from '@/utils/constants.js';
import { finalAnimation } from '@/utils/constants.js';
import { useMotion } from '@vueuse/motion'

const props = defineProps({
    initialAn: {
        Type: Object,
        default:{ yPosition: 50 }
    },
    finalAn: {
        Type: Object,
        default: { delayTime: 600, stiffDuration: 60 }
    }
})

const { initialAn, finalAn } = toRefs(props)


const mainHeader = ref('')


onMounted(() => {
    useMotion(mainHeader, {
        initial: initialAnimation(initialAn.value),
        visibleOnce: finalAnimation(finalAn.value)
    })
})

</script>

<style  scoped>
.card-title {
    color: #252A34;
    list-style: none;
    line-height: 50px;
}

@media screen and (max-width: 800px) {
    .card-title {
        line-height: 35px;
    }
}
</style>