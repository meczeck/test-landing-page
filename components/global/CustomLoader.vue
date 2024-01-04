<template>
    <div style="width: 100%; margin-top: 8px; margin-bottom: 8px; " :style="{height: loaderHeight}"  :class="{'justify-center': position ==='center', 'justify-start': position === 'start', 'justify-end': 'end'}" class="flex" >
        <div class="gap-3 flex items-center">
            <span class="loading-text">{{ loadingText }}</span><span :style="{ width: loaderSize, height: loaderSize }"
                class="loader"></span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    loadingText: {
        Type: String,
        default: 'Loading...'
    },
    loaderSize: {
        Type: String,
        default: '35px'
    },
    position: { //position can be center, start
        Type: String,
        default: 'center'
    },
    loaderHeight: {
        Type: String,
        default: "content-fit"
    }
})


</script>

<style  scoped>
:root {
    --loader-color: var(--color, #891B58);
}

.loader {
    border: 4px solid #891B58;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading-text {
    font-weight: 500;
}
</style>